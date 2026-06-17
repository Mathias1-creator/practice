import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createServerClient } from '@/lib/supabase/server'
import ListingForm from '@/app/admin/ListingForm'
import { updateListing } from '@/app/admin/actions'
import DeleteButton from '@/app/admin/DeleteButton'
import type { Listing } from '@/lib/types'

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let listing: Listing | null = null
  try {
    const supabase = createServerClient()
    const { data } = await supabase.from('listings').select('*').eq('id', id).single()
    listing = data as Listing | null
  } catch {
    // handled below
  }

  if (!listing) notFound()

  const updateWithId = updateListing.bind(null, id)

  return (
    <>
      <div className="mb-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Edit Listing</h1>
            <p className="text-slate-400 text-sm mt-1 truncate max-w-xl">{listing.title}</p>
          </div>
          <DeleteButton id={id} />
        </div>
      </div>

      <ListingForm listing={listing} action={updateWithId} submitLabel="Save Changes" />
    </>
  )
}
