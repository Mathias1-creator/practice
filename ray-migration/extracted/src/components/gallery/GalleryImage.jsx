import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function GalleryImage({ src, label, description, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-5">
        {/* IMAGE SLOT — {label} */}
        <img
          src={src}
          alt={description}
          className="w-full object-cover transition-transform duration-400 group-hover:scale-104"
        />
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-ray-red/0 group-hover:bg-ray-red/15 transition-colors duration-400" />
        {/* Description overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ray-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-dm font-semibold text-sm text-white">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}