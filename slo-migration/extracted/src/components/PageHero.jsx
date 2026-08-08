import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ headline, subheadline, breadcrumbs, bgImage }) {
  return (
    <section className="relative pt-20 lg:pt-24" style={{ backgroundColor: '#111111' }}>
      {bgImage && (
        <>
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">{breadcrumbs}</span>
          </div>
        )}
        <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-gray-400 text-lg max-w-2xl">{subheadline}</p>
        )}
      </div>
      {/* Red accent line */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #CC0000, transparent)' }}></div>
    </section>
  );
}