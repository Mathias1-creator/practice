import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';
import TopoTexture from '../shared/TopoTexture';

export default function AboutPromise() {
  return (
    <section className="bg-forest relative overflow-hidden">
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[820px] mx-auto px-5 md:px-8 py-16 md:py-[100px] text-center">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Our Promise
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <p
            className="font-heading font-light text-white"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.4 }}
          >
            {"Whatever your land needs, we treat it as if it were our own \u2014 and we are here for the long haul."}
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}