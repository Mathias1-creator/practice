import React from 'react';
import { Award, Shield, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    icon: Award,
    title: '10+ Years of Experience',
    desc: 'AFE Pacific Landscape Management has been transforming residential and commercial properties across the Central Coast for over a decade. Our dedicated team brings innovative ideas and personalized solutions to every project.'
  },
  {
    icon: Shield,
    title: 'Licensed & Professional',
    desc: 'As a licensed landscape contractor we hold ourselves to professional standards on every job. We offer free estimates, warranties on our work, and clear communication from start to finish.'
  },
  {
    icon: Heart,
    title: 'Honest & Detail-Oriented',
    desc: 'We value honesty and integrity in all aspects of our business. Every project receives close attention to detail and services customized to your individual needs.'
  }
];

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`font-grotesk text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Crafted with Care. Built to Last.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`bg-[#1a1a1a] border border-[#2a2a2a] p-8 transition-all duration-700 hover:border-[#c8f500]/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <r.icon className="w-10 h-10 text-[#c8f500] mb-5" />
              <h3 className="font-grotesk text-xl font-black text-white mb-4 uppercase tracking-tight">{r.title}</h3>
              <p className="font-dm text-[#888888] text-base leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}