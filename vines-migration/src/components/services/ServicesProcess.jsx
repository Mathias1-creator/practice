import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';
import TopoTexture from '../shared/TopoTexture';

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'We talk through your property and what you want from it.' },
  { num: '02', title: 'Property Assessment', desc: 'We walk the land and understand its real condition and needs.' },
  { num: '03', title: 'Plan & Quote', desc: 'A clear plan and honest pricing for the scope of work.' },
  { num: '04', title: 'Ongoing Stewardship', desc: 'We stay on as your long-term partner, season after season.' },
];

export default function ServicesProcess() {
  return (
    <section className="bg-forest relative overflow-hidden">
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-14 md:mb-16">
            <Eyebrow light className="justify-center" />
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
              <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
                How It Works
              </span>
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            </div>
            <h2 className="font-heading font-light text-white text-[32px] md:text-[40px] leading-[1.1]">
              What working with us looks like
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <RevealWrapper key={step.num} delay={i * 0.1}>
              <div className={`flex flex-col items-center text-center px-6 py-6 md:py-0 ${i < STEPS.length - 1 ? 'border-b md:border-b-0 md:border-r border-brass/20' : ''}`}>
                <span className="font-heading italic font-light text-[36px] md:text-[42px] mb-3" style={{ color: '#9a7b43' }}>
                  {step.num}
                </span>
                <h4 className="font-heading font-medium text-white text-[18px] mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-[14px] leading-relaxed" style={{ color: '#d9d0bf' }}>
                  {step.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}