import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, CalendarDays, ArrowRight } from 'lucide-react';

const HERO_BG = '/images/4046197f4_generated_0df5f8ae.jpg';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile: photo on top */}
      <div className="lg:hidden w-full h-64 relative">
        <img src={HERO_BG} alt="Premium paver patio" className="w-full h-full object-cover" />
      </div>

      {/* Left: content */}
      <div className="w-full lg:w-[52%] flex-shrink-0 flex items-center" style={{ backgroundColor: '#2D5016' }}>
        <div className="w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-0 lg:pt-32 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
          >
            Licensed · Bonded · Insured · Central Coast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
          >
            Premium Hardscape
            <br />
            <span className="text-stone italic">&</span> Irrigation
            <br />
            <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl">for the Central Coast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/60 text-base lg:text-lg max-w-md mb-10 leading-relaxed"
          >
            Custom Pavers · Retaining Walls · Irrigation Systems · Landscape Construction
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-stone text-obsidian font-bold text-sm px-7 py-4 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+18058066476"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold text-sm px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              (805) 806-6476
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-white/30 text-xs tracking-wide"
          >
            Serving San Miguel · Paso Robles · Templeton · Atascadero · San Luis Obispo · and more
          </motion.p>
        </div>
      </div>

      {/* Right: full-bleed photo — desktop only */}
      <div className="hidden lg:block flex-1 relative">
        <img src={HERO_BG} alt="Premium paver patio" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>
  );
}