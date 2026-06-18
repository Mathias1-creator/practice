import React from 'react';
import { Link } from 'react-router-dom';

const CHIPS = [
  { label: 'Drain Cleaning', anchor: 'drain-cleaning' },
  { label: 'Water Line & Plumbing Repairs', anchor: 'water-line-repairs' },
  { label: 'Gas Line Services', anchor: 'gas-line-services' },
  { label: 'Water Heater Installation', anchor: 'water-heater-installation' },
];

export default function ServiceChips() {
  return (
    <section className="bg-ray-offwhite py-8 border-y border-ray-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CHIPS.map((chip) => (
            <Link
              key={chip.anchor}
              to={`/services#${chip.anchor}`}
              className="font-dm font-medium text-sm text-ray-black border-2 border-ray-black px-5 py-2.5 rounded-full hover:bg-ray-black hover:text-white transition-all duration-200"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}