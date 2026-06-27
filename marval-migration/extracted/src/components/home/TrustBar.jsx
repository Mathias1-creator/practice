import React from 'react';

const items = [
  '17 Years in Business',
  'Licensed #1087803 C-27',
  'Residential & Commercial',
  'Public Works',
  'Federal Contracting',
  'Free Estimates',
  'Serving SLO County',
];

export default function TrustBar() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-4 whitespace-nowrap">
      <span className="text-white font-medium text-sm tracking-wide">{item}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-stone" />
    </span>
  ));

  return (
    <section className="bg-forest/95 backdrop-blur-lg py-4 overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex items-center gap-4 pr-4">
          {content}
        </div>
        <div className="flex items-center gap-4 pr-4">
          {content}
        </div>
      </div>
    </section>
  );
}