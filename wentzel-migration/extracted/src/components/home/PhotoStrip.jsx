import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

export default function PhotoStrip({ images }) {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
              Recent Projects
            </h2>
          </div>
        </AnimateInView>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 min-w-max">
          {images.map((img, i) => (
            <AnimateInView key={i} delay={i * 0.1}>
              <div className="w-72 h-48 rounded-xl overflow-hidden group cursor-pointer relative shrink-0">
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1B5E20] font-semibold transition-colors"
        >
          View Full Gallery <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}