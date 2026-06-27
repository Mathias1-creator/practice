import React from 'react';
import { Phone } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function EmergencyBanner() {
  return (
    <section className="bg-ray-red py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Plumbing Emergency? We Answer 24/7.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-inter text-base sm:text-lg text-white/90 mt-4 max-w-xl mx-auto">
            Don't wait — call Ray right now. Available nights, weekends, and holidays.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            href="tel:+18058352196"
            className="inline-flex items-center gap-3 font-barlow font-bold text-2xl sm:text-3xl text-white mt-6 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-7 h-7" />
            (805) 835-2196
          </a>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <a
            href="tel:+18058352196"
            className="inline-block mt-6 bg-white text-ray-red font-dm font-semibold px-8 py-3.5 rounded-md hover:scale-103 active:scale-97 transition-transform duration-200 animate-float-pulse"
          >
            Call Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}