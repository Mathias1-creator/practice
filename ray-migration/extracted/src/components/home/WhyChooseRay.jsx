import React from 'react';
import { Clock, DollarSign, Star } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const REASONS = [
  {
    icon: Clock,
    title: 'Available 24/7',
    text: "Plumbing emergencies don't wait for business hours. Ray is available 24 hours a day, 7 days a week — nights, weekends, and holidays. When you call, someone answers.",
  },
  {
    icon: DollarSign,
    title: 'Honest & Fairly Priced',
    text: 'Ray built his reputation on honest communication, transparent pricing, and clean professional work. No surprises, no runarounds. Just great plumbing at a fair price.',
  },
  {
    icon: Star,
    title: 'Trusted by SLO County',
    text: 'With a 5.0 star rating across 18 Google reviews, Ray Espinoza Plumbing is one of the most trusted plumbers in San Luis Obispo County. See what his customers say.',
  },
];

export default function WhyChooseRay() {
  return (
    <section className="bg-ray-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-center">
            Clean Work. Honest Prices. Always Available.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-14">
          {REASONS.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="text-center">
                <div className="w-14 h-14 bg-ray-red/10 rounded-xl flex items-center justify-center mx-auto">
                  <reason.icon className="w-7 h-7 text-ray-red" />
                </div>
                <h3 className="font-barlow font-bold text-xl text-white mt-6">
                  {reason.title}
                </h3>
                <p className="font-inter text-sm text-white/60 mt-3 leading-relaxed max-w-sm mx-auto">
                  {reason.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}