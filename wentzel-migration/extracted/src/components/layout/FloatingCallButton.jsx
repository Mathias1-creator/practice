import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+18056744333"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-call"
      aria-label="Call Wentzel Irrigation"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}