import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import TopoDivider from '../shared/TopoDivider';
import RevealWrapper from '../shared/RevealWrapper';

export default function RealtorsIntro() {
  return (
    <section className="bg-bone">
      <div className="max-w-[800px] mx-auto px-5 md:px-8 py-16 md:py-[120px] text-center">
        <RevealWrapper>
          <Eyebrow className="justify-center">The Opportunity</Eyebrow>
          <h2 className="font-heading font-normal text-heading text-[30px] md:text-[38px] leading-[1.15] mb-6">
            Land sells better when it shows well
          </h2>
          <p className="font-body text-body text-[16px] leading-[1.7]">
            On large rural and estate properties, first impressions are everything — and overgrown brush, blocked views, and rough access can quietly cost a sale or soften an offer. We work alongside agents to get properties show-ready and keep deals moving, on the seller side and the buyer side alike.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.15}>
          <TopoDivider className="mt-12 md:mt-16" />
        </RevealWrapper>
      </div>
    </section>
  );
}