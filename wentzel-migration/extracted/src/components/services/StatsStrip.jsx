import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 25, suffix: '+', label: 'Years in Business' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: '5.0 ★', suffix: '', label: 'Google Rating' },
  { value: 'SLO County', suffix: '', label: 'Proudly Local' },
];

function CountUp({ target, suffix, started }) {
  const [count, setCount] = useState(0);
  const isNumber = typeof target === 'number';

  useEffect(() => {
    if (!started || !isNumber) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, isNumber]);

  if (!isNumber) return <span>{target}</span>;
  return <span>{started ? count : 0}{suffix}</span>;
}

export default function StatsStrip() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#1A1A1A] py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-4 text-center
                ${i !== 0 ? 'border-l border-white/10' : ''}
                ${i < 2 && i % 2 === 0 ? 'border-b border-white/10 lg:border-b-0' : ''}
                ${i === 1 ? 'border-b border-white/10 lg:border-b-0' : ''}
              `}
            >
              <span className="text-3xl md:text-4xl font-heading font-bold text-white leading-none mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} started={started} />
              </span>
              <span className="text-sm text-white/40 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}