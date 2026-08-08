import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import BeforeAfterSlider from '../shared/BeforeAfterSlider';

const SLIDERS = [
  {
    before: '/images/8c3782784_Screenshot2026-05-02at62504AM.jpg',
    after: '/images/2286765ce_Screenshot2026-05-02at62530AM.jpg',
    label: 'Side Yard Drainage & Gravel Installation',
  },
  {
    before: '/images/d53cab9ba_Screenshot2026-05-02at64750AM.jpg',
    after: '/images/f21480a4a_Screenshot2026-05-02at65845AM.jpg',
    label: 'Backyard Paver Patio & Sod Installation',
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-obsidian mb-4">
              See the Transformation
            </h2>

          </div>
        </ScrollReveal>

        <div className="space-y-10">
          {SLIDERS.map((slider, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <BeforeAfterSlider
                beforeImage={slider.before}
                afterImage={slider.after}
                label={slider.label}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-forest text-white font-bold px-8 py-4 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 shadow-lg shadow-forest/20"
            >
              View Full Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C4A882)' }} />
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2D5016' }} />
            <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: '#C4A882' }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2D5016' }} />
          </div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #C4A882)' }} />
        </div>
      </div>
    </section>
  );
}