import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7.5L5.5 11L12 4" stroke="#9a7b43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PANELS = [
  {
    title: 'For Sellers',
    intro: 'Get the property show-ready and protect the asking price.',
    items: [
      'Property cleanup and debris removal',
      'Opening up view sites and sightlines',
      'Creating clear vehicular access and roads',
      'Brush, fuel, and poison oak clearing for curb appeal',
    ],
  },
  {
    title: 'For Buyers',
    intro: "Help new owners realize the property's full potential.",
    items: [
      'Planning future projects and improvements',
      'Land clearing, grading, and access work',
      'Ongoing land management and caretaking',
      'Vineyard, ranch, and agricultural guidance',
    ],
  },
];

export default function RealtorsHowWeHelp() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-14">
            <Eyebrow className="justify-center">How We Help</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1]">
              Support on both sides of the deal
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PANELS.map((panel, i) => (
            <RevealWrapper key={panel.title} delay={i * 0.12}>
              <div
                className="bg-white h-full flex flex-col gap-5 p-8 md:p-10"
                style={{ border: '1px solid #d9d0bf', borderRadius: '10px' }}
              >
                <span className="block w-[18px] h-[1px]" style={{ backgroundColor: '#9a7b43' }} />
                <div>
                  <h3 className="font-heading font-medium text-heading text-[24px] md:text-[26px] leading-tight mb-2">
                    {panel.title}
                  </h3>
                  <p className="font-body text-body text-[15px] leading-relaxed">
                    {panel.intro}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 mt-1">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[3px] flex-shrink-0">{CHECK}</span>
                      <span className="font-body text-body text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}