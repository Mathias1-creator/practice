import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-forest animate-pulse-ring" />
      
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-charcoal text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Call Cal Coast
      </span>

      {/* Button */}
      <a
        href="tel:+18058066476"
        className="relative flex items-center justify-center w-14 h-14 md:w-12 md:h-12 rounded-full bg-forest text-white shadow-xl shadow-forest/40 hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Call Cal Coast"
      >
        <Phone className="w-6 h-6 md:w-5 md:h-5" />
      </a>
    </div>
  );
}