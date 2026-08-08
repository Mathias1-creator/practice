import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { target: 10, suffix: '+', label: 'Years in Business' },
  { target: 2, suffix: '', label: 'Counties Served' },
  { target: 5.0, suffix: '', label: 'Star Rating on Angi', decimal: true },
  { target: 100, suffix: '%', label: 'Licensed & Insured' },
];

function AnimatedCounter({ target, suffix, decimal, isVisible }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="font-grotesk text-5xl md:text-6xl font-black text-[#c8f500]">
      {decimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#111111' }} className="py-24 border-y border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`font-grotesk text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          A Decade of Transforming Outdoor Spaces
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                decimal={stat.decimal}
                isVisible={isVisible}
              />
              <p className="font-grotesk text-[#888888] text-xs mt-3 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}