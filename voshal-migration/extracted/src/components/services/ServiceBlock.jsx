import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import useScrollAnimation from '../shared/useScrollAnimation';

export default function ServiceBlock({ image, images, imageFits, imagePositions, title, body, cta, reverse = false, bgClass = 'bg-white' }) {
  const [ref, isVisible] = useScrollAnimation();

  const isPhoneLink = cta.link && cta.link.startsWith('tel:');
  const imageList = images || (image ? [image] : []);

  return (
    <section ref={ref} className={`${bgClass} py-16 md:py-24`}>
      <div
        className={`max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Image(s) */}
        <div className={`${reverse ? 'md:order-2' : ''} ${imageList.length > 1 ? 'grid grid-cols-2 gap-3' : ''} overflow-hidden`}>
          {imageList.map((src, i) => {
            const fit = imageFits?.[i] || 'cover';
            const position = imagePositions?.[i] || 'center';
            return (
              <img
                key={i}
                src={src}
                alt={`${title} ${i + 1}`}
                className={`w-full object-${fit} bg-warmwhite ${imageList.length > 1 ? 'h-64 md:h-[380px]' : 'h-80 md:h-[480px]'}`}
                style={{ objectPosition: position }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className={reverse ? 'md:order-1' : ''}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-charcoal/60 text-sm md:text-base leading-relaxed">
            {body}
          </p>
          <div className="mt-8">
            {isPhoneLink ? (
              <a
                href={cta.link}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {cta.label}
              </a>
            ) : (
              <Link
                to={cta.link}
                className="inline-block px-8 py-3.5 bg-charcoal text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}