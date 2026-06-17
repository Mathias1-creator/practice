# Forchini Industrial Equipment

Production Next.js website for a heavy-equipment brokerage. 5 public pages plus a protected admin area for managing equipment listings with photos.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Supabase** (database + storage + auth)
- **Netlify** (deployment target)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured listings, contact band |
| `/listings` | Browse and filter all listings (client-side) |
| `/listings/[id]` | Listing detail with photo gallery |
| `/about` | Company story, what we do, equipment categories, contact CTA |
| `/contact` | Clickable phone, email, hours, and areas served (no form) |
| `/admin` | Dashboard — all listings (auth protected) |
| `/admin/new` | Create a new listing |
| `/admin/[id]/edit` | Edit or delete a listing |
| `/admin/login` | Admin sign-in |

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase project credentials:
- `NEXT_PUBLIC_SUPABASE_URL` — your project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon/publishable key (`sb_publishable_...`)
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (`sb_secret_...`)

### 3. Set up Supabase database and storage

```bash
npx tsx scripts/setup-supabase.ts
```

If the script cannot auto-create the table via API, it will print SQL you can paste into the Supabase SQL Editor at:
`https://supabase.com/dashboard/project/<ref>/sql/new`

**Storage bucket policies** — after bucket creation, add upload/delete policies in Supabase dashboard → Storage → listing-photos → Policies:

```sql
-- Allow authenticated users to upload
create policy "authenticated upload" on storage.objects
  for insert with check (
    bucket_id = 'listing-photos' and auth.role() = 'authenticated'
  );

-- Allow authenticated users to delete
create policy "authenticated delete" on storage.objects
  for delete using (
    bucket_id = 'listing-photos' and auth.role() = 'authenticated'
  );
```

### 4. Create an admin user

Supabase dashboard → Authentication → Users → Add user. Use those credentials at `/admin/login`.

### 5. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment to Netlify

1. Push to GitHub
2. Create a Netlify site from the repo
3. Build command: `npm run build` / Publish directory: `.next`
4. Add the three env vars in Netlify → Site settings → Environment variables
5. `netlify.toml` is already configured

## Database Schema

```sql
create table listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,           -- construction | aggregate | agricultural | trucks
  make text,
  model text,
  year int,
  usage text,                       -- e.g. "3,200 hours"
  condition text,                   -- Excellent | Good | Fair | Poor | Parts Only
  location text,
  price numeric,                    -- null = Price on Request
  status text default 'available',  -- available | pending | sold
  description text,
  featured boolean default false,
  images text[],                    -- array of public Supabase storage URLs
  created_at timestamptz default now()
);
```
