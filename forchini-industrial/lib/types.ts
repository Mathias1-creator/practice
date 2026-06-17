export interface Listing {
  id: string
  title: string
  category: 'construction' | 'aggregate' | 'agricultural' | 'trucks'
  make?: string
  model?: string
  year?: number
  usage?: string
  condition?: string
  location?: string
  price?: number
  status: 'available' | 'pending' | 'sold'
  description?: string
  featured: boolean
  images: string[]
  created_at: string
}
