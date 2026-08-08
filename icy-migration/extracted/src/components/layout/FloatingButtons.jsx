import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+16265595946"
        className="group relative w-14 h-14 md:w-12 md:h-12 bg-alpine-green rounded-full flex items-center justify-center shadow-lg animate-pulse-soft hover:scale-110 transition-transform duration-200"
        aria-label="Call Alpine Meadows"
      >
        <Phone className="w-6 h-6 md:w-5 md:h-5 text-white" />
        <span className="absolute right-full mr-3 bg-alpine-charcoal text-white text-xs font-outfit px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Call Alpine Meadows
        </span>
      </a>
      <Link
        to="/contact"
        className="group relative w-14 h-14 md:w-12 md:h-12 bg-alpine-terra rounded-full flex items-center justify-center shadow-lg animate-pulse-soft hover:scale-110 transition-transform duration-200"
        aria-label="Request a Quote"
        style={{ animationDelay: '0.5s' }}
      >
        <FileText className="w-6 h-6 md:w-5 md:h-5 text-white" />
        <span className="absolute right-full mr-3 bg-alpine-charcoal text-white text-xs font-outfit px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Request a Quote
        </span>
      </Link>
    </div>
  );
}