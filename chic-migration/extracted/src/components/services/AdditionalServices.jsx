import React from 'react';
import { Droplets, SquareStack, PenTool, CalendarCheck } from 'lucide-react';
import SectionLabel from '../SectionLabel';

const additionalServices = [
  { icon: Droplets, title: 'Irrigation', desc: 'Smart irrigation systems designed for water efficiency and lush results.' },
  { icon: SquareStack, title: 'Hardscape', desc: 'Patios, pathways, retaining walls, and other structural garden elements.' },
  { icon: PenTool, title: 'Garden Planning & Design', desc: 'Custom landscape blueprints tailored to your vision and property.' },
  { icon: CalendarCheck, title: 'Maintenance Programs', desc: 'Flexible weekly, biweekly, or monthly care packages for ongoing beauty.' },
];

export default function AdditionalServices() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f2ece6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>More Services</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3" style={{ color: '#1e1e1e' }}>
            Additional Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                borderLeft: '3px solid #c9547a',
                border: '1px solid #e4dcd4',
                borderLeftWidth: '3px',
                borderLeftColor: '#c9547a',
              }}
            >
              <service.icon className="w-6 h-6 mb-4" style={{ color: '#c9547a' }} />
              <h3 className="font-body text-sm font-semibold mb-2" style={{ color: '#1e1e1e', letterSpacing: '0.04em' }}>
                {service.title}
              </h3>
              <p className="font-body text-sm" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}