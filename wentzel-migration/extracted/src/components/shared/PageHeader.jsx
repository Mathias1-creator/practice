import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ headline, subtext, bgColor = 'bg-[#2E7D32]' }) {
  return (
    <section className={`${bgColor} py-20 lg:py-28 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {headline}
          </h1>
          {subtext && (
            <p className="text-white/80 text-lg md:text-xl max-w-2xl">
              {subtext}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}