import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { Shield, Award, Hammer } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'At Alpine Meadows we believe in doing fewer jobs better. Every project receives our full attention from start to finish — no shortcuts, no rushing, no compromises on materials or workmanship.',
  },
  {
    icon: Shield,
    title: 'Licensed & Credentialed',
    desc: 'Alpine Meadows is fully licensed, bonded, and insured. You are protected on every project we complete. We stand behind our work and our reputation.',
  },
  {
    icon: Hammer,
    title: 'Full Service Outdoor Construction',
    desc: 'From stone masonry and hardscaping to smart irrigation systems and custom fencing — Alpine Meadows handles every aspect of your outdoor construction project under one roof.',
  },
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-alpine-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quality Over Quantity. Every Time.
          </h2>
          <p className="font-inter text-base text-white/60 max-w-xl mx-auto">
            We take on fewer projects so we can do each one better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className={`text-center transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 bg-alpine-terra/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-alpine-terra" />
                </div>
                <h3 className="font-outfit text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}