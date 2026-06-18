import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';

const CTA_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/996881026_generated_image.png';

export default function ContactCta() {
  return (
    <section className="relative min-h-[440px] md:min-h-[480px] flex items-center overflow-hidden">
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
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Prefer to call?
          </h2>
          <p
            className="font-body text-[16px] md:text-[18px] leading-relaxed max-w-[520px] mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            Reach us directly Monday through Friday and we will talk through your property.
          </p>
          <a
            href="tel:+17075924750"
            className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
          >
            Call (707) 592-4750
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}