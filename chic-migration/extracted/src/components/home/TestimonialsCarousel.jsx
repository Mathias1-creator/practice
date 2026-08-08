import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionLabel from '../SectionLabel';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Jenny and her team completely transformed our backyard. The attention to detail is unmatched — every plant, every edge, every stone was placed with such care. We get compliments from neighbors constantly. Garden Chic is the real deal.',
  },
  {
    name: 'David & Lisa K.',
    text: "We've used several landscapers over the years, and Garden Chic is by far the best. Jenny's eye for design and her reliability are what keep us coming back. Our monthly maintenance has never been more consistent.",
  },
  {
    name: 'Rebecca T.',
    text: "Our property was so overgrown we didn't even know where to start. One call to Garden Chic and Jenny had a plan within days. The cleanup was thorough, professional, and the results speak for themselves. Highly recommend!",
  },
  {
    name: 'Michael P.',
    text: "As a commercial property manager, I need a landscaping partner I can trust. Garden Chic delivers every time — on schedule, within budget, and with a quality of work that impresses our tenants and clients.",
  },
];

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.text.length > 220;

  return (
    <div
      className="p-8 h-full flex flex-col"
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e4dcd4',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
      }}
    >
      <Quote className="w-8 h-8 mb-4" style={{ color: '#c9547a', opacity: 0.3 }} />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#c9547a' }} />
        ))}
      </div>
      <p className="font-body text-sm flex-1 mb-4" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
        {isLong && !expanded ? `${testimonial.text.slice(0, 220)}...` : testimonial.text}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 font-semibold transition-colors duration-300"
            style={{ color: '#c9547a' }}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </p>
      <p className="font-body text-sm font-semibold" style={{ color: '#1e1e1e' }}>
        — {testimonial.name}
      </p>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => { setCurrent((prev) => (prev + 1) % testimonials.length); setAutoPlay(false); };
  const prev = () => { setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); setAutoPlay(false); };

  return (
    <section className="py-20 md:py-28" style={{ background: '#f2ece6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>What Clients Say</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3" style={{ color: '#1e1e1e' }}>
            Gardens We've Transformed
          </h2>
        </div>

        {/* Desktop: show 2 or 3 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[current]} />

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              style={{ border: '1px solid #e4dcd4', background: '#ffffff' }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#c9547a' }} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false); }}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{ background: i === current ? '#c9547a' : '#e4dcd4' }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              style={{ border: '1px solid #e4dcd4', background: '#ffffff' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#c9547a' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}