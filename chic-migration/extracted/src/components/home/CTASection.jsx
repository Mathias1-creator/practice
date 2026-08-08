import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #c9547a, #a03a60)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
          Ready for a Garden You'll Love?
        </h2>
        <p className="font-body text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.75 }}>
          Serving Ventura County. Free estimates. C27 Licensed & Insured.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
          style={{ border: '2px solid white', borderRadius: '6px' }}
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}