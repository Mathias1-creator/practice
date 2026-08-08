import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '8+', label: 'Years Experience', type: 'number' },
  { value: '✓', label: 'C27 Licensed', type: 'check' },
  { value: '✓', label: 'Female Owned', type: 'check' },
  { value: '100%', label: 'Bonded & Insured', type: 'number' },
];

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let current = 0;
    const step = Math.max(1, Math.floor(num / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(current);
    }, 40);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section
      className="py-10"
      style={{ background: '#f2ece6', borderTop: '1px solid #e4dcd4', borderBottom: '1px solid #e4dcd4' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              {stat.type === 'check' ? (
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#c9547a' }} />
                </div>
              ) : (
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2" style={{ color: '#c9547a' }}>
                  <CountUp target={stat.value.replace('+', '').replace('%', '')} suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''} />
                </p>
              )}
              <p className="font-body text-sm font-medium" style={{ color: '#5a5a5a' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}