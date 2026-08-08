import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import TopoDivider from '../shared/TopoDivider';
import RevealWrapper from '../shared/RevealWrapper';

export default function ApproachSection() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper>
              <Eyebrow>Our Approach</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[32px] md:text-[44px] leading-[1.12]">
                One operator for the entire property
              </h2>
            </RevealWrapper>
          </div>

          {/* Right - 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper delay={0.15}>
              <p className="text-body text-[16px] leading-[1.7] mb-6">
                Most large properties are cared for by a patchwork of vendors — one for trees, another for
                irrigation, another for fire clearance. We do it all, as a single trusted partner who knows
                your land intimately and keeps it thriving season after season.
              </p>
              <p className="text-body text-[16px] leading-[1.7]">
                We come from a farming and ranching background, where the measure of a good day is how much
                you accomplish. We bring that same pace and precision to every property — better quality work,
                done right the first time, and far more progress per day than you'd expect.
              </p>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper delay={0.2}>
          <TopoDivider className="mt-16 md:mt-20" />
        </RevealWrapper>
      </div>
    </section>
  );
}