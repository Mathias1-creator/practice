import React, { useState, useEffect, useRef } from 'react';
import TopoTexture from '../shared/TopoTexture';
import useScrollReveal from '../shared/useScrollReveal';

const STATS = [
  { value: 30, symbol: '+', label: 'Years On The Land' },
  { value: 1000, symbol: '+', label: 'Acre Capability', format: true },
  { value: 2, symbol: '', label: 'State Licenses' },
  { value: 12, symbol: '+', label: 'Months A Year' },
];

function AnimatedNumber({ target, format, isVisible }) {
  const [current, setCurrent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  const display = format ? current.toLocaleString() : current;
  return <span>{display}</span>;
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="bg-forest relative overflow-hidden" ref={ref}>
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-light text-white text-[48px] md:text-[64px] leading-none mb-2">
                <AnimatedNumber target={s.value} format={s.format} isVisible={isVisible} />
                {s.symbol && <span className="text-brass">{s.symbol}</span>}
              </div>
              <div className="font-body font-medium uppercase text-[11px] tracking-[0.14em] text-bone/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}