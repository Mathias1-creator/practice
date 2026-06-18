import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const CREW_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/a24a02eae_generated_image.png';

const CREDS = [
  'CSLB Licensed Landscape Contractor, C-27 #1152556',
  'Licensed Pest Control Business, #46723 — QAL Categories B & D',
  'California Farm Bureau Young Farmer Mentorship Program',
  'Serving Sonoma, Marin & Mendocino Counties since 1998',
];

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '3px' }}>
    <path d="M2 7.5L5.5 11L12 4" stroke="#9a7b43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AboutCredentials() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper>
              <Eyebrow>Experience & Credentials</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[32px] md:text-[40px] leading-[1.12] mb-6">
                Licensed, proven, and trusted
              </h2>
              <p className="font-body text-body text-[16px] leading-[1.7] mb-8">
                With over 30 years working Sonoma, Marin, and Mendocino Counties' land and a pest control business operating since 2000, AF VINES brings a rare combination of breadth, experience, and proper licensing to every property.
              </p>
              <ul className="flex flex-col gap-4">
                {CREDS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    {CHECK}
                    <span className="font-body text-[15px] leading-relaxed" style={{ color: '#21261f' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>
          </div>
          {/* Image — 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper delay={0.15}>
              <div className="overflow-hidden" style={{ borderRadius: '6px', aspectRatio: '4/3' }}>
                <img
                  src={CREW_IMAGE}
                  alt="AF VINES crew at work with equipment on a Sonoma County property (placeholder)"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}