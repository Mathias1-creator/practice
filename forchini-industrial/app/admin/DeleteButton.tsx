'use client'

import { useTransition } from 'react'
import { deleteListing } from './actions'

export default function DeleteButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition()

  function handleClick() {
    if (!confirm('Delete this listing? This cannot be undone.')) return
    startTransition(() => deleteListing(id))
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="text-red-400 hover:text-red-300 disabled:opacity-50 text-sm font-medium transition-colors shrink-0"
    >
      {pending ? 'Deleting...' : 'Delete Listing'}
    </button>
  )
}
