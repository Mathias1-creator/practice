import React from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, label }) {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        {/* Before card */}
        <div className="relative w-1/2" style={{ height: '450px' }}>
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Before
          </div>
        </div>

        {/* After card */}
        <div className="relative w-1/2" style={{ height: '450px' }}>
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 right-4 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider" style={{ backgroundColor: 'rgba(45,80,22,0.9)' }}>
            After
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm font-medium text-muted-foreground">
        {label}
      </p>
    </div>
  );
}