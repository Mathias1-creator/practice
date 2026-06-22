import React, { useState, useEffect } from 'react';

const HERO_IMAGE = '/images/acac25aac_generated_image.png';

export default function ServicesHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '420px' }}>
      <img
        src={HERO_IMAGE}
        alt="Sweeping Sonoma County working landscape with rolling oak-covered hills and estate in the distance (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(20,22,18,0.78), rgba(20,22,18,0.32))' }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <div
            className="flex items-center justify-center gap-3 mb-5"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}
          >
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Our Services
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <h1
            className="font-heading font-light text-white leading-[1.06] mb-5"
            style={{
              fontSize: 'clamp(40px, 6.5vw, 76px)',
              opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'
            }}
          >
            The full scope of our work
          </h1>
          <p
            className="font-body text-[17px] md:text-[18px] leading-relaxed max-w-[640px] mx-auto"
            style={{
              color: 'rgba(255,255,255,0.9)',
              opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s'
            }}
          >
            Three core areas of expertise — and a single trusted partner behind all of them. From wildfire protection to vineyard care, here is everything we do for the properties we look after.
          </p>
        </div>
      </div>
    </section>
  );
}