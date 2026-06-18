import React, { useState, useEffect } from 'react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/d41a2672c_generated_image.png';

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '460px' }}>
      <img
        src={HERO_IMAGE}
        alt="Sweeping Sonoma County working landscape at golden hour (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(20,22,18,0.78), rgba(20,22,18,0.32))' }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5 md:px-8">
        <div className="max-w-[820px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5" style={fade(0.15)}>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Our Story
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <h1
            className="font-heading font-light text-white leading-[1.06] mb-5"
            style={{ fontSize: 'clamp(38px, 6.5vw, 80px)', ...fade(0.3) }}
          >
            Rooted in the land since 1998
          </h1>
          <p
            className="font-body text-[17px] md:text-[18px] leading-relaxed max-w-[640px] mx-auto"
            style={{ color: 'rgba(255,255,255,0.9)', ...fade(0.45) }}
          >
            A Sonoma County land management company built on a lifetime of farming, ranching, and a deep respect for the land.
          </p>
        </div>
      </div>
    </section>
  );
}