import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroImage = '/images/3b8b9aa0c_generated_d095e00d.png';

const phrases = [
  { first: 'Your Garden,', last: 'Elevated.' },
  { first: 'Your Space,', last: 'Transformed.' },
  { first: 'Your Vision,', last: 'Realized.' },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury garden landscape" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(250,248,245,0.97) 0%, rgba(250,248,245,0.72) 60%, rgba(0,0,0,0.05) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Label */}
          <p
            className="font-body text-xs font-semibold uppercase mb-6"
            style={{ color: '#c9547a', letterSpacing: '0.22em', fontSize: '0.7rem' }}
          >
            Ventura County · Female Owned · C27 Licensed
          </p>

          {/* Cycling Headline */}
          <div className="h-[120px] sm:h-[140px] md:h-[160px] relative mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="font-heading italic font-bold absolute inset-0"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: 1.1,
                  color: '#1e1e1e',
                }}
              >
                {phrases[index].first}
                <br />
                <span style={{ color: '#c9547a' }}>{phrases[index].last}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <p
            className="font-body text-base md:text-lg mb-8 max-w-xl"
            style={{ color: '#5a5a5a', lineHeight: 1.75 }}
          >
            Garden Chic Landscape provides elevated landscape maintenance and planting services for residential and commercial properties throughout Ventura County.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: '#c9547a', borderRadius: '6px' }}
            >
              Request a Free Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 font-body text-sm font-semibold transition-all duration-300 hover:opacity-80"
              style={{ color: '#c9547a', border: '1px solid #c9547a', borderRadius: '6px' }}
            >
              View Our Services
            </Link>
          </div>

          {/* Frosted Badge */}
          <div
            className="mt-10 inline-flex items-center gap-2 px-5 py-3 font-body text-xs font-medium"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid #e4dcd4',
              borderRadius: '8px',
              color: '#5a5a5a',
            }}
          >
            C27 Contractor · Licensed · Bonded · Insured · Female Owned
          </div>
        </motion.div>
      </div>
    </section>
  );
}