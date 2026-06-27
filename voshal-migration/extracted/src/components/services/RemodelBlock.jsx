import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../shared/useScrollAnimation';

export default function RemodelBlock({ images, title, body, cta, bgClass = 'bg-white' }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className={`${bgClass}`} style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div
        className={`max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Text — left, 50% */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-charcoal/60 text-sm md:text-base leading-relaxed">
            {body}
          </p>
          <div className="mt-8">
            <Link
              to={cta.link}
              className="inline-block px-8 py-3.5 bg-charcoal text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* Images — right, 50%, stacked vertically */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col" style={{ gap: '10px' }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} ${i + 1}`}
              className="object-contain"
              style={{
                borderRadius: '8px',
                display: 'block',
                maxHeight: '420px',
                width: i === 0 ? '110%' : '100%',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}