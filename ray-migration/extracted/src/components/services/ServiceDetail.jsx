import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ServiceDetail({ service, reverse = false }) {
  return (
    <section id={service.anchor} className="relative py-20 sm:py-28 scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ray-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-2xl ${reverse ? 'ml-auto' : ''}`}>
          <ScrollReveal>
            <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {service.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-inter text-base sm:text-lg text-white/80 mt-6 leading-relaxed">
              {service.copy}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ray-red text-white font-dm font-semibold px-6 py-3.5 rounded-md mt-8 hover:scale-103 active:scale-97 transition-transform duration-200"
            >
              Request a Quote for This Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Reviewer Chip */}
          <ScrollReveal delay={300}>
            <div className="flex items-center gap-3 mt-6 bg-white/10 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 w-fit">
              <div className="w-9 h-9 bg-ray-red rounded-full flex items-center justify-center">
                <span className="font-dm font-bold text-xs text-white">{service.reviewer.initials}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-ray-red text-ray-red" />
                ))}
              </div>
              <span className="font-inter text-sm text-white/70 italic">"{service.reviewer.quote}"</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/50" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="font-inter text-xs text-white/30 mt-3">
              Available 24/7 · Licensed · Honest Pricing
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}