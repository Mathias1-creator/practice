import Link from 'next/link'
import ListingForm from '@/app/admin/ListingForm'
import { createListing } from '@/app/admin/actions'

export default function NewListingPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-white">New Listing</h1>
        <p className="text-slate-400 text-sm mt-1">Add a new equipment listing to the inventory.</p>
      </div>

      <ListingForm action={createListing} submitLabel="Create Listing" />
    </>
  )
}
