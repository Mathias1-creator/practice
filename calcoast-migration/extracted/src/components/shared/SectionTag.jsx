import React from 'react';

export default function SectionTag({ children, light = false }) {
  return (
    <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${
      light ? 'text-stone' : 'text-forest'
    }`}>
      {children}
    </span>
  );
}