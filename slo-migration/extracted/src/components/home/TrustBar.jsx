import React from 'react';
import { Shield, Clock, MapPin, Zap } from 'lucide-react';

const items = [
  { icon: Shield, label: '19 Years in Business' },
  { icon: Zap, label: 'Same-Day Service Available' },
  { icon: MapPin, label: 'SLO & Santa Barbara County' },
  { icon: Clock, label: 'Open 24 Hours' },
];

export default function TrustBar() {
  return (
    <section style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-3 py-5 px-4 ${
                i < items.length - 1 ? 'lg:border-r border-gray-800' : ''
              } ${i < 2 ? 'border-b lg:border-b-0 border-gray-800' : ''}`}
            >
              <item.icon className="w-5 h-5 shrink-0" style={{ color: '#CC0000' }} />
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}