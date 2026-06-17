import Link from 'next/link'
import Image from 'next/image'
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

export default function ListingCard({ listing }: { listing: Listing }) {
  const firstImage = listing.images?.[0]

  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-slate-700">
          {firstImage ? (
            <Image
              src={firstImage}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold bg-slate-900/80 text-slate-300 px-2 py-1 rounded-md backdrop-blur-sm">
              {CATEGORY_LABELS[listing.category] ?? listing.category}
            </span>
          </div>
          {listing.featured && (
            <div className="absolute top-3 right-3">
              <span className="text-xs font-semibold bg-amber-500 text-slate-900 px-2 py-1 rounded-md">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-base mb-1 group-hover:text-amber-400 transition-colors line-clamp-2">
            {listing.title}
          </h3>

          <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-3">
            {listing.year && <span>{listing.year}</span>}
            {listing.make && <span>{listing.make}</span>}
            {listing.model && <span>{listing.model}</span>}
            {listing.usage && (
              <>
                <span className="text-slate-600">·</span>
                <span>{listing.usage}</span>
              </>
            )}
          </div>

          {listing.location && (
            <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{listing.location}</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-amber-400 font-bold text-lg">
              {formatPrice(listing.price)}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[listing.status] ?? ''}`}>
              {listing.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
