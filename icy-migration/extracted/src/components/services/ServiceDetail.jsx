import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function ServiceDetail({ id, image, title, copy, reviewer, avatarColor, reverse }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id={id} ref={ref} className="relative scroll-mt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          <div className={`${reverse ? 'lg:col-start-2 lg:text-left' : ''} lg:direction-ltr`}>
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
              <p className="font-inter text-base text-white/85 leading-relaxed mb-8">{copy}</p>

              <Link
                to="/contact"
                className="inline-block bg-alpine-green text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-green/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 mb-4"
              >
                Request a Quote for This Service
              </Link>

              <p className="font-inter text-xs text-white/50 mb-6">
                Free estimates · Licensed · Bonded · Insured
              </p>

              {/* Reviewer Chip */}
              {reviewer && (
                <a href="#" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full pl-1.5 pr-4 py-1.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-outfit font-bold`} style={{ backgroundColor: avatarColor }}>
                    {reviewer.initials}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-fraunces text-sm italic text-white/80">"{reviewer.quote}"</p>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-[5px] transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}