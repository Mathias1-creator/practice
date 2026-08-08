import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import useFadeUp from '../../hooks/useFadeUp';

const HERO_IMAGE = '/images/05da2217d_generated_afbb6afe.jpg';

export default function HeroSection() {
  const ref = useFadeUp();

  return (
    <section className="relative min-h-screen flex" style={{ backgroundColor: '#060d18', marginTop: '-68px', paddingTop: '68px' }}>
      {/* Mobile background image */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,13,24,0.75)' }} />
      </div>

      <div ref={ref} className="fade-up relative z-10 flex flex-col md:flex-row w-full min-h-screen">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:pl-20 md:pr-10 py-16 md:py-0">
          <p className="font-body uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '3px', color: '#5bc8f5' }}>
            SLO COUNTY PLUMBING
          </p>

          <h1 className="font-heading text-6xl md:text-[96px] text-white uppercase leading-[0.95] tracking-[2px] mb-6">
            WHEN IT BREAKS<br />
            <span style={{ color: '#3b9fd4' }}>WE FIX IT.</span>
          </h1>

          <p className="font-body text-lg mb-8 max-w-lg" style={{ color: '#94b8d0', fontSize: '18px' }}>
            Fast, reliable plumbing service across San Luis Obispo County. Available 24 hours a day, 7 days a week.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:8055509152"
              className="inline-block font-heading text-white uppercase tracking-[2px] text-base transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#e53e3e', padding: '14px 36px', borderRadius: '0px' }}
            >
              CALL NOW
            </a>
            <Link
              to="/services"
              className="inline-block font-heading uppercase tracking-[2px] text-base transition-all duration-300 hover:bg-wp-accent-light/10"
              style={{
                padding: '14px 36px',
                borderRadius: '0px',
                border: '1.5px solid #3b9fd4',
                color: '#5bc8f5',
                backgroundColor: 'transparent',
              }}
            >
              OUR SERVICES
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {['Licensed & Bonded', 'CA License# 1081234', 'Work Guaranteed'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 font-body text-xs" style={{ color: '#5bc8f5' }}>
                <Check size={14} style={{ color: '#5bc8f5' }} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="hidden md:block flex-1 relative">
          <img
            src={HERO_IMAGE}
            alt="High pressure water spraying from copper pipe fitting"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}