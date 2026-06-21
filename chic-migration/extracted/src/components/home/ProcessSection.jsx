import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../SectionLabel';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We visit your property, listen to your vision, and provide a free detailed estimate. No pressure, no obligation.',
  },
  {
    num: '02',
    title: 'Custom Plan',
    desc: 'We design a tailored landscape plan using premium plants and materials that fit your style and budget.',
  },
  {
    num: '03',
    title: 'Beautiful Results',
    desc: 'Our team executes the plan with precision and care, leaving your outdoor space looking polished and stunning.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f2ece6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3" style={{ color: '#1e1e1e' }}>
            From Vision to Beautiful Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0"
            style={{ borderTop: '2px dashed #c9547a', opacity: 0.3 }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Number Circle */}
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{ background: '#c9547a' }}
              >
                <span className="font-heading text-xl font-bold text-white">{step.num}</span>
              </div>

              <h3
                className="font-body text-lg font-semibold mb-3"
                style={{ color: '#1e1e1e', letterSpacing: '0.04em' }}
              >
                {step.title}
              </h3>
              <p className="font-body text-sm max-w-xs mx-auto" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}