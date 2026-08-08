import React from 'react';
import { useScrollAnimation, useCountUp } from '@/lib/useScrollAnimation';

const stats = [
  { value: '6', label: 'Years in Business', isNumber: false },
  { value: '15', label: 'Years Experience', isNumber: false },
  { value: '100%', label: 'Licensed · Bonded · Insured', isNumber: false },
  { value: 'R & C', label: 'Residential & Commercial', isNumber: false },
];

function StatCard({ stat, isVisible, delay }) {
  const count = useCountUp(stat.isNumber ? stat.value : 0, 2000, isVisible);

  return (
    <div
      className={`text-center transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-fraunces text-4xl md:text-5xl font-bold text-alpine-terra mb-2">
        {stat.isNumber ? `${count}${stat.suffix}` : stat.value}
      </p>
      <p className="font-inter text-sm text-white/80">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="bg-alpine-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Our Work Speaks for Itself
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <StatCard stat={stat} isVisible={isVisible} delay={i * 150} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-[2px] h-16 bg-alpine-terra/40 ml-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}