import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTag from './SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We start with a free on-site consultation to understand your vision, assess your property, and discuss your goals and budget. No pressure, no obligation.'
  },
  {
    num: '02',
    title: 'Custom Design & Plan',
    desc: 'We develop a custom landscape plan tailored to your property and preferences — including materials, timeline, and detailed pricing before any work begins.'
  },
  {
    num: '03',
    title: 'Expert Installation & Maintenance',
    desc: 'Our licensed team brings your vision to life with precision craftsmanship. We also offer ongoing maintenance programs to keep your property looking its best year-round.'
  }
];

export default function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24 border-y border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionTag>HOW IT WORKS</SectionTag>
          <h2 className="font-grotesk text-3xl md:text-5xl font-black text-white mt-3 mb-4 uppercase tracking-tight">
            Simple Process. Exceptional Results.
          </h2>
          <p className="font-dm text-[#888888] text-lg max-w-xl mx-auto">
            From your first call to the final walkthrough — here is how we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-[#2a2a2a]" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-24 h-24 bg-[#1a1a1a] border-2 border-[#c8f500] flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="font-grotesk text-2xl font-black text-[#c8f500]">{step.num}</span>
              </div>
              <h3 className="font-grotesk text-xl font-black text-white mb-3 uppercase tracking-tight">{step.title}</h3>
              <p className="font-dm text-[#888888] text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold px-8 py-6 text-base uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
              Start with a Free Consultation
            </Button>
          </Link>
          <p className="font-dm text-[#888888] text-sm mt-4">
            No obligation · Free estimates · Licensed & Insured
          </p>
        </div>
      </div>
    </section>
  );
}