import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const BADGES = [
  'Available 24/7',
  'Lic# 1132312',
  'Residential & Commercial',
  '5.0 Stars · 18 Google Reviews',
  'Honest & Fairly Priced',
];

export default function TrustBar() {
  return (
    <section className="bg-ray-black py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {BADGES.map((badge, i) => (
            <ScrollReveal key={i} delay={i * 100} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:block w-px h-5 bg-ray-red/50 mx-5" />
              )}
              <span className="font-dm font-semibold text-xs sm:text-sm text-white uppercase tracking-wider px-3 sm:px-0">
                {badge}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}