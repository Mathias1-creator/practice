import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_IMG = '/images/71a2a5a1d_IMG_4144.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Beautiful paver patio with California landscaping" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-6"
        >
          TRANSFORM YOUR
          <br />
          OUTDOOR SPACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
        >
          Professional Landscaping & Hardscape for the Central Coast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-forest text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/30"
          >
            GET A FREE QUOTE
          </Link>
          <a
            href="tel:8056022230"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            CALL (805) 602-2230
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/60 text-sm tracking-wide"
        >
          Licensed · Lic# 1087803 C-27 · Serving SLO County · 17 Years Experience
        </motion.p>
      </div>
    </section>
  );
}