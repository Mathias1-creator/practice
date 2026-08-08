import React from 'react';
import { Link } from 'react-router-dom';

export default function PrimaryButton({ children, to, href, onClick, className = '' }) {
  const base =
    'inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded transition-all duration-[350ms] ease-in-out cursor-pointer text-center';
  const colors = 'bg-pine text-white hover:bg-forest hover:shadow-lg hover:-translate-y-[2px]';

  if (href) {
    return (
      <a href={href} className={`${base} ${colors} ${className}`}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={`${base} ${colors} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${colors} ${className}`}>
      {children}
    </button>
  );
}