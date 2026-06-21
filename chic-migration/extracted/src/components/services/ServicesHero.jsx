import React from 'react';
import { motion } from 'framer-motion';

const heroImg = '/images/673afb483_generated_0ecdd9bd.png';

export default function ServicesHero() {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ height: '50vh', minHeight: '350px' }}>
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury garden services" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold italic text-white mb-3">
            Our Services
          </h1>
          <p className="font-body text-base md:text-lg text-white/80 max-w-lg" style={{ lineHeight: 1.75 }}>
            Premium landscape care tailored to your property's unique needs. From monthly maintenance to full installations.
          </p>
        </motion.div>

        {/* Frosted certification card */}
        <div
          className="hidden md:inline-flex absolute bottom-6 right-8 items-center gap-2 px-5 py-3 font-body text-xs font-medium text-white/90"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
          }}
        >
          C27 Landscaping Contractor · Licensed · Bonded · Insured
        </div>
      </div>
    </section>
  );
}