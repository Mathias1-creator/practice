import { useEffect, useRef, useState } from "react";
import { MapPin, Hammer, Heart, Shield } from "lucide-react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

const items = [
  {
    icon: MapPin,
    countTarget: 7,
    suffix: "",
    label: "Counties Served",
    animated: true,
  },
  {
    icon: Hammer,
    countTarget: 100,
    suffix: "%",
    label: "Work Self-Performed",
    animated: true,
  },
  {
    icon: Heart,
    value: "Family-Owned",
    label: "and Operated",
    animated: false,
  },
  {
    icon: Shield,
    value: "Licensed",
    label: "Bonded and Insured",
    animated: false,
  },
];

export default function TrustBar() {
  return (
    <section style={{ backgroundColor: "#13233B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {items.map((item, i) =>
            item.animated ? (
              <AnimatedTrustItem key={i} icon={item.icon} countTarget={item.countTarget} suffix={item.suffix} label={item.label} />
            ) : (
              <StaticTrustItem key={i} icon={item.icon} value={item.value} label={item.label} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function AnimatedTrustItem({ icon: Icon, countTarget, suffix, label }) {
  const { count, ref } = useCountUp(countTarget, 1800);
  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      <Icon className="w-6 h-6 mb-1" style={{ color: "#1A8781" }} />
      <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
        {count}{suffix}
      </span>
      <span className="font-body text-sm text-white/60">{label}</span>
    </div>
  );
}

function StaticTrustItem({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Icon className="w-6 h-6 mb-1" style={{ color: "#1A8781" }} />
      <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
        {value}
      </span>
      <span className="font-body text-sm text-white/60">{label}</span>
    </div>
  );
}