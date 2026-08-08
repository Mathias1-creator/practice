import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PageHero({ title, subtitle, breadcrumbs = [], image, overlayOpacity = 55, customTitle, kenBurns = false }) {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={kenBurns ? {
            animation: 'ken-burns-zoom 20s ease infinite alternate',
            transformOrigin: 'center center',
          } : {}}
        />
        {kenBurns && (
          <style>{`
            @keyframes ken-burns-zoom {
              from { transform: scale(1.0); }
              to { transform: scale(1.05); }
            }
          `}</style>
        )}
        <div
          className="absolute inset-0 bg-ray-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/40" />}
                  {crumb.path ? (
                    <Link to={crumb.path} className="font-inter text-sm text-white/60 hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-inter text-sm text-white/90">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollReveal>
        )}

        {customTitle ? (
          customTitle
        ) : (
          <ScrollReveal delay={100}>
            <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              {title}
            </h1>
          </ScrollReveal>
        )}

        {subtitle && (
          <ScrollReveal delay={200}>
            <p className="font-inter text-lg text-white/70 mt-4 max-w-2xl">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}