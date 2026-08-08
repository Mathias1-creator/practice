import React from 'react';
import { Link } from 'react-router-dom';

export default function GhostButton({ children, to, href, light = false, className = '' }) {
  const base =
    'inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded border transition-all duration-[350ms] ease-in-out cursor-pointer text-center';
  const colors = light
    ? 'border-white/50 text-white hover:bg-white/10 hover:-translate-y-[2px]'
    : 'border-brass text-brass hover:bg-brass/5 hover:-translate-y-[2px]';

  if (href) {
    return (
      <a href={href} className={`${base} ${colors} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to || '/'} className={`${base} ${colors} ${className}`}>
      {children}
    </Link>
  );
}