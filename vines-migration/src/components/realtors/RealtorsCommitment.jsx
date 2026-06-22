import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';
import TopoTexture from '../shared/TopoTexture';

export default function RealtorsCommitment() {
  return (
    <section className="bg-forest relative overflow-hidden">
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[820px] mx-auto px-5 md:px-8 py-16 md:py-[100px] text-center">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
              Our Commitment
            </span>
            <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
          </div>
          <p
            className="font-heading font-light text-white"
            style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.4 }}
          >
            "Tell us your timeline and what the property needs. We'll make the land show its best — and become the team your client keeps long after closing."
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}