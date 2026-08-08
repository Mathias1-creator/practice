import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const POINTS = [
  {
    title: 'Fast Turnarounds',
    desc: 'We accomplish in days what others take weeks to finish — keeping your timelines on track.',
  },
  {
    title: 'Licensed & Insured',
    desc: 'CSLB licensed contractor and licensed pest control business.',
  },
  {
    title: 'Discreet & Reliable',
    desc: 'Professional, trustworthy, and easy to coordinate with on active listings.',
  },
  {
    title: 'Full-Service',
    desc: 'One call handles cleanup, access, fuel reduction, and ongoing care.',
  },
];

export default function RealtorsWhyPartner() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <Eyebrow className="justify-center">Why Partner With Us</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[32px] md:text-[40px] leading-[1.1]">
              An operator your clients can trust
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {POINTS.map((p, i) => (
            <RevealWrapper key={p.title} delay={i * 0.1}>
              <div
                className={`flex flex-col items-center text-center px-6 ${
                  i < POINTS.length - 1 ? 'lg:border-r lg:border-line' : ''
                }`}
              >
                <span className="block w-[18px] h-[1px] mb-5" style={{ backgroundColor: '#9a7b43' }} />
                <h4 className="font-heading font-medium text-heading text-[18px] mb-2">{p.title}</h4>
                <p className="font-body text-caption text-[14px] leading-relaxed">{p.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}