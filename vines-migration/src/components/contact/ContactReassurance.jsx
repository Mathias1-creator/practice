import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';
import TopoTexture from '../shared/TopoTexture';

const POINTS = [
  {
    title: 'Free Quotes',
    desc: 'No-obligation quotes for properties of any size.',
  },
  {
    title: 'Fast Response',
    desc: 'We respond quickly and work at a pace that surprises people.',
  },
  {
    title: 'Licensed & Experienced',
    desc: 'Over 25 years on the land, fully licensed and insured.',
  },
];

export default function ContactReassurance() {
  return (
    <section className="bg-forest relative overflow-hidden">
      <TopoTexture opacity={0.06} />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {POINTS.map((p, i) => (
            <RevealWrapper key={p.title} delay={i * 0.1}>
              <div
                className={`flex flex-col items-center text-center px-6 py-10 md:py-0 ${
                  i < POINTS.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                }`}
                style={{ borderColor: 'rgba(154,123,67,0.2)' }}
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