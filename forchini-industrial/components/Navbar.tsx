'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-none">Forchini</div>
              <div className="text-amber-500 text-xs font-medium tracking-widest uppercase">Industrial Equipment</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/listings', label: 'Listings' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/listings"
              className="ml-4 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-md text-sm transition-colors"
            >
              View Equipment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden border-t border-slate-800 py-3 pb-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/listings', label: 'Listings' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/listings"
                className="block w-full text-center px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-md text-sm transition-colors"
                onClick={() => setOpen(false)}
              >
                View Equipment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
