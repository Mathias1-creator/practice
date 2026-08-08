import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const STATS = [
  { target: 25, suffix: "+", label: "Years in Business" },
  { target: 3, suffix: "", label: "Counties Served" },
  { target: null, display: "FREE", label: "Estimates Always" },
];

function StatBlock({ stat, isLast }) {
  const { count, ref } = useCountUp(stat.target || 0, stat.target > 10 ? 2000 : 1200);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center py-8 md:py-0 ${
        !isLast ? "border-b md:border-b-0 md:border-r" : ""
      }`}
      style={{ borderColor: "#C0692A" }}
    >
      <span
        className="font-heading leading-none mb-2"
        style={{ color: "#C0692A", fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
      >
        {stat.display ? stat.display : `${count}${stat.suffix}`}
      </span>
      <span
        className="font-body font-medium text-base md:text-lg text-white"
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "#1C1F22" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading text="Built on 25 Years of Trust" light />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <StatBlock
              key={stat.label}
              stat={stat}
              isLast={i === STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}