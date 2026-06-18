import React from 'react';

export default function GasSlot03() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <img
          src="https://media.base44.com/images/public/6a174d91ad108cbaff5bbd34/49694cdde_ray-batch2-032.jpg"
          alt="Gas Repair and New Install"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex">
        <span className="font-dm text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#1A1A1A' }}>
          Gas Repair and New Install
        </span>
      </div>
    </div>
  );
}