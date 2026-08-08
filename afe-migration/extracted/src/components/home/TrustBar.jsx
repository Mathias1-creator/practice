import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const badges = [
  '10+ Years Experience',
  'Licensed Landscape Contractor',
  'Residential & Commercial',
  'SLO & Santa Barbara County',
  'Se Habla Español',
];

export default function TrustBar() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#111111' }} className="py-6 border-y border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex items-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-grotesk text-xs tracking-widest uppercase text-white font-medium whitespace-nowrap px-4 md:px-6">
                {badge}
              </span>
              {i < badges.length - 1 && (
                <div className="hidden md:block w-[1px] h-4 bg-[#c8f500]/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}