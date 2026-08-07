import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import { Shield, Building2, MapPin, Award } from 'lucide-react';

const BADGES = [
  { icon: Shield, label: 'Licensed · Bonded · Insured' },
  { icon: Building2, label: 'Residential & Commercial' },
  { icon: MapPin, label: 'Central Coast Experts' },
  { icon: Award, label: 'Quality Guaranteed' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((badge, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center justify-center gap-3 py-3">
                <badge.icon className="w-5 h-5 text-stone flex-shrink-0" />
                <span className="text-white/80 text-sm font-semibold tracking-wide">{badge.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}