import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import PrimaryButton from '../shared/PrimaryButton';
import RevealWrapper from '../shared/RevealWrapper';

const REALTOR_IMAGE = 'https://media.base44.com/images/public/6a25de119f5f78bb1df59f6d/363255fef_generated_eba6206e.png';

export default function RealtorsSection() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <RevealWrapper>
            <div className="rounded-md overflow-hidden aspect-[4/3]">
              <img
                src={REALTOR_IMAGE}
                alt="Stunning large-acreage Sonoma County estate property (placeholder)"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealWrapper>

          {/* Text */}
          <RevealWrapper delay={0.15}>
            <Eyebrow>For Real Estate Agents</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[32px] md:text-[40px] leading-[1.12] mb-6">
              We help large-acreage listings sell
            </h2>
            <p className="text-body text-[16px] leading-[1.7] mb-8">
              We partner with agents who handle large rural and estate transactions. For sellers, we clean up
              properties, open view sites, create vehicular access, and make the land more appealing to protect
              and strengthen the asking price. For buyers, we become the executors of their vision for the
              property they've just bought.
            </p>
            <PrimaryButton to="/for-realtors">For Realtors</PrimaryButton>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}