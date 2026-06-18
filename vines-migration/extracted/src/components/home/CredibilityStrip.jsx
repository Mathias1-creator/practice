import React from 'react';

const POINTS = [
  'Over 30 Years on the Land',
  'CSLB Licensed C-27 #1152556',
  'Licensed Pest Control #46723',
  'Serving Sonoma, Marin & Mendocino',
];

export default function CredibilityStrip() {
  return (
    <section className="bg-forest">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-5 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2">
          {POINTS.map((point, i) => (
            <React.Fragment key={point}>
              <span className="font-body text-white/80 text-[12px] md:text-[13px] tracking-[0.08em] px-4 md:px-5 text-center">
                {point}
              </span>
              {i < POINTS.length - 1 && (
                <span className="hidden md:block w-[1px] h-[14px] bg-brass/40" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}