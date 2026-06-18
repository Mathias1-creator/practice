import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const stats = [
  { value: '17+', label: 'Years in Business' },
  { value: '500+', label: 'Projects Completed' },
  { value: '5★', label: 'Google Rating' },
  { value: '100%', label: 'Licensed & Insured' },
];

export default function StatsStrip() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="bg-charcoal py-16 px-4"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">{stat.value}</p>
            <p className="text-stone text-sm tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}