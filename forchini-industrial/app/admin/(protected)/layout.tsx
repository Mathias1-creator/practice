import { redirect } from 'next/navigation'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerClient as createSSRClient } from '@supabase/ssr'
import SignOutButton from '../SignOutButton'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()

  const supabase = createSSRClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {
          // read-only in server components; middleware handles setting
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Middleware handles redirect but this is a safety net
  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Admin Nav */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center gap-2 text-white font-semibold">
              <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              Admin
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <Link href="/admin" className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded text-sm transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/new" className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded text-sm transition-colors">
                + New Listing
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-sm hidden sm:block">{user.email}</span>
            <Link
              href="/"
              className="text-slate-400 hover:text-white text-sm transition-colors"
              target="_blank"
            >
              View Site
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  )
}
