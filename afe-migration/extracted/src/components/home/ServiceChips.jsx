import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { label: 'Landscape Construction', id: 'landscape-construction' },
  { label: 'Hardscaping', id: 'hardscaping' },
  { label: 'Irrigation Systems', id: 'landscape-construction' },
  { label: 'Landscape Lighting', id: 'landscape-construction' },
  { label: 'Maintenance', id: 'maintenance' },
];

export default function ServiceChips() {
  return (
    <section style={{ backgroundColor: '#111111' }} className="py-6 border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <Link
              key={s.label}
              to={`/services#${s.id}`}
              className="font-grotesk text-xs font-bold px-5 py-2.5 border border-[#2a2a2a] text-[#888888] hover:border-[#c8f500] hover:text-[#c8f500] transition-all duration-200 uppercase tracking-widest"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}