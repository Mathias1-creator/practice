import React from 'react';
import { Award, Shield, BadgeCheck, DollarSign } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

const badges = [
  { icon: Award, label: '25+ Years in Business' },
  { icon: Shield, label: 'CSLB Licensed & Insured' },
  { icon: BadgeCheck, label: 'Certified Irrigation Technician' },
  { icon: DollarSign, label: 'Free Estimates' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1A1A1A] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {badges.map((badge, i) => (
            <AnimateInView key={badge.label} delay={i * 0.1}>
              <div className="flex items-center gap-3 justify-center">
                <badge.icon className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <span className="text-white/80 text-sm font-medium">{badge.label}</span>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}