import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const HERO_IMAGE = '/images/2d33d40a4_Screenshot2026-04-20at75903PM.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="SLO Septic pumping truck - chrome 2500 gallon tanker" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-6 border"
          style={{ borderColor: '#CC0000', backgroundColor: 'rgba(204,0,0,0.15)' }}>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#CC0000' }}>
            Serving SLO County for 19 Years
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6 max-w-4xl">
          SLO County's Most Trusted Septic Service
        </h1>

        <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl">
          Septic Tank Pumping · Sewer Jetting · Real Estate Inspections · Same-Day Service Available
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Link
            to="/quote"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white text-sm uppercase tracking-wider rounded transition-transform hover:scale-105"
            style={{ backgroundColor: '#CC0000' }}
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:8058008931"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call (805) 800-8931
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          Open 24 Hours · We Do NOT Pump RVs
        </p>
      </div>
    </section>
  );
}