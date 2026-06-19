import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const HERO_BG = '/images/c62e3d0e5_Screenshot2026-05-09at100236PM.png';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Premium bathroom installation by Voshal Integrated Plumbing Inc."
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* 40% dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28,28,28,0.40)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center" style={{ paddingTop: '80px' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
          SLO COUNTY'S PREMIUM
          <br />
          PLUMBING CONTRACTOR
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/80 tracking-wide">
          New Construction · Remodels · Service Calls · Available 24/7
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/gallery"
            className="px-8 py-3.5 bg-charcoal text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            VIEW OUR WORK
          </Link>
          <a
            href="tel:8054007880"
            className="flex items-center gap-2 px-8 py-3.5 border border-white/50 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            CALL (805) 400-7880
          </a>
        </div>

        <p className="mt-8 text-white/50 text-xs tracking-widest uppercase">
          Licensed · Lic# 1092268 · Serving SLO County
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-charcoal/30 to-transparent pointer-events-none" />
    </section>
  );
}