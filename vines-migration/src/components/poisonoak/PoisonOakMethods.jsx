import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const METHODS = [
  {
    title: 'Mechanical Removal',
    desc: 'We physically pull and remove poison oak at the root, then haul it off and dispose of it safely — never burned in a way that releases harmful smoke. Best for full clearance and immediate results.',
  },
  {
    title: 'Licensed Chemical Abatement',
    desc: 'As a licensed pest control business, we can legally apply targeted herbicide treatments that suppress and kill poison oak at the source — ideal for large areas, steep terrain, and long-term control.',
  },
];

export default function PoisonOakMethods() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-14">
            <Eyebrow className="justify-center">Our Approach</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1]">
              Two proven ways to remove poison oak
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {METHODS.map((m, i) => (
            <RevealWrapper key={m.title} delay={i * 0.12}>
              <div
                className="bg-white rounded-[8px] p-8 md:p-10 h-full flex flex-col gap-4"
                style={{ border: '1px solid #d9d0bf' }}
              >
                <span className="block w-[18px] h-[1px]" style={{ backgroundColor: '#9a7b43' }} />
                <h3 className="font-heading font-medium text-heading text-[22px] md:text-[24px] leading-tight">
                  {m.title}
                </h3>
                <p className="font-body text-body text-[16px] leading-[1.7]">
                  {m.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}