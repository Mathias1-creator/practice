import React from 'react';
import { Phone, CalendarCheck, Eye } from 'lucide-react';
import useScrollAnimation from '../shared/useScrollAnimation';

const REASONS = [
  {
    icon: Phone,
    heading: 'We Answer the Phone',
    text: "Every call gets picked up. No voicemail black holes, no waiting days for a callback. When you need a plumber, we're here.",
  },
  {
    icon: CalendarCheck,
    heading: 'We Show Up on Time',
    text: "Scheduling means something to us. If we say we'll be there at 8am, we're there at 8am. Your time matters.",
  },
  {
    icon: Eye,
    heading: 'Detail Obsessed',
    text: "From rough-in to finish, every fitting, every joint, every tile penetration is done with precision. We don't cut corners.",
  },
];

function ReasonCard({ icon: Icon, heading, text, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 border border-charcoal/20 mb-5">
        <Icon className="w-6 h-6 text-charcoal" />
      </div>
      <h3 className="text-lg font-bold text-charcoal tracking-tight">{heading}</h3>
      <p className="mt-3 text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">{text}</p>
    </div>
  );
}

export default function WhyVoshal() {
  return (
    <section className="py-20 md:py-28 bg-sand/30">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Why VIP?
          </h2>
          <div className="mt-3 h-1 w-16 rounded mx-auto" style={{ backgroundColor: '#C4A882' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {REASONS.map((r, i) => (
            <ReasonCard key={i} {...r} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}