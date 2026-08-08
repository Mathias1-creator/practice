import React from 'react';
import { Star } from 'lucide-react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const TESTIMONIALS = [
  {
    quote:
      'Half our property is a scenic forest slope with a creek running through it, but it was so overgrown with sucker limbs, fallen trees, poison oak and forest debris that for twenty years we feared going into it. Andrew advised us so intelligently about forest health, fire safety and vegetation management that we hired him on the spot. We assumed the job would take weeks, but in only 4 days, and at a third of the anticipated price, we stood amazed at what he\'d accomplished. We will hire him again and again.',
    attribution: '— Larry R., Sebastopol',
  },
  {
    quote:
      'Andrew did an incredible job with five huge trees that came down in a storm. He and his wonderful crew were amazing. Highly recommend him.',
    attribution: '— Mary H., Sebastopol',
  },
  {
    quote:
      'Andrew and his crew did an amazing job with our neighborhood by reducing fuel and brush.',
    attribution: '— Caitlin F., Sebastopol',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-brass fill-brass" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <Eyebrow className="justify-center">From Our Neighbors</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[34px] md:text-[46px] leading-[1.1]">
              Trusted across Sonoma County
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <div className="bg-white border border-line rounded-[10px] p-7 md:p-8 h-full flex flex-col">
                <Stars />
                <blockquote className="font-heading font-normal text-heading text-[18px] md:text-[21px] leading-[1.5] mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <p className="text-caption text-[14px] font-body">{t.attribution}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}