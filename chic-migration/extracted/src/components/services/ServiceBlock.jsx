import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function ServiceBlock({ id, label, title, description, image, reviewer, reversed }) {
  return (
    <section id={id} className="py-16 md:py-24" style={{ background: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${reversed ? 'md:direction-rtl' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className={reversed ? 'md:order-2' : ''}
          >
            <div className="overflow-hidden" style={{ borderRadius: '12px' }}>
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={reversed ? 'md:order-1' : ''}
          >
            <span
              className="font-body text-xs font-semibold uppercase inline-block mb-4"
              style={{ color: '#c9547a', letterSpacing: '0.22em', fontSize: '0.7rem' }}
            >
              {label}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#1e1e1e' }}>
              {title}
            </h2>
            <p className="font-body text-base mb-6" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
              {description}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-body text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 mb-8"
              style={{ background: '#c9547a', borderRadius: '6px' }}
            >
              Request a Quote
            </Link>


          </motion.div>
        </div>
      </div>
    </section>
  );
}