import { useEffect, useRef, useState } from 'react';
import useFadeUp from '../../hooks/useFadeUp';

const STATS = [
  { value: 7, suffix: '+', label: 'Years Experience', countUp: true },
  { value: 500, suffix: '+', label: 'Jobs Completed', countUp: true },
  { display: '24/7', label: 'Emergency Service', countUp: false },
  { display: '100%', label: 'Work Guaranteed', countUp: false },
];

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const start = Date.now();
        const step = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-7xl" style={{ color: '#7c3aed' }}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up py-20 px-6 md:px-20" style={{ backgroundColor: '#0a1628' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="text-center py-6"
            style={{
              borderRight: i < STATS.length - 1 && i !== 1 ? '1px solid rgba(91,200,245,0.15)' : 'none',
            }}
          >
            {stat.countUp ? (
              <CountUp target={stat.value} suffix={stat.suffix} />
            ) : (
              <span className="font-heading text-5xl md:text-7xl" style={{ color: '#7c3aed' }}>
                {stat.display}
              </span>
            )}
            <p className="font-body text-[13px] uppercase tracking-[2px] mt-2" style={{ color: '#94b8d0' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}