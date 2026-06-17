import Link from 'next/link'
import { createServerClient } from '@/lib/supabase/server'
import ListingCard from '@/components/ListingCard'
import type { Listing } from '@/lib/types'

async function getFeaturedListings(): Promise<Listing[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('listings')
      .select('*')
      .eq('featured', true)
      .neq('status', 'sold')
      .order('created_at', { ascending: false })
      .limit(6)
    return (data as Listing[]) ?? []
  } catch {
    return []
  }
}

export default async function HomePage() {
  const featured = await getFeaturedListings()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Forchini Industrial Equipment
            </h1>
            <p className="text-slate-300 text-xl sm:text-2xl mb-10 leading-relaxed">
              Northern California equipment brokerage specializing in construction, aggregate, agricultural, and industrial equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-md text-lg transition-colors"
              >
                Browse Equipment
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-amber-500 text-slate-200 hover:text-amber-400 font-semibold rounded-md text-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Straightforward Equipment Brokerage
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              We connect buyers and sellers with straightforward representation, industry knowledge, and a commitment to professional service. Whether you&apos;re buying, selling, or searching for a specific piece of equipment, Forchini Industrial Equipment works to help you find the right machine at the right value.
            </p>
            <p className="text-slate-400 text-base mb-8">
              Brokerage service &mdash; contact me to sell your equipment, or to find the perfect piece to purchase.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Learn more about us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured listings */}
      {featured.length > 0 && (
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Equipment</h2>
                <p className="text-slate-400">Currently available machines</p>
              </div>
              <Link
                href="/listings"
                className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
              >
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            <div className="mt-10 text-center sm:hidden">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-md transition-colors"
              >
                View All Equipment
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact band */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-slate-900 font-semibold text-xs uppercase tracking-widest mb-2">Phone</div>
              <a
                href="tel:+17077584253"
                className="text-slate-900 font-bold text-2xl hover:underline block"
              >
                (707) 758-4253
              </a>
            </div>
            <div>
              <div className="text-slate-900 font-semibold text-xs uppercase tracking-widest mb-2">Email</div>
              <a
                href="mailto:sales@forchiniindustrial.com"
                className="text-slate-900 font-bold text-lg break-all hover:underline block"
              >
                sales@forchiniindustrial.com
              </a>
            </div>
            <div>
              <div className="text-slate-900 font-semibold text-xs uppercase tracking-widest mb-2">Hours</div>
              <div className="text-slate-900 font-bold text-lg">Available 24/7</div>
            </div>
            <div>
              <div className="text-slate-900 font-semibold text-xs uppercase tracking-widest mb-2">Areas Served</div>
              <div className="text-slate-900 font-bold text-lg">Northern California &amp; the Central Valley</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
