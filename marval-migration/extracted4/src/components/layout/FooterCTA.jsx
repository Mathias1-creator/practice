import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function FooterCTA() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-forest py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Contact us today for a free estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full font-semibold hover:bg-charcoal/90 transition-all hover:scale-105 hover:shadow-xl"
          >
            GET A FREE QUOTE
          </Link>
          <a
            href="tel:8056022230"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            CALL (805) 602-2230
          </a>
        </div>
      </div>
    </motion.section>
  );
}