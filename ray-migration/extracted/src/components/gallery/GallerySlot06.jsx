import React from 'react';

export default function GallerySlot06() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <img
          src="/images/bb00d3b51_ray-gallery-06.jpg"
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