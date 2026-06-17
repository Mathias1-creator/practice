'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { createBrowserClient } from '@/lib/supabase/client'
import type { Listing } from '@/lib/types'

const CATEGORIES = [
  { value: '', label: 'All Categories' },
  { value: 'construction', label: 'Construction' },
  { value: 'aggregate', label: 'Aggregate' },
  { value: 'agricultural', label: 'Agricultural' },
  { value: 'trucks', label: 'Trucks & Transport' },
]

const STATUSES = [
  { value: '', label: 'All Status' },
  { value: 'available', label: 'Available' },
  { value: 'pending', label: 'Pending' },
]

export default function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; status?: string; q?: string }>
}) {
  const resolvedParams = use(searchParams)
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(resolvedParams.category ?? '')
  const [status, setStatus] = useState(resolvedParams.status ?? '')
  const [search, setSearch] = useState(resolvedParams.q ?? '')
  const [searchInput, setSearchInput] = useState(resolvedParams.q ?? '')

  useEffect(() => {
    async function fetchListings() {
      setLoading(true)
      const supabase = createBrowserClient()
      let query = supabase
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false })

      if (category) query = query.eq('category', category)
      if (status) query = query.eq('status', status)
      else query = query.neq('status', 'sold')

      if (search) {
        query = query.or(
          `title.ilike.%${search}%,make.ilike.%${search}%,model.ilike.%${search}%,description.ilike.%${search}%`
        )
      }

      const { data, error } = await query
      if (!error && data) setListings(data as Listing[])
      setLoading(false)
    }

    fetchListings()
  }, [category, status, search])

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSearch(searchInput)
  }

  const availableCount = listings.filter((l) => l.status === 'available').length

  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Listings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">Equipment Listings</h1>
          <p className="text-slate-400 text-lg">
            {loading ? 'Loading inventory…' : `${availableCount} ${availableCount === 1 ? 'machine' : 'machines'} available`}
          </p>
        </div>
      </section>

      <section className="py-10 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search equipment…"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            {/* Category filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
            >
              {CATEGORIES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

            {/* Status filter */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
            >
              {STATUSES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          {/* Active filters */}
          {(category || search) && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-slate-500 text-sm">Filters:</span>
              {category && (
                <button
                  onClick={() => setCategory('')}
                  className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-amber-500/20 transition-colors"
                >
                  {CATEGORIES.find((c) => c.value === category)?.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {search && (
                <button
                  onClick={() => { setSearch(''); setSearchInput('') }}
                  className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-amber-500/20 transition-colors"
                >
                  &ldquo;{search}&rdquo;
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Results */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-800 rounded-xl overflow-hidden animate-pulse">
                  <div className="aspect-[4/3] bg-slate-700" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-slate-700 rounded w-3/4" />
                    <div className="h-3 bg-slate-700 rounded w-1/2" />
                    <div className="h-5 bg-slate-700 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : listings.length === 0 ? (
            <div className="text-center py-24">
              <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
              {category || search ? (
                <>
                  <h3 className="text-slate-300 text-xl font-semibold mb-2">No equipment found</h3>
                  <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                  <button
                    onClick={() => { setCategory(''); setStatus(''); setSearch(''); setSearchInput('') }}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-slate-300 text-xl font-semibold mb-2">No equipment listed yet</h3>
                  <p className="text-slate-500">Check back soon.</p>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
