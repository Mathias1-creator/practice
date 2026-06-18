import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';

const CTA_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/8209a2e9c_generated_image.png';

export default function CtaSection() {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={CTA_IMAGE}
        alt="Beautiful Sonoma County estate landscape at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(20,22,18,0.70)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-24 w-full text-center">
        <RevealWrapper>
          <h2
            className="font-heading font-light text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Let's talk about your land
          </h2>
          <p className="font-body text-white/[0.88] text-[16px] md:text-[18px] leading-relaxed max-w-[560px] mx-auto mb-10">
            Request a free quote and tell us about your property — we'll show you what's possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+17075924750"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Call (707) 592-4750
            </a>
            <a
              href="mailto:afvinesllc@gmail.com"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded border border-white/50 text-white transition-all duration-[350ms] hover:bg-white/10 hover:-translate-y-[2px]"
            >
              Email Us
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}