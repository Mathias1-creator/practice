import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Septic Tank Pumping & Cleaning',
    desc: 'Full pump-out and clean for residential and commercial tanks. Same-day service available.',
    image: '/images/a05c2ed4f_Screenshot2026-04-21at121159PM.jpg',
  },
  {
    title: 'Sewer Line Jetting',
    desc: 'High-pressure jetting to blast through grease, roots, and buildup and restore full flow.',
    image: '/images/843651a6e_Screenshot2026-04-21at121725PM.jpg',
  },
  {
    title: 'Septic System Locate, Pump & Inspect',
    desc: 'We find your tank, pump it completely, and inspect all system components.',
    image: '/images/4278a4a51_Screenshot2026-04-21at121538PM.jpg',
  },
  {
    title: 'Real Estate Septic Inspections',
    desc: 'Thorough inspections with a written report for buyers, sellers, and agents.',
    image: '/images/f06b339c8_Screenshot2026-04-21at121355PM.jpg',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#CC0000' }}>
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mt-3" style={{ color: '#111111' }}>
            Everything Your Septic System Needs
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From routine pumping to full inspections — one call handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {services.map((s, i) => (
            <div key={i} className="group border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="overflow-hidden h-56 lg:h-64 shrink-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-lg font-black uppercase tracking-tight mb-3" style={{ color: '#111111' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold transition-all group-hover:gap-2"
                  style={{ color: '#CC0000' }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 font-bold text-white text-sm uppercase tracking-wider rounded transition-transform hover:scale-105"
            style={{ backgroundColor: '#CC0000' }}
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}