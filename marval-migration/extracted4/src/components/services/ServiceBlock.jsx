import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function ServiceBlock({ title, body, image, imageAlt, images, ctaText, ctaLink, ctaType, reversed, bgClass }) {
  const { ref, controls } = useScrollAnimation();

  const isPhone = ctaType === 'phone';
  const allImages = images || [{ src: image, alt: imageAlt }];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className={`py-20 px-4 ${bgClass}`}
    >
      <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:direction-rtl' : ''}`}>
        <div className={`${reversed ? 'lg:order-2' : ''}`}>
          {allImages.length > 1 ? (
            <div className="grid grid-cols-2 gap-3">
              {allImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover rounded-2xl shadow-xl ${i === 0 ? 'col-span-2 h-64' : 'h-44'}`}
                />
              ))}
            </div>
          ) : (
            <img
              src={allImages[0].src}
              alt={allImages[0].alt}
              className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-xl"
            />
          )}
        </div>
        <div className={`${reversed ? 'lg:order-1' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">{title}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{body}</p>
          {isPhone ? (
            <a
              href="tel:8056022230"
              className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25"
            >
              <Phone className="w-4 h-4" />
              {ctaText}
            </a>
          ) : (
            <Link
              to={ctaLink || '/contact'}
              className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}