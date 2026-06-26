import React from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const FIRE_IMAGE = '/images/240dce901_generated_c820d83a.jpg';

export default function FireFeatureSection() {
  return (
    <section className="bg-forest">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <RevealWrapper>
            <Eyebrow light>Wildfire Readiness</Eyebrow>
            <h2 className="font-heading font-normal text-white text-[32px] md:text-[42px] leading-[1.12] mb-6">
              Wildfire protection & fuel reduction
            </h2>
            <p className="text-[16px] leading-[1.7] mb-8" style={{ color: '#d9d0bf' }}>
              Sonoma's beautiful land comes with real fire risk. From late fall through spring we create
              defensible space — clearing brush, building and managing burn piles, limbing up trees, and
              removing poison oak by hand or through licensed chemical abatement — leaving your property
              safer, cleaner, and far more usable.
            </p>
            <Link
              to="/poison-oak-removal"
              className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded bg-white text-heading transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px]"
            >
              Poison Oak Removal & Fire Services
            </Link>
          </RevealWrapper>

          {/* Image */}
          <RevealWrapper delay={0.15}>
            <div className="rounded-md overflow-hidden aspect-[4/3]">
              <img
                src={FIRE_IMAGE}
                alt="Cleared fire-safe land with limbed-up oak trees in Sonoma County (placeholder)"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}