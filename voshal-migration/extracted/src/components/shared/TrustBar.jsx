import React from 'react';

const defaultItems = [
  'Always Answers the Phone',
  'Sticks to Scheduling',
  'Attention to Every Detail',
  'Available 24/7',
  'Licensed & Insured',
  'Serving SLO County',
  'Family Owned & Operated',
  '24/7 Emergency Service',
];

export default function TrustBar({ items, className = '' }) {
  const displayItems = items || defaultItems;
  // duplicate for seamless loop
  const loopItems = [...displayItems, ...displayItems];

  return (
    <div className={`bg-charcoal py-4 overflow-hidden ${className}`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {loopItems.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-white/80 text-xs md:text-sm font-medium tracking-wide px-6 whitespace-nowrap">
            {item}
            <span className="text-sand">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}