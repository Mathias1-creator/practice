import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const projects = [
  { image: IMAGES.galleryRetaining, type: 'Retaining Wall', location: 'La Habra Heights' },
  { image: IMAGES.galleryPaverDriveway, type: 'Paver Driveway', location: 'Whittier' },
  { image: IMAGES.showcaseIrrigation, type: 'Irrigation System', location: 'Fullerton' },
  { image: IMAGES.showcaseFencing, type: 'Custom Fencing', location: 'Brea' },
  { image: IMAGES.showcasePatio, type: 'Hardscape Patio', location: 'La Mirada' },
  { image: IMAGES.showcaseLandscape, type: 'Landscape Construction', location: 'La Habra Heights' },
];

export default function ProjectShowcase() {
  const scrollRef = useRef(null);
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="bg-alpine-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-outfit text-xs uppercase tracking-[0.2em] text-alpine-terra mb-3">Our Work</p>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white mb-2">
              Projects We're Proud Of
            </h2>
            <p className="font-inter text-sm text-white/60">
              Swipe to see a selection of our recent work across Southern California.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-alpine-terra text-alpine-terra flex items-center justify-center hover:bg-alpine-terra hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-alpine-terra text-alpine-terra flex items-center justify-center hover:bg-alpine-terra hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[300px] sm:w-[340px] group cursor-pointer snap-start transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={project.image} alt={project.type} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-outfit text-xs uppercase tracking-wider text-white/80 mb-1">{project.type}</p>
                  <p className="font-inter text-sm text-white/60">{project.location}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-alpine-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}