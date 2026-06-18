import React from 'react';
import { User, Clock, Shield, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const reasons = [
  {
    icon: User,
    title: 'Owner On Every Job',
    text: 'Martin shows up personally to every project. You deal with the owner, not a middleman.',
  },
  {
    icon: Clock,
    title: '17 Years Experience',
    text: 'Since 2007, we have been building and maintaining landscapes across the Central Coast.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    text: 'Fully licensed C-27 contractor Lic# 1087803. You are protected on every project.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    text: 'No hidden fees, no surprises. We give you a clear estimate before any work begins.',
  },
];

export default function WhyMarval() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-white py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal text-center mb-16">
          Why Choose Marval?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-stone/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-stone" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}