import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const FOUNDER_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/4d4e14ce2_Screenshot2026-06-08at22914PM.png';

export default function AboutFounder() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image — 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper>
              <div className="overflow-hidden" style={{ borderRadius: '6px', aspectRatio: '4/5' }}>
                <img
                  src={FOUNDER_IMAGE}
                  alt="Andrew Forchini in his Sonoma County vineyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
          </div>
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper delay={0.15}>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[32px] md:text-[42px] leading-[1.12] mb-7">
                A farmer and rancher at heart
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-body text-body text-[16px] leading-[1.7]">
                  AF VINES was founded by Andrew Forchini, who has spent his life working the land. Raised in a farming and ranching tradition, he learned early that a good day is measured by how much you accomplish — and that the land rewards those who work it with skill and respect.
                </p>
                <p className="font-body text-body text-[16px] leading-[1.7]">
                  That background shapes everything about how we work. Where others see a long job, we see an efficient plan. We bring serious equipment, deep experience, and a farmer's work ethic to every property — accomplishing in days what many crews take weeks to finish, and doing it right the first time.
                </p>
                <p className="font-body text-body text-[16px] leading-[1.7]">
                  Today, AF VINES manages land across Sonoma, Marin, and Mendocino Counties, from small parcels to estates of over a thousand acres — helping landowners make their property safer, more usable, and more beautiful, season after season.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>);

}