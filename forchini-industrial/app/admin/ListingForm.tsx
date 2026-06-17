'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Listing } from '@/lib/types'

const CATEGORIES = [
  { value: 'construction', label: 'Construction' },
  { value: 'aggregate', label: 'Aggregate' },
  { value: 'agricultural', label: 'Agricultural' },
  { value: 'trucks', label: 'Trucks & Transport' },
]

const CONDITIONS = ['Excellent', 'Good', 'Fair', 'Poor', 'Parts Only']

interface ListingFormProps {
  listing?: Listing
  action: (formData: FormData) => Promise<void>
  submitLabel: string
}

export default function ListingForm({ listing, action, submitLabel }: ListingFormProps) {
  const [existingImages, setExistingImages] = useState<string[]>(listing?.images ?? [])
  const [removedImages, setRemovedImages] = useState<string[]>([])
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([])
  const [featured, setFeatured] = useState(listing?.featured ?? false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleRemoveExisting(url: string) {
    setExistingImages((prev) => prev.filter((u) => u !== url))
    setRemovedImages((prev) => [...prev, url])
  }

  function handleNewFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    const previews = files.map((f) => URL.createObjectURL(f))
    setNewImagePreviews(previews)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      formData.set('featured', String(featured))
      formData.set('keep_existing', 'true')
      removedImages.forEach((url) => formData.append('remove_image', url))

      await action(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setSubmitting(false)
    }
  }

  const inputCls = 'w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors'
  const labelCls = 'block text-sm font-medium text-slate-300 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-4 text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-white font-semibold text-base mb-5">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="title">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={listing?.title}
              className={inputCls}
              placeholder="e.g. 2019 Caterpillar 336 Excavator"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="category">
              Category <span className="text-red-400">*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue={listing?.category}
              className={inputCls}
            >
              <option value="">Select category…</option>
              {CATEGORIES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls} htmlFor="status">
              Status <span className="text-red-400">*</span>
            </label>
            <select
              id="status"
              name="status"
              required
              defaultValue={listing?.status ?? 'available'}
              className={inputCls}
            >
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>

          <div>
            <label className={labelCls} htmlFor="make">Make</label>
            <input
              id="make"
              name="make"
              type="text"
              defaultValue={listing?.make}
              className={inputCls}
              placeholder="e.g. Caterpillar"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="model">Model</label>
            <input
              id="model"
              name="model"
              type="text"
              defaultValue={listing?.model}
              className={inputCls}
              placeholder="e.g. 336"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="year">Year</label>
            <input
              id="year"
              name="year"
              type="number"
              min="1950"
              max={new Date().getFullYear() + 1}
              defaultValue={listing?.year}
              className={inputCls}
              placeholder="2019"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="price">Price (USD)</label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="500"
              defaultValue={listing?.price}
              className={inputCls}
              placeholder="Leave blank for Price on Request"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="usage">Usage / Hours</label>
            <input
              id="usage"
              name="usage"
              type="text"
              defaultValue={listing?.usage}
              className={inputCls}
              placeholder="e.g. 3,200 hours"
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="condition">Condition</label>
            <select
              id="condition"
              name="condition"
              defaultValue={listing?.condition ?? ''}
              className={inputCls}
            >
              <option value="">Select condition…</option>
              {CONDITIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls} htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              defaultValue={listing?.location}
              className={inputCls}
              placeholder="e.g. Columbus, OH"
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              defaultValue={listing?.description ?? ''}
              className={`${inputCls} resize-none`}
              placeholder="Describe the equipment condition, features, recent maintenance, etc."
            />
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <button
                type="button"
                role="switch"
                aria-checked={featured}
                onClick={() => setFeatured(!featured)}
                className={`relative w-11 h-6 rounded-full transition-colors ${featured ? 'bg-amber-500' : 'bg-slate-600'}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${featured ? 'translate-x-5' : ''}`} />
              </button>
              <input type="hidden" name="featured" value={String(featured)} />
              <span className="text-slate-300 text-sm font-medium">Featured listing (shown on homepage)</span>
            </label>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-white font-semibold text-base mb-5">Photos</h2>

        {/* Existing photos */}
        {existingImages.length > 0 && (
          <div className="mb-5">
            <p className="text-slate-400 text-sm mb-3">Current photos (click X to remove):</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {existingImages.map((url) => (
                <div key={url} className="relative aspect-square bg-slate-700 rounded-lg overflow-hidden group">
                  <Image src={url} alt="listing photo" fill className="object-cover" sizes="120px" />
                  <button
                    type="button"
                    onClick={() => handleRemoveExisting(url)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    aria-label="Remove photo"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* New file upload */}
        <div>
          <label className={labelCls} htmlFor="images">
            {existingImages.length > 0 ? 'Add More Photos' : 'Upload Photos'}
          </label>
          <input
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleNewFiles}
            className="block w-full text-slate-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-slate-900 hover:file:bg-amber-400 file:cursor-pointer"
          />
          <p className="text-slate-500 text-xs mt-2">JPG, PNG, WebP accepted. Max 10 MB per file.</p>
        </div>

        {/* New image previews */}
        {newImagePreviews.length > 0 && (
          <div className="mt-4">
            <p className="text-slate-400 text-sm mb-3">New photos to upload:</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {newImagePreviews.map((src, i) => (
                <div key={i} className="relative aspect-square bg-slate-700 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`preview ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold rounded-lg transition-colors"
        >
          {submitting ? 'Saving…' : submitLabel}
        </button>
        <a href="/admin" className="text-slate-400 hover:text-white text-sm transition-colors">
          Cancel
        </a>
      </div>
    </form>
  )
}
