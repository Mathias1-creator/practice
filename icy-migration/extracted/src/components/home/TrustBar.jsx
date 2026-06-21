import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const badges = [
  'Licensed · Bonded · Insured',
  '6 Years in Business · 15 Years Experience',
  'Residential & Commercial',
  'La Habra Heights & Surrounding Areas',
];

export default function TrustBar() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="bg-alpine-charcoal py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center">
              <p
                className={`font-outfit text-xs sm:text-sm uppercase tracking-wider text-white text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {badge}
              </p>
              {i < badges.length - 1 && (
                <div className="hidden sm:block w-[2px] h-5 bg-alpine-terra mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}