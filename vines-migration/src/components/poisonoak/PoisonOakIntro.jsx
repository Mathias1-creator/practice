import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import TopoDivider from '../shared/TopoDivider';
import RevealWrapper from '../shared/RevealWrapper';

export default function PoisonOakIntro() {
  return (
    <section className="bg-bone">
      <div className="max-w-[780px] mx-auto px-5 md:px-8 py-16 md:py-[120px] text-center">
        <RevealWrapper>
          <Eyebrow className="justify-center">The Problem</Eyebrow>
          <h2 className="font-heading font-normal text-heading text-[30px] md:text-[38px] leading-[1.15] mb-6">
            Don't let poison oak take over your land
          </h2>
          <p className="font-body text-body text-[16px] leading-[1.7]">
            Poison oak spreads quickly across Sonoma, Marin, and Mendocino Counties' hillsides, fence lines, and wooded areas — making properties unsafe to enjoy and adding to wildfire fuel. Removing it properly takes the right approach, the right equipment, and in many cases a licensed applicator. That's exactly what we bring.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.15}>
          <TopoDivider className="mt-12 md:mt-16" />
        </RevealWrapper>
      </div>
    </section>
  );
}