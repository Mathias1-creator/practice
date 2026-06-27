import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const IMAGE = '/images/acdc34e11_generated_image.jpg';

export default function PoisonOakFireLink() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <RevealWrapper>
              <Eyebrow>Why It Matters</Eyebrow>
              <h2 className="font-heading font-normal text-heading text-[32px] md:text-[40px] leading-[1.12] mb-6">
                Safer land, lower fire risk
              </h2>
              <p className="font-body text-body text-[16px] leading-[1.7] mb-8">
                Beyond the rash, dense poison oak is dead and living fuel that raises wildfire danger and blocks access to your own property. Clearing it makes your land safer to walk, work, and enjoy — and is an important part of overall defensible space and fuel reduction.
              </p>
              <Link
                to="/services#land-management"
                className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-pine text-white transition-all duration-[350ms] hover:bg-forest hover:shadow-lg hover:-translate-y-[2px]"
              >
                See Our Wildfire Services
              </Link>
            </RevealWrapper>
          </div>
          {/* Image — 5 cols */}
          <div className="lg:col-span-5">
            <RevealWrapper delay={0.15}>
              <div className="rounded-[6px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={IMAGE}
                  alt="Cleared safe hillside after poison oak removal in Sonoma County (placeholder)"
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