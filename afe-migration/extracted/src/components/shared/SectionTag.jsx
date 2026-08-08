import React from 'react';

export default function SectionTag({ children, variant = 'lime' }) {
  const colors = {
    lime: 'text-[#c8f500]',
    gold: 'text-[#c8f500]',
    forest: 'text-[#c8f500]',
    white: 'text-white',
  };
  return (
    <span className={`font-grotesk text-xs tracking-[0.2em] uppercase font-bold ${colors[variant]}`}>
      {children}
    </span>
  );
}