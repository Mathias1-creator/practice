/**
 * Forchini Industrial Equipment — Supabase Setup Script
 *
 * Run with: npx tsx scripts/setup-supabase.ts
 *
 * This script:
 *   1. Creates the `listings` table with RLS and public read policy
 *   2. Creates the `listing-photos` storage bucket (public)
 *
 * Reads credentials from .env.local
 */

import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'

// ── Parse .env.local ──────────────────────────────────────────────────────────

function parseEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) {
    console.error(`\n  ERROR: ${filePath} not found.\n`)
    console.error('  Create .env.local with the following variables:')
    console.error('    NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co')
    console.error('    NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...')
    console.error('    SUPABASE_SERVICE_ROLE_KEY=sb_secret_...\n')
    process.exit(1)
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const result: Record<string, string> = {}

  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    let value = trimmed.slice(idx + 1).trim()
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    result[key] = value
  }
  return result
}

const envPath = path.join(process.cwd(), '.env.local')
const env = parseEnvFile(envPath)

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('\n  ERROR: Missing required environment variables in .env.local')
  console.error('  Needed: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY\n')
  process.exit(1)
}

// ── Extract project ref from URL ──────────────────────────────────────────────

const projectRef = new URL(supabaseUrl).hostname.split('.')[0]
console.log(`\n  Supabase project: ${projectRef}`)
console.log(`  URL: ${supabaseUrl}\n`)

// ── SQL to create table ───────────────────────────────────────────────────────

const TABLE_SQL = `
create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  make text,
  model text,
  year int,
  usage text,
  condition text,
  location text,
  price numeric,
  status text not null default 'available',
  description text,
  featured boolean not null default false,
  images text[] default '{}',
  created_at timestamptz default now()
);

alter table listings enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'listings' and policyname = 'public read'
  ) then
    execute 'create policy "public read" on listings for select using (true)';
  end if;
end $$;
`

// ── Run SQL via Supabase pg/query endpoint ────────────────────────────────────

async function runSQL(sql: string): Promise<{ success: boolean; error?: string }> {
  // Attempt 1: Supabase Studio internal endpoint
  try {
    const res = await fetch(`${supabaseUrl}/pg/query`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: sql }),
    })
    if (res.ok) {
      return { success: true }
    }
    const body = await res.text()
    // If 404, endpoint doesn't exist — fall through
    if (res.status !== 404) {
      return { success: false, error: `HTTP ${res.status}: ${body}` }
    }
  } catch {
    // network error, fall through
  }

  // Attempt 2: Supabase Management API (requires management token)
  // This usually won't work with just the service role key,
  // but we try anyway.
  try {
    const res = await fetch(
      `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: sql }),
      }
    )
    if (res.ok) {
      return { success: true }
    }
    // If 401/403, expected — service role key isn't a management API token
  } catch {
    // network error
  }

  return {
    success: false,
    error: 'Could not execute SQL via API. See manual instructions below.',
  }
}

// ── Create storage bucket ─────────────────────────────────────────────────────

async function createBucket(): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })

  // Check if bucket already exists
  const { data: buckets } = await supabase.storage.listBuckets()
  const exists = buckets?.some((b) => b.name === 'listing-photos')

  if (exists) {
    return { success: true }
  }

  const { error } = await supabase.storage.createBucket('listing-photos', {
    public: true,
    allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    fileSizeLimit: 10 * 1024 * 1024, // 10 MB
  })

  if (error) {
    return { success: false, error: error.message }
  }
  return { success: true }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('  Starting Supabase setup...\n')

  // 1. Create table
  process.stdout.write('  [1/2] Creating listings table... ')
  const sqlResult = await runSQL(TABLE_SQL)
  if (sqlResult.success) {
    console.log('DONE')
  } else {
    console.log('FAILED')
    console.log(`\n  Could not auto-create table: ${sqlResult.error}`)
    console.log('\n  ─── MANUAL STEP REQUIRED ───────────────────────────────────')
    console.log('  Open your Supabase dashboard SQL Editor and run:\n')
    console.log('  https://supabase.com/dashboard/project/' + projectRef + '/sql/new\n')
    console.log(TABLE_SQL)
    console.log('  ────────────────────────────────────────────────────────────\n')
  }

  // 2. Create bucket
  process.stdout.write('  [2/2] Creating listing-photos storage bucket... ')
  const bucketResult = await createBucket()
  if (bucketResult.success) {
    console.log('DONE')
  } else {
    console.log('FAILED')
    console.log(`\n  Bucket error: ${bucketResult.error}`)
    console.log('  Create a PUBLIC bucket named "listing-photos" in your Supabase dashboard.')
    console.log('  https://supabase.com/dashboard/project/' + projectRef + '/storage/buckets\n')
  }

  console.log('\n  Setup complete!')
  if (sqlResult.success && bucketResult.success) {
    console.log('  Everything is ready. Start the dev server with: npm run dev\n')
  } else {
    console.log('  Complete the manual steps above, then start the dev server.\n')
  }
}

main().catch((err) => {
  console.error('\n  Unexpected error:', err)
  process.exit(1)
})
