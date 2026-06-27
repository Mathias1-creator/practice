import React from 'react';
import { Clock, Award, Heart } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

const reasons = [
  {
    icon: Clock,
    title: '25+ Years Experience',
    description: 'In business since 2001, serving homeowners, businesses, schools, and parks across SLO County.',
  },
  {
    icon: Award,
    title: 'Certified & Licensed',
    description: 'Certified Irrigation Technician, Irrigation Auditor, Water Distribution & Treatment Operator, CSLB Licensed.',
  },
  {
    icon: Heart,
    title: 'Honest & Competitive',
    description: "We give straight answers, fair prices, and work that lasts. No upselling, no shortcuts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-14">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Why Wentzel</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
              Why Choose Us
            </h2>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimateInView key={reason.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="w-7 h-7 text-[#2E7D32]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {reason.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}