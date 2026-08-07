import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function StatBreak() {
  return (
    <section className="flex items-center justify-center" style={{ backgroundColor: '#2D5016', minHeight: '280px' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-[1.1] mb-4">
            Over a Decade of Transforming<br className="hidden sm:block" /> the Central Coast
          </h2>
          <div className="flex justify-center mb-5">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            From San Miguel to Pismo Beach — quality hardscape and irrigation work that stands the test of time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}