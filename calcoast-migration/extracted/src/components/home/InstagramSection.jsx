import React from 'react';
import { Instagram } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const IG_URL = 'https://www.instagram.com/cal_coast_hardscape.irrigation';

const PHOTOS = [
  '/images/ae4194726_Screenshot2026-05-02at64618AM.jpg',
  '/images/814204f9e_Screenshot2026-05-02at64503AM.jpg',
  '/images/9a9604e67_Screenshot2026-05-02at64326AM.jpg',
  '/images/0a06a4443_Screenshot2026-05-02at65500AM.jpg',
  '/images/3ed7dc577_Screenshot2026-05-02at14158PM.jpg',
  '/images/74c15cf3d_Screenshot2026-05-02at14226PM.jpg',
];

export default function InstagramSection() {
  return (
    <section style={{ backgroundColor: '#F9F7F4' }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <ScrollReveal className="w-full lg:w-[38%] flex-shrink-0">
            <div>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-charcoal leading-[1.1] mb-4">
                See Our Work<br />in the Wild
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#C4A882' }}>
                Follow along as we transform outdoor spaces across the Central Coast.
              </p>
              <p className="font-bold text-lg mb-8" style={{ color: '#2D5016' }}>
                @cal_coast_hardscape.irrigation
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg"
                style={{ backgroundColor: '#2D5016' }}
              >
                <Instagram className="w-5 h-5" />
                Follow Us on Instagram
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right: 3x2 photo grid */}
          <ScrollReveal delay={0.15} className="w-full lg:flex-1">
            <div className="grid grid-cols-3 gap-1.5">
              {PHOTOS.map((src, i) => (
                <a
                  key={i}
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-lg group"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <img
                    src={src}
                    alt={`Project photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Forest green overlay + Instagram icon on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(45,80,22,0.65)' }}
                  >
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}