import React from 'react';

export default function WaterSlot07() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#E5E5E5', border: '1px dashed #AAAAAA' }}>
        <img
          src="https://media.base44.com/images/public/6a174d91ad108cbaff5bbd34/60512fb3a_ray-batch4-08.jpg"
          alt="Water"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex">
        <span className="font-dm text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#1A1A1A' }}>
          Water
        </span>
      </div>
    </div>
  );
}