import React from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function GalleryImage({ src, label, hoverDesc, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-alpine-green/0 group-hover:bg-alpine-green/15 transition-colors duration-[400ms]" />
      {/* Hover description */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-outfit text-sm font-medium text-white">{hoverDesc}</p>
      </div>
      {/* Label badge */}
      <div className="absolute top-3 left-3">
        <span className="font-outfit text-[10px] uppercase tracking-wider bg-black/40 backdrop-blur-sm text-white/80 px-2 py-1 rounded-md">
          {label}
        </span>
      </div>
    </div>
  );
}