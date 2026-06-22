import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';

const FAQS = [
  {
    q: 'When is the best time to remove poison oak?',
    a: 'Poison oak can be treated year-round, though timing affects the method. We\'ll assess your property and recommend the most effective approach for the season and the terrain.',
  },
  {
    q: 'Do you handle large or steep properties?',
    a: 'Yes. We specialize in large-acreage and rural properties across Sonoma and Marin, with the equipment and crew to safely handle difficult, steep, and overgrown terrain.',
  },
  {
    q: 'Is the removal safe for my family and pets?',
    a: 'We remove and dispose of poison oak responsibly and never burn it in a way that releases harmful smoke. Any chemical treatments are applied by a licensed applicator and used responsibly.',
  },
  {
    q: 'Can you maintain it so it doesn\'t come back?',
    a: 'Absolutely. Poison oak often regrows, so many clients keep us on for ongoing monitoring and abatement as part of regular land management.',
  },
];

export default function PoisonOakFaq() {
  return (
    <section className="bg-bone">
      <div className="max-w-[860px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: '#9a7b43' }} />
              <span className="font-body font-medium uppercase text-[12px] tracking-[0.2em]" style={{ color: '#9a7b43' }}>
                Common Questions
              </span>
              <span className="block w-[26px] h-[1px]" style={{ backgroundColor: '#9a7b43' }} />
            </div>
            <h2 className="font-heading font-normal text-heading text-[30px] md:text-[38px] leading-[1.15]">
              Poison oak removal questions
            </h2>
          </div>
        </RevealWrapper>

        <div>
          {FAQS.map((faq, i) => (
            <RevealWrapper key={i} delay={i * 0.08}>
              <div
                className={`py-8 ${i > 0 ? 'border-t' : ''}`}
                style={{ borderColor: '#d9d0bf' }}
              >
                <h3 className="font-heading font-medium text-[19px] md:text-[20px] mb-3" style={{ color: '#21261f' }}>
                  {faq.q}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7]" style={{ color: '#3b3f37' }}>
                  {faq.a}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}