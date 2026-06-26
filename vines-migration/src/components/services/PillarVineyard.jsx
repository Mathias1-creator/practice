import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';
import CapabilityCard from './CapabilityCard';

const IMAGE = '/images/49a036f85_generated_image.jpg';

const CARDS = [
  { title: 'Vineyard Management', desc: 'Full-season care that maximizes the potential of each site.' },
  { title: 'Vineyard Consulting', desc: 'Expert guidance for owners and prospective buyers.' },
  { title: 'Vineyard Removal', desc: 'Clearing old or unwanted vines, cleanly and efficiently.' },
  { title: 'Farming', desc: 'Hands-on agricultural experience across crop types.' },
  { title: 'Ranching', desc: 'Practical, working knowledge of livestock and land.' },
  { title: 'Managed Sheep Grazing', desc: 'Natural fuel reduction and soil health through grazing.' },
];

export default function PillarVineyard() {
  return (
    <section id="vineyard-ranch" className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        {/* Two-column intro — image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 md:mb-20">
          {/* Image — 5 cols */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <RevealWrapper>
              <div className="rounded-[6px] overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={IMAGE}
                  alt="Vineyard rows on Sonoma County hillside with sheep grazing in ranch pasture (placeholder)"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealWrapper>
          </div>
          {/* Text — 7 cols */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <RevealWrapper delay={0.15}>
              <Eyebrow>Pillar Two</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1] mb-6">
                Vineyard & Ranch
              </h2>
              <p className="font-body text-body text-[16px] leading-[1.7]">
                Wine country is in our roots. We manage and consult on vineyards, handle vineyard removal, and bring real farming and ranching experience to the land we care for — including managed sheep grazing, a natural way to reduce fuel and build healthy soil.
              </p>
            </RevealWrapper>
          </div>
        </div>

        {/* Capability cards */}
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