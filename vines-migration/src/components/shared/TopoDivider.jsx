import React from 'react';

export default function TopoDivider({ className = '' }) {
  return (
    <div className={`w-full max-w-[400px] mx-auto py-2 ${className}`}>
      <svg viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 28 Q60 12 120 22 Q200 36 280 18 Q340 8 400 20" stroke="#9a7b43" strokeWidth="1" opacity="0.2" />
        <path d="M0 20 Q80 8 160 18 Q240 30 320 14 Q370 6 400 12" stroke="#a89a82" strokeWidth="1" opacity="0.15" />
        <path d="M0 14 Q100 4 200 16 Q300 28 400 8" stroke="#9a7b43" strokeWidth="1" opacity="0.12" />
      </svg>
    </div>
  );
}