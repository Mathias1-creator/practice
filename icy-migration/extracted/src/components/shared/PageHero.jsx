import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ image, title, subtitle, breadcrumbs, children }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 justify-between">
          <div>
            {breadcrumbs && (
              <nav className={`flex items-center gap-2 font-outfit text-xs text-white/60 mb-4 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                {breadcrumbs.map((bc, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span>{'>'}</span>}
                    {bc.path ? (
                      <Link to={bc.path} className="hover:text-alpine-terra transition-colors">{bc.label}</Link>
                    ) : (
                      <span className="text-white/90">{bc.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
            <h1 className={`font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-150 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`font-inter text-base md:text-lg text-white/75 max-w-2xl transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}