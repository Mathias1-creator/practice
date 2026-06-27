import React from 'react';
import { MapPin } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

const cities = [
  'Atascadero', 'Paso Robles', 'Templeton', 'San Luis Obispo',
  'Santa Margarita', 'Morro Bay', 'Los Osos', 'Arroyo Grande',
  'Pismo Beach', 'Grover Beach', 'Nipomo', 'Shell Beach',
];

export default function ServiceArea() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-12">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Service Area</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
              Proudly Serving San Luis Obispo County
            </h2>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cities.map((city, i) => (
            <AnimateInView key={city} delay={i * 0.05}>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm">
                <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span className="text-sm font-medium text-[#1A1A1A]">{city}</span>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}