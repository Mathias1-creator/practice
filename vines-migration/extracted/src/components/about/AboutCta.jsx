import React from 'react';
import { Link } from 'react-router-dom';
import RevealWrapper from '../shared/RevealWrapper';

const CTA_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/9872ccd75_generated_image.png';

export default function AboutCta() {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center overflow-hidden">
      <img
        src={CTA_IMAGE}
        alt="Beautiful Sonoma estate landscape at golden hour (placeholder)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(20,22,18,0.70)' }} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-24 w-full text-center">
        <RevealWrapper>
          <h2
            className="font-heading font-light text-white leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
          >
            {"Let\u2019s care for your land together"}
          </h2>
          <p
            className="font-body text-[16px] md:text-[18px] leading-relaxed max-w-[520px] mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            Request a free quote and find out what AF VINES can do for your property.
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