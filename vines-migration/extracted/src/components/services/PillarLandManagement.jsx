import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';
import CapabilityCard from './CapabilityCard';

const IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/7b9f76f3a_generated_image.png';

const CARDS = [
  { title: 'Fuel Reduction & Defensible Space', desc: 'Brush clearing, mastication, and mowing that reduce wildfire fuel and create defensible space.' },
  { title: 'Poison Oak Removal', desc: 'Pulled and burned or treated through licensed abatement.' },
  { title: 'Tree Service', desc: 'Limbing, removal, and canopy work for safety and health.' },
  { title: 'Property Repair & Maintenance', desc: 'Ongoing upkeep that keeps your land in top condition.' },
  { title: 'Irrigation Installation & Repair', desc: 'Domestic and agricultural irrigation design and fixes.' },
  { title: 'Drainage & Erosion Control', desc: 'Protecting your land from water damage and runoff.' },
  { title: 'Road Grading & Access', desc: 'Building and maintaining roads and vehicular access.' },
  { title: 'Hauling, Trucking & Debris Removal', desc: 'Clearing and removing material of any scale.' },
  { title: 'Tractor & Heavy Equipment', desc: 'The right machinery to move serious work forward.' },
  { title: 'View Site Creation', desc: 'Opening up sightlines to reveal your land\'s best views.' },
  { title: 'Land Clearing', desc: 'Turning overgrown, unusable acreage into open ground.' },
  { title: 'Second-Home Caretaking', desc: 'Trusted eyes and hands for properties you can\'t always be at.' },
];

export default function PillarLandManagement() {
  return (
    <section id="land-management" className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 md:mb-20">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper>
              <Eyebrow>Pillar One</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[34px] md:text-[44px] leading-[1.1] mb-6">
                Land Management
              </h2>
              <p className="font-body text-body text-[16px] leading-[1.7] mb-4">
                Our flagship service — comprehensive, year-round stewardship of everything from residential yards to parcels spanning thousands of acres, including dedicated care for second homes and absentee owners. One call covers the entire property.
              </p>
              <p className="font-body text-body text-[16px] leading-[1.7]">
                Whatever your land needs through the seasons, we handle it: making it fire-safe, keeping it healthy, repairing what's broken, and shaping it into something you're proud of.
              </p>
            </RevealWrapper>
          </div>
          {/* Image — 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper delay={0.15}>
              <div className="rounded-[6px] overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={IMAGE}
                  alt="Large-acreage land clearing and grading work on a California estate (placeholder)"
                  className="w-full h-full object-cover"
                />
              </div>
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