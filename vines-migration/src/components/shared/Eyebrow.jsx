import React from 'react';

export default function Eyebrow({ children, light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <span
        className="block w-[26px] h-[1px] flex-shrink-0"
        style={{ backgroundColor: light ? 'rgba(154,123,67,0.7)' : '#9a7b43' }}
      />
      <span
        className="font-body font-medium uppercase text-[12px] tracking-[0.2em]"
        style={{ color: light ? 'rgba(154,123,67,0.85)' : '#9a7b43' }}
      >
        {children}
      </span>
    </div>
  );
}