import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { IMAGES } from '@/lib/images';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We start with a free on-site consultation to understand your vision, assess the property, and talk through your goals and budget. No pressure, no obligation — just an honest conversation.',
    image: IMAGES.processStep1,
  },
  {
    num: '02',
    title: 'Custom Plan & Estimate',
    desc: 'We develop a detailed plan and written estimate tailored to your property before any work begins. You know exactly what you are getting and what it will cost.',
    image: IMAGES.processStep2,
  },
  {
    num: '03',
    title: 'Expert Installation',
    desc: 'Our licensed team executes the project with precision and care from start to finish. We clean up, do a final walkthrough with you, and make sure everything is right before we leave.',
    image: IMAGES.processStep3,
  },
];

export default function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-outfit text-xs uppercase tracking-[0.2em] text-alpine-green mb-3">How It Works</p>
          <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-bold text-alpine-dark mb-4">
            Simple Process. Exceptional Results.
          </h2>
          <p className="font-inter text-base text-alpine-dark/70 max-w-2xl mx-auto">
            From your first call to the final walkthrough — here is exactly how Alpine Meadows works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[140px] left-[16.6%] right-[16.6%] border-t-2 border-dashed border-alpine-terra/40 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative z-10 text-center transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 bg-alpine-terra rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-outfit text-sm font-bold text-white">{step.num}</span>
              </div>
              <h3 className="font-outfit text-lg font-semibold text-alpine-dark mb-3">{step.title}</h3>
              <p className="font-inter text-sm text-alpine-dark/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-block bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            Start with a Free Consultation
          </Link>
          <p className="font-inter text-xs text-alpine-dark/50 mt-3">
            No obligation · Free estimates · Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </section>
  );
}