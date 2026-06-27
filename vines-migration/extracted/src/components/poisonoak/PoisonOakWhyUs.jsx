import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';
import TopoTexture from '../shared/TopoTexture';

const POINTS = [
  {
    title: 'Licensed Applicator',
    desc: 'Pest control business license #46723, QAL categories B and D.',
  },
  {
    title: '30+ Years\u2019 Experience',
    desc: 'Three decades clearing Sonoma and Marin\u2019s toughest terrain.',
  },
  {
    title: 'Large Acreage Capable',
    desc: 'Equipped for everything from a fence line to 1,000+ acres.',
  },
  {
    title: 'Safe Disposal',
    desc: 'Removed and handled responsibly, never harmful open burning.',
  },
];

export default function PoisonOakWhyUs() {
  return (
    <section className="bg-forest relative overflow-hidden">
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-14 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
              <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: 'rgba(154,123,67,0.85)' }}>
                Why AF Vines
              </span>
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: 'rgba(154,123,67,0.7)' }} />
            </div>
            <h2 className="font-heading font-light text-white text-[32px] md:text-[40px] leading-[1.1]">
              The licensed, experienced choice
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {POINTS.map((p, i) => (
            <RevealWrapper key={p.title} delay={i * 0.1}>
              <div
                className={`flex flex-col items-center text-center px-6 py-8 md:py-0 ${
                  i < POINTS.length - 1 ? 'border-b md:border-b-0 md:border-r border-brass/20' : ''
                }`}
              >
                <span className="block w-[18px] h-[1px] mb-5" style={{ backgroundColor: '#9a7b43' }} />
                <h4 className="font-heading font-medium text-white text-[18px] mb-2">{p.title}</h4>
                <p className="font-body text-[14px] leading-relaxed" style={{ color: '#d9d0bf' }}>{p.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}