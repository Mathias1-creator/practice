import React from 'react';
import { Zap, Shield, Award, Sun } from 'lucide-react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const VALUES = [
  {
    icon: Zap,
    title: 'Farming-Bred Efficiency',
    desc: 'We accomplish in days what others take weeks to finish.',
  },
  {
    icon: Shield,
    title: 'Done Right the First Time',
    desc: 'Better quality work that holds up — we often repair what other crews left behind.',
  },
  {
    icon: Award,
    title: 'Fully Licensed',
    desc: 'Two state licenses across landscape contracting and pest control.',
  },
  {
    icon: Sun,
    title: 'Year-Round Partner',
    desc: 'We stay with your property through every season, not just one job.',
  },
];

export default function DifferenceSection() {
  return (
    <section className="bg-bone">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <Eyebrow className="justify-center">Why AF Vines</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[34px] md:text-[46px] leading-[1.1]">
              The difference is in the doing
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <RevealWrapper key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                    <Icon size={28} className="text-brass" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-heading font-medium text-heading text-[19px] mb-2">{v.title}</h3>
                  <p className="text-caption text-[15px] leading-relaxed">{v.desc}</p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}