import React, { useRef, useState, useEffect } from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const STATS = [
  { value: '24/7', label: 'Available', isText: true },
  { value: 5.0, label: 'Star Rating', suffix: '', decimals: 1 },
  { value: 18, label: 'Google Reviews', suffix: '' },
  { value: 100, label: 'Honest & Reliable', suffix: '%' },
];

function AnimatedNumber({ value, suffix = '', decimals = 0, isText = false }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(isText ? '' : '0');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isText) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated, decimals, isText]);

  if (isText) return <span>{value}</span>;

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-ray-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-ray-charcoal tracking-tight text-center">
            The Numbers Behind the Work
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center relative">
                <div className="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl text-ray-red">
                  <AnimatedNumber {...stat} />
                </div>
                <p className="font-inter font-medium text-sm text-ray-charcoal mt-3 uppercase tracking-wider">
                  {stat.label}
                </p>
                {i < STATS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-ray-red/20" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}