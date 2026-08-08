import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:8058969695"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      style={{ background: '#c9547a' }}
      aria-label="Call Garden Chic"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
}