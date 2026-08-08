import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const VALUES = [
  {
    title: 'Maximum Effort, Every Day',
    desc: 'A farming work ethic means more gets done, faster, on every job.',
  },
  {
    title: 'Done Right the First Time',
    desc: 'Quality work that holds up — we often fix what other crews left behind.',
  },
  {
    title: 'Respect for the Land',
    desc: 'We work with the land, improving its health and its long-term value.',
  },
  {
    title: 'A Lasting Partnership',
    desc: 'We stay on as your trusted steward, season after season and year after year.',
  },
];

export default function AboutValues() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-14">
            <Eyebrow className="justify-center">What Drives Us</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1]">
              How we work the land
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <RevealWrapper key={v.title} delay={i * 0.1}>
              <div
                className="bg-white flex flex-col gap-4 p-7 h-full"
                style={{ border: '1px solid #d9d0bf', borderRadius: '8px' }}
              >
                <span className="block w-[18px] h-[1px]" style={{ backgroundColor: '#9a7b43' }} />
                <h3 className="font-heading font-medium text-heading text-[19px] md:text-[21px] leading-tight">
                  {v.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.7]" style={{ color: '#6f6a5d' }}>
                  {v.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}