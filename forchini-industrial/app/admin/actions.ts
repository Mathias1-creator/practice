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

/**
 * Returns a short-lived signed URL the browser can PUT a file to directly,
 * plus the resulting public URL. File bytes never pass through the server.
 */
export async function getSignedUploadUrl(
  filename: string,
  contentType: string
): Promise<{ signedUrl: string; publicUrl: string }> {
  const supabase = createServerClient()
  const ext = filename.split('.').pop()?.toLowerCase() ?? 'jpg'
  const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { data, error } = await supabase.storage
    .from('listing-photos')
    .createSignedUploadUrl(path)

  if (error || !data) throw new Error(error?.message ?? 'Failed to get upload URL')

  const { data: urlData } = supabase.storage
    .from('listing-photos')
    .getPublicUrl(path)

  return { signedUrl: data.signedUrl, publicUrl: urlData.publicUrl }
}

export async function createListing(formData: FormData) {
  const supabase = createServerClient()
  const fields = extractFields(formData)
  const images = formData.getAll('image_url').map(String).filter(Boolean)

  const { data: listing, error } = await supabase
    .from('listings')
    .insert({ ...fields, images })
    .select('id')
    .single()

  if (error || !listing) throw new Error(error?.message ?? 'Failed to create listing')

  revalidatePath('/listings')
  revalidatePath('/')
  redirect('/admin')
}

export async function updateListing(id: string, formData: FormData) {
  const supabase = createServerClient()
  const fields = extractFields(formData)
  const images = formData.getAll('image_url').map(String).filter(Boolean)

  const { error } = await supabase
    .from('listings')
    .update({ ...fields, images })
    .eq('id', id)

  if (error) throw new Error(error.message)

  revalidatePath('/listings')
  revalidatePath(`/listings/${id}`)
  revalidatePath('/')
  redirect('/admin')
}

export async function deleteListing(id: string) {
  const supabase = createServerClient()

  const { data: listing } = await supabase
    .from('listings')
    .select('images')
    .eq('id', id)
    .single()

  if (listing?.images?.length) {
    const paths = (listing.images as string[])
      .map((url: string) => {
        const parts = url.split('/listing-photos/')
        return parts[1] ?? ''
      })
      .filter(Boolean)

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
