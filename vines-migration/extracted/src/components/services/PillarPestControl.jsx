import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';
import CapabilityCard from './CapabilityCard';

const IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/539a3ec9f_generated_image.png';

const CARDS = [
  { title: 'Plant Health Pesticide Application', desc: 'Targeted treatments that keep your plantings thriving.' },
  { title: 'Weed & Brush Herbicide Abatement', desc: 'Controlling unwanted growth across large areas.' },
  { title: 'Poison Oak Suppression', desc: 'Chemical abatement for persistent poison oak.' },
  { title: 'Invasive Species Removal', desc: 'Eliminating invasives that threaten your landscape.' },
  { title: 'Integrated Pest Management (IPM)', desc: 'A smarter, lower-impact approach to pest control — we monitor, prevent, and use targeted treatments only when needed, minimizing chemical use while protecting plant health.' },
];

export default function PillarPestControl() {
  return (
    <section id="pest-vegetation-control" className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 md:mb-20">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper>
              <Eyebrow>Pillar Three</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1] mb-6">
                Pest & Vegetation Control
              </h2>
              <p className="font-body text-body text-[16px] leading-[1.7] mb-4">
                 We hold a licensed pest control business license with QAL categories B and D — something most landscapers can't offer. That means we can legally apply the treatments that keep plants healthy and bring stubborn weeds, brush, and poison oak under control.
              </p>
              <p className="font-body text-body text-[16px] leading-[1.7]">
                 We also practice Integrated Pest Management (IPM) — an approach that prioritizes monitoring, prevention, and the most targeted, least-toxic methods to manage pests responsibly.
              </p>
            </RevealWrapper>
          </div>
          {/* Image — 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper delay={0.15}>
              <div className="rounded-[6px] overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={IMAGE}
                  alt="Licensed vegetation management and herbicide application on California estate (placeholder)"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Capability cards — 4 cols on desktop */}
        <RevealWrapper delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CARDS.map((c) => (
              <CapabilityCard key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}