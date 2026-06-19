import React from 'react';
import useScrollAnimation from './useScrollAnimation';

export default function SectionHeading({ title, subtitle, light = false, className = '' }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${light ? 'text-white/60' : 'text-sand'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}