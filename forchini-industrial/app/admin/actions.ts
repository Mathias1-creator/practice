'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'

function extractFields(formData: FormData) {
  return {
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    make: (formData.get('make') as string) || null,
    model: (formData.get('model') as string) || null,
    year: formData.get('year') ? Number(formData.get('year')) : null,
    usage: (formData.get('usage') as string) || null,
    condition: (formData.get('condition') as string) || null,
    location: (formData.get('location') as string) || null,
    price: formData.get('price') ? Number(formData.get('price')) : null,
    status: formData.get('status') as string,
    description: (formData.get('description') as string) || null,
    featured: formData.get('featured') === 'true',
  }
}

async function uploadImages(
  supabase: ReturnType<typeof createServerClient>,
  files: File[],
  listingId: string
): Promise<string[]> {
  const urls: string[] = []
  for (const file of files) {
    if (!file || file.size === 0) continue
    const ext = file.name.split('.').pop() ?? 'jpg'
    const path = `${listingId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { error } = await supabase.storage
      .from('listing-photos')
      .upload(path, file, { contentType: file.type, upsert: false })
    if (!error) {
      const { data: urlData } = supabase.storage
        .from('listing-photos')
        .getPublicUrl(path)
      urls.push(urlData.publicUrl)
    }
  }
  return urls
}

export async function createListing(formData: FormData) {
  const supabase = createServerClient()
  const fields = extractFields(formData)

  // Insert listing first to get the ID
  const { data: listing, error } = await supabase
    .from('listings')
    .insert({ ...fields, images: [] })
    .select('id')
    .single()

  if (error || !listing) {
    throw new Error(error?.message ?? 'Failed to create listing')
  }

  // Handle image uploads
  const files = formData.getAll('images') as File[]
  const imageUrls = await uploadImages(supabase, files, listing.id)

  if (imageUrls.length > 0) {
    await supabase
      .from('listings')
      .update({ images: imageUrls })
      .eq('id', listing.id)
  }

  revalidatePath('/listings')
  revalidatePath('/')
  redirect('/admin')
}

export async function updateListing(id: string, formData: FormData) {
  const supabase = createServerClient()
  const fields = extractFields(formData)

  // Handle new image uploads
  const newFiles = formData.getAll('images') as File[]
  const newImageUrls = await uploadImages(supabase, newFiles, id)

  // Get existing images to keep
  const keepExisting = formData.get('keep_existing') === 'true'
  let images: string[] = []

  if (keepExisting) {
    const { data: existing } = await supabase
      .from('listings')
      .select('images')
      .eq('id', id)
      .single()
    images = (existing?.images as string[]) ?? []
  }

  // Handle removed images
  const removedImages = formData.getAll('remove_image') as string[]
  images = images.filter((url) => !removedImages.includes(url))

  // Append new images
  images = [...images, ...newImageUrls]

  const { error } = await supabase
    .from('listings')
    .update({ ...fields, images })
    .eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/listings')
  revalidatePath(`/listings/${id}`)
  revalidatePath('/')
  redirect('/admin')
}

export async function deleteListing(id: string) {
  const supabase = createServerClient()

  // Delete storage files
  const { data: listing } = await supabase
    .from('listings')
    .select('images')
    .eq('id', id)
    .single()

  if (listing?.images?.length) {
    const paths = (listing.images as string[]).map((url: string) => {
      const parts = url.split('/listing-photos/')
      return parts[1] ?? ''
    }).filter(Boolean)

    if (paths.length) {
      await supabase.storage.from('listing-photos').remove(paths)
    }
  }

  const { error } = await supabase.from('listings').delete().eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/listings')
  revalidatePath('/')
  redirect('/admin')
}
