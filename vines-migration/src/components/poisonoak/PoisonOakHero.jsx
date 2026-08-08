import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = '/images/979afac91_generated_image.jpg';

export default function PoisonOakHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '480px' }}>
      <img
        src={HERO_IMAGE}
        alt="Dense poison oak growth along a Sonoma County hillside and fence line (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(20,22,18,0.78), rgba(20,22,18,0.34))' }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5 md:px-8">
        <div className="max-w-[820px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5" style={fade(0.15)}>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Sonoma, Marin & Mendocino Counties
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <h1
            className="font-heading font-light text-white leading-[1.06] mb-5"
            style={{ fontSize: 'clamp(42px, 7vw, 82px)', ...fade(0.3) }}
          >
            Poison Oak Removal
          </h1>
          <p
            className="font-body text-[17px] md:text-[18px] leading-relaxed max-w-[640px] mx-auto mb-9"
            style={{ color: 'rgba(255,255,255,0.9)', ...fade(0.45) }}
          >
            Safe, thorough poison oak removal and abatement for large properties, estates, and rural land across Sonoma, Marin, and Mendocino Counties — by a licensed land management and pest control company.
          </p>
          <div className="flex flex-wrap gap-4 justify-center" style={fade(0.6)}>
            <Link
              to="/contact"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+17075924750"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded border text-white transition-all duration-[350ms] hover:bg-white/10 hover:-translate-y-[2px]"
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
              Call (707) 592-4750
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}