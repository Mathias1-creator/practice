import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute inset-0 bg-[#c8f500]/30 animate-pulse-ring" />
      <a
        href="tel:+18056214093"
        className="relative flex items-center justify-center w-14 h-14 bg-[#c8f500] text-black shadow-xl hover:bg-[#c8f500]/90 transition-all duration-300 hover:scale-110"
        title="Call AFE Pacific"
      >
        <Phone className="w-5 h-5" />
      </a>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-xs font-grotesk px-3 py-1.5 whitespace-nowrap">
          Call AFE Pacific
        </div>
      </div>
    </div>
  );
}