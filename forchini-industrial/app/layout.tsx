import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forchini Industrial Equipment',
  description: 'Northern California equipment brokerage specializing in construction, aggregate, agricultural, and industrial equipment.',
  keywords: 'heavy equipment, machinery, equipment sales, agriculture, farming, aggregate, trucks, construction equipment, Northern California, Central Valley',
  metadataBase: new URL('https://forchiniindustrial.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
