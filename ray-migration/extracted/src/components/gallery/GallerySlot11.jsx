import React from 'react';

export default function GallerySlot11() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <img
          src="/images/b45dc3769_ray-gallery-11.jpg"
          alt="Sewer and Septic work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex">
        <span className="font-dm text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#1A1A1A' }}>
          Sewer and Septic
        </span>
      </div>
    </div>
  );
}