import Link from 'next/link'
import { createServerClient } from '@/lib/supabase/server'
import type { Listing } from '@/lib/types'

const CATEGORY_LABELS: Record<string, string> = {
  construction: 'Construction',
  aggregate: 'Aggregate',
  agricultural: 'Agricultural',
  trucks: 'Trucks & Transport',
}

const STATUS_STYLES: Record<string, string> = {
  available: 'bg-emerald-500/20 text-emerald-400',
  pending: 'bg-amber-500/20 text-amber-400',
  sold: 'bg-slate-500/20 text-slate-400',
}

function formatPrice(price?: number) {
  if (!price) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
}

export default async function AdminDashboard() {
  let listings: Listing[] = []
  let fetchError = false

  try {
    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    listings = (data as Listing[]) ?? []
  } catch {
    fetchError = true
  }

  const stats = {
    total: listings.length,
    available: listings.filter((l) => l.status === 'available').length,
    pending: listings.filter((l) => l.status === 'pending').length,
    sold: listings.filter((l) => l.status === 'sold').length,
    featured: listings.filter((l) => l.featured).length,
  }

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Listings Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">{stats.total} total listings</p>
        </div>
        <Link
          href="/admin/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Listing
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total, color: 'text-slate-200' },
          { label: 'Available', value: stats.available, color: 'text-emerald-400' },
          { label: 'Pending', value: stats.pending, color: 'text-amber-400' },
          { label: 'Sold', value: stats.sold, color: 'text-slate-400' },
          { label: 'Featured', value: stats.featured, color: 'text-amber-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className={`text-2xl font-bold ${color}`}>{value}</div>
            <div className="text-slate-500 text-sm">{label}</div>
          </div>
        ))}
      </div>

      {fetchError && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-5 mb-6">
          <p className="font-semibold">Could not load listings.</p>
          <p className="text-sm mt-1">Check that your Supabase environment variables are set and the listings table exists. Run <code className="bg-red-500/20 px-1 rounded">npx tsx scripts/setup-supabase.ts</code> to initialize the database.</p>
        </div>
      )}

      {/* Listings Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {listings.length === 0 && !fetchError ? (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-lg mb-4">No listings yet.</p>
            <Link
              href="/admin/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Create Your First Listing
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 font-medium px-4 py-3">Title</th>
                  <th className="text-left text-slate-400 font-medium px-4 py-3 hidden md:table-cell">Category</th>
                  <th className="text-left text-slate-400 font-medium px-4 py-3 hidden sm:table-cell">Price</th>
                  <th className="text-left text-slate-400 font-medium px-4 py-3">Status</th>
                  <th className="text-left text-slate-400 font-medium px-4 py-3 hidden lg:table-cell">Featured</th>
                  <th className="text-right text-slate-400 font-medium px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="text-white font-medium">{listing.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {listing.year && `${listing.year} · `}{listing.make ?? ''} {listing.model ?? ''}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-slate-300">{CATEGORY_LABELS[listing.category] ?? listing.category}</span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-amber-400 font-semibold">{formatPrice(listing.price)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_STYLES[listing.status] ?? ''}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {listing.featured ? (
                        <span className="text-amber-400">Yes</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/listings/${listing.id}`}
                          className="text-slate-400 hover:text-white text-xs transition-colors"
                          target="_blank"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/${listing.id}/edit`}
                          className="text-amber-400 hover:text-amber-300 text-xs font-medium transition-colors"
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
