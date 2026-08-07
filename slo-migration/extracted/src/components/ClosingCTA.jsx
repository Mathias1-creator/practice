import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative py-16 lg:py-20" style={{ backgroundColor: '#CC0000' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
          Septic Problem? We're Ready Right Now.
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Same-day service available. Open 24 hours. Serving all of San Luis Obispo County and Santa Barbara County.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            to="/quote"
            className="px-8 py-4 bg-white font-bold text-sm uppercase tracking-wider rounded transition-transform hover:scale-105"
            style={{ color: '#CC0000' }}
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:8058008931"
            className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call (805) 800-8931
          </a>
        </div>
        <p className="text-white/70 text-sm">Note: We do not pump RVs.</p>
      </div>
    </section>
  );
}