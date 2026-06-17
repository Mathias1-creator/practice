import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createServerClient } from '@/lib/supabase/server'
import type { Listing } from '@/lib/types'

const CATEGORY_LABELS: Record<string, string> = {
  construction: 'Construction',
  aggregate: 'Aggregate',
  agricultural: 'Agricultural',
  trucks: 'Trucks & Transport',
}

const STATUS_STYLES: Record<string, string> = {
  available: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  pending: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  sold: 'bg-slate-500/20 text-slate-400 border border-slate-500/30',
}

function formatPrice(price?: number) {
  if (!price) return 'Price on Request'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

async function getListing(id: string): Promise<Listing | null> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('listings')
      .select('*')
      .eq('id', id)
      .single()
    return data as Listing | null
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const listing = await getListing(id)
  if (!listing) return { title: 'Listing Not Found | Forchini Industrial Equipment' }
  return {
    title: `${listing.title} | Forchini Industrial Equipment`,
    description: listing.description ??
      `${listing.year ?? ''} ${listing.make ?? ''} ${listing.model ?? ''} — ${CATEGORY_LABELS[listing.category] ?? listing.category} equipment for sale in Northern California.`.trim(),
  }
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const listing = await getListing(id)
  if (!listing) notFound()

  const specs = [
    { label: 'Category', value: CATEGORY_LABELS[listing.category] ?? listing.category },
    { label: 'Make', value: listing.make },
    { label: 'Model', value: listing.model },
    { label: 'Year', value: listing.year?.toString() },
    { label: 'Usage', value: listing.usage },
    { label: 'Condition', value: listing.condition },
    { label: 'Location', value: listing.location },
  ].filter((s) => s.value)

  const emailSubject = encodeURIComponent(`Inquiry about ${listing.title}`)

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/listings" className="hover:text-amber-400 transition-colors">Listings</Link>
            <span>/</span>
            <span className="text-slate-200 truncate max-w-xs">{listing.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Photo gallery */}
            <div className="lg:col-span-3 space-y-4">
              {listing.images && listing.images.length > 0 ? (
                <>
                  <div className="relative aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden">
                    <Image
                      src={listing.images[0]}
                      alt={listing.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  {listing.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                      {listing.images.slice(1).map((img, i) => (
                        <div key={i} className="relative aspect-square bg-slate-800 rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`${listing.title} photo ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 25vw, 15vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-[4/3] bg-slate-800 rounded-xl flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <svg className="w-20 h-20 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>No photos available</p>
                  </div>
                </div>
              )}

              {/* Description */}
              {listing.description && (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mt-6">
                  <h2 className="text-white font-semibold text-lg mb-3">Description</h2>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">{listing.description}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">

              {/* Title / price / status */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h1 className="text-white text-2xl font-bold leading-tight">{listing.title}</h1>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize shrink-0 ${STATUS_STYLES[listing.status] ?? ''}`}>
                    {listing.status}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-amber-400 mb-4">
                  {formatPrice(listing.price)}
                </div>
                {listing.location && (
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.location}
                  </div>
                )}
              </div>

              {/* Specs */}
              {specs.length > 0 && (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                  <h2 className="text-white font-semibold text-base mb-4">Specifications</h2>
                  <dl className="space-y-3">
                    {specs.map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-sm gap-4">
                        <dt className="text-slate-400 shrink-0">{label}</dt>
                        <dd className="text-slate-200 font-medium text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Contact CTAs */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-3">
                <h2 className="text-white font-semibold text-base mb-4">Interested in this machine?</h2>
                <a
                  href={`mailto:sales@forchiniindustrial.com?subject=${emailSubject}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg text-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email About This Machine
                </a>
                <a
                  href="tel:+17077584253"
                  className="flex items-center justify-center gap-3 w-full py-4 border-2 border-slate-600 hover:border-amber-500 text-slate-200 hover:text-amber-400 font-bold rounded-lg text-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (707) 758-4253
                </a>
              </div>

              <Link
                href="/listings"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
