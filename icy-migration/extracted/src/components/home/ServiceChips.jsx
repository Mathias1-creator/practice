import React from 'react';
import { Link } from 'react-router-dom';

const chips = [
  { label: 'Masonry & Hardscaping', anchor: '/services#masonry-hardscaping' },
  { label: 'Irrigation Systems', anchor: '/services#irrigation-installation' },
  { label: 'Fencing Installation', anchor: '/services#fencing-installation' },
  { label: 'Lawn & Landscaping', anchor: '/services#lawn-landscaping' },
  { label: 'Brush Clearance & Fire Prevention', anchor: '/services#brush-clearance' },
];

export default function ServiceChips() {
  return (
    <section className="bg-alpine-offwhite py-6 border-b border-alpine-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {chips.map((chip) => (
            <Link
              key={chip.label}
              to={chip.anchor}
              className="font-outfit text-sm px-5 py-2 rounded-full border-2 border-alpine-green text-alpine-green hover:bg-alpine-green hover:text-white transition-all duration-200"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}