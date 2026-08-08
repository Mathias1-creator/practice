import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Droplets, Waves, Search, FileCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const DUMP_PHOTO = '/images/c15cae14a_Screenshot2026-04-20at75951PM.jpg';
const REAR_PHOTO = '/images/11518115f_Screenshot2026-04-20at75742PM.jpg';
const JETTING_PHOTO = '/images/jetting-photo.jpg';
const INSPECTION_PHOTO = '/images/inspection-photo.jpg';

const services = [
  {
    num: '01',
    icon: Droplets,
    title: 'Septic Tank Pumping & Cleaning',
    image: DUMP_PHOTO,
    body: "Regular pumping is the single most important thing you can do to protect your septic system. SLO SEPTIC PUMPING LLC provides thorough pump-outs for residential and commercial tanks throughout San Luis Obispo County. We don't just empty the tank — we clean it properly and check the condition while we're there. Most tanks need pumping every 3–5 years depending on household size and usage. If you're not sure when yours was last serviced, call us — we'll take a look and give you an honest answer. Same-day service available.",
    service: 'Septic Tank Pumping & Cleaning',
  },
  {
    num: '02',
    icon: Waves,
    title: 'Sewer Line Jetting',
    image: JETTING_PHOTO,
    body: "Slow drains, gurgling sounds, and recurring backups are signs your sewer line needs attention. Our high-pressure jetting service blasts through grease, roots, and buildup to restore full flow to your sewer lines. This is the most effective way to clean a sewer line — far more thorough than snaking alone. We serve residential and commercial properties across SLO County and into Santa Barbara County.",
    service: 'Sewer Line Jetting',
  },
  {
    num: '03',
    icon: Search,
    title: 'Septic System Locate, Pump & Inspect',
    image: REAR_PHOTO,
    body: "Not sure where your septic system is? We can find it. SLO SEPTIC PUMPING LLC offers full-service locate, pump, and inspection packages. We locate your tank and distribution box, pump it completely, and inspect the system components for signs of wear, damage, or failure. You'll leave with a clear picture of your system's condition and what — if anything — needs attention.",
    service: 'Septic System Locate, Pump & Inspect',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Real Estate Septic Inspections',
    image: INSPECTION_PHOTO,
    body: "Buying or selling a property with a septic system? Don't let a surprise septic issue derail your transaction. SLO SEPTIC PUMPING LLC provides thorough septic inspections for real estate transactions — locating, pumping, and inspecting the full system with a written report. We work with buyers, sellers, agents, and lenders throughout San Luis Obispo County, Solvang, Santa Ynez, Los Olivos, Buellton, and Santa Maria. We understand deadlines — call us and we'll make it work.",
    service: 'Real Estate Septic Inspection',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        headline="Our Services"
        subheadline="Professional septic and sewer solutions for homes, ranches, and real estate transactions across SLO County."
        breadcrumbs="Services"
      />

      {services.map((s, i) => {
        const isDark = i % 2 === 1;
        return (
          <section key={i} className="py-16 lg:py-20" style={{ backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <span className="absolute -top-8 -left-4 text-8xl font-black opacity-5 select-none"
                      style={{ color: isDark ? '#fff' : '#111' }}>{s.num}</span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(204,0,0,0.15)' }}>
                        <s.icon className="w-5 h-5" style={{ color: '#CC0000' }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#CC0000' }}>Service {s.num}</span>
                    </div>
                    <h2 className={`text-2xl lg:text-3xl font-black uppercase tracking-tight mb-5 ${isDark ? 'text-white' : ''}`}
                      style={{ color: isDark ? undefined : '#111111' }}>
                      {s.title}
                    </h2>
                    <p className={`leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {s.body}
                    </p>
                    <Link
                      to={`/quote?service=${encodeURIComponent(s.service)}`}
                      className="inline-flex items-center px-6 py-3 font-bold text-white text-sm uppercase tracking-wider rounded transition-transform hover:scale-105"
                      style={{ backgroundColor: '#CC0000' }}
                    >
                      Request a Quote for This Service
                    </Link>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-sm overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-64 lg:h-96 object-cover" />
                    <div className="absolute inset-0 border-2 border-transparent hover:border-red-600 transition-colors rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA Band */}
      <section className="py-12" style={{ backgroundColor: '#CC0000' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
            Don't see what you need? Give us a call — no job is too small.
          </h3>
          <a href="tel:8058008931" className="inline-flex items-center gap-2 text-2xl font-black text-white hover:underline">
            <Phone className="w-6 h-6" />
            (805) 800-8931
          </a>
          <p className="text-white/70 text-sm mt-4">We do not pump RVs.</p>
        </div>
      </section>
    </>
  );
}