import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Alpine Meadows completely transformed our backyard with a beautiful retaining wall and paver patio. Jacob and his team were professional, clean, and delivered exactly what we envisioned. Will hire again without hesitation.',
    name: 'David K.',
    location: 'La Habra Heights',
    flag: 'PLACEHOLDER — replace with real review',
  },
  {
    text: 'The irrigation system they designed and installed has been running perfectly for months. They took the time to plan everything properly and explained every step of the process. Top quality work.',
    name: 'Maria L.',
    location: 'Whittier',
    flag: 'PLACEHOLDER — replace with real review',
  },
  {
    text: 'We hired Alpine Meadows for a custom fence installation and couldn\'t be happier. On time, on budget, and the craftsmanship is flawless. Exactly what quality over quantity looks like.',
    name: 'Robert T.',
    location: 'Fullerton',
    flag: 'PLACEHOLDER — replace with real review',
  },
  {
    text: 'From the first consultation to the final walkthrough, Alpine Meadows was professional, communicative, and meticulous. Our new paver driveway looks incredible.',
    name: 'Sandra M.',
    location: 'Brea',
    flag: 'PLACEHOLDER — replace with real review',
  },
  {
    text: 'Best landscaping contractor we\'ve used. They didn\'t rush, they listened, and the result was better than we imagined. Highly recommend for anyone in the area.',
    name: 'James L.',
    location: 'La Mirada',
    flag: 'PLACEHOLDER — replace with real review',
  },
];

function TestimonialCard({ t }) {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = t.text.length > 200;

  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[360px] bg-alpine-offwhite rounded-2xl p-6 mx-2">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-alpine-terra text-alpine-terra" />
        ))}
      </div>
      <p className={`font-fraunces text-sm italic text-alpine-dark/80 leading-relaxed mb-4 ${!expanded && needsExpand ? 'line-clamp-5' : ''}`}>
        "{t.text}"
      </p>
      {needsExpand && (
        <button onClick={() => setExpanded(!expanded)} className="font-outfit text-xs text-alpine-terra mb-3">
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="border-t border-alpine-neutral pt-3">
        <p className="font-outfit text-sm font-semibold text-alpine-dark">{t.name}</p>
        <p className="font-inter text-xs text-alpine-dark/60">{t.location}</p>
        <p className="font-inter text-[10px] text-alpine-terra/60 mt-1">{t.flag}</p>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', updateScrollButtons);
    return () => el && el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <section className="bg-alpine-green py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="font-inter text-sm text-white/70">
            Real feedback from real Southern California homeowners.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="snap-start">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-alpine-terra text-alpine-terra flex items-center justify-center hover:bg-alpine-terra hover:text-white transition-all disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-alpine-terra text-alpine-terra flex items-center justify-center hover:bg-alpine-terra hover:text-white transition-all disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-alpine-terra text-white font-outfit font-medium px-6 py-3 rounded-lg hover:bg-alpine-terra/90 transition-all text-sm"
            onClick={(e) => e.preventDefault()}
          >
            Leave Us a Google Review
          </a>
          <p className="font-inter text-[10px] text-white/40 mt-2">
            CLIENT: Replace with actual Google Review link
          </p>
        </div>
      </div>
    </section>
  );
}