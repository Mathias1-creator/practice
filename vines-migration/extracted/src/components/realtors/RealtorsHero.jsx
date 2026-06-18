import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = '/images/a998d7c59_generated_image.png';

export default function RealtorsHero() {
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
        alt="Aerial view of an expansive Sonoma County estate property (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(20,22,18,0.78), rgba(20,22,18,0.32))' }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5" style={fade(0.15)}>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              For Real Estate Professionals
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <h1
            className="font-heading font-light text-white leading-[1.06] mb-5"
            style={{ fontSize: 'clamp(38px, 6.5vw, 80px)', ...fade(0.3) }}
          >
            Your partner in large-acreage sales
          </h1>
          <p
            className="font-body text-[17px] md:text-[18px] leading-relaxed max-w-[660px] mx-auto mb-9"
            style={{ color: 'rgba(255,255,255,0.9)', ...fade(0.45) }}
          >
            We help agents prepare, position, and close rural and estate properties across Sonoma, Marin, and Mendocino Counties — making the land more appealing, more accessible, and more valuable.
          </p>
          <div style={fade(0.6)}>
            <Link
              to="/contact"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}