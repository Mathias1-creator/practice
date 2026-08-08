import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <span
      className="font-body inline-block text-xs font-semibold uppercase"
      style={{ color: '#c9547a', letterSpacing: '0.22em', fontSize: '0.7rem' }}
    >
      {children}
    </span>
  );
}