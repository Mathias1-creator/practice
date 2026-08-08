import React from 'react';
import RevealWrapper from '../shared/RevealWrapper';
import TopoDivider from '../shared/TopoDivider';

export default function ServicesIntro() {
  return (
    <section className="bg-bone">
      <div className="max-w-[760px] mx-auto px-5 md:px-8 py-16 md:py-[120px] text-center">
        <RevealWrapper>
          <h2 className="font-heading font-normal text-heading text-[30px] md:text-[38px] leading-[1.15] mb-6">
            One partner, the whole property
          </h2>
          <p className="font-body text-body text-[16px] leading-[1.7]">
            Most large properties are cared for by a patchwork of vendors. We bring everything under one roof — organized into three areas of expertise — so your land is managed by one team that knows it intimately and keeps it thriving all year. We come from a farming and ranching background, which means more gets done, done right the first time, at a pace that surprises people.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.15}>
          <TopoDivider className="mt-12 md:mt-16" />
        </RevealWrapper>
      </div>
    </section>
  );
}