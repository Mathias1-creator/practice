import React from 'react';
import { Link } from 'react-router-dom';
import RevealWrapper from '../shared/RevealWrapper';

const CTA_IMAGE = '/images/eb9bb7e62_generated_image.png';

export default function ServicesCta() {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center overflow-hidden">
      <img
        src={CTA_IMAGE}
        alt="Beautiful Sonoma County estate landscape at golden hour (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(20,22,18,0.70)' }} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-24 w-full text-center">
        <RevealWrapper>
          <h2
            className="font-heading font-light text-white leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}
          >
            Tell us what your property needs
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-relaxed max-w-[560px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.88)' }}>
            Every property is different. Request a free quote and we'll put together a plan built around your land.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+17075924750"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded border text-white transition-all duration-[350ms] hover:bg-white/10 hover:-translate-y-[2px]"
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
              Call (707) 592-4750
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}