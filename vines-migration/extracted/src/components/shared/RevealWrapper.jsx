import React from 'react';
import useScrollReveal from './useScrollReveal';

export default function RevealWrapper({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}