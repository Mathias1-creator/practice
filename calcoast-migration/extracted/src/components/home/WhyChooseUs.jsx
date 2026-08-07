import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import { Award, Shield, MessageCircle } from 'lucide-react';

const REASONS = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'We focus on long-term durability and proper installation — making sure every project is done right the first time, every time.',
  },
  {
    icon: Shield,
    title: 'Licensed & Credentialed',
    desc: 'Cal Coast Hardscape & Irrigation is fully licensed, bonded, and insured. We stand behind every project we complete.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    desc: 'From first contact to final walkthrough, we keep you informed every step of the way. No surprises, no runaround.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white text-center mb-16">
            Why the Central Coast Chooses Cal Coast
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {REASONS.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-forest/20 mb-6">
                  <reason.icon className="w-7 h-7 text-stone" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">{reason.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}