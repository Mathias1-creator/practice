import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const areas = [
  'San Luis Obispo', 'Arroyo Grande', 'Grover Beach', 'Pismo Beach',
  'Santa Maria', 'Nipomo', 'Avila Beach', 'Los Osos', 'Atascadero', 'Paso Robles',
];

export default function ServiceArea() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-charcoal py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-12">
          Proudly Serving the Central Coast
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, i) => (
            <span
              key={i}
              className="bg-forest text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}