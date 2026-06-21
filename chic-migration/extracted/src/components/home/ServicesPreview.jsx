import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Flower2, Sparkles, ArrowRight } from 'lucide-react';
import SectionLabel from '../SectionLabel';

const maintenanceImg = '/images/21682f952_generated_72cb00a3.png';
const installationsImg = '/images/c628358d8_generated_871453d1.png';
const cleanupsImg = '/images/9e5857660_generated_1f9f3a68.png';


const services = [
  {
    icon: Leaf,
    title: 'Monthly Maintenance',
    desc: 'Reliable, detail-driven garden care to keep your outdoor spaces polished year-round.',
    link: '/services#monthly',
    image: maintenanceImg,
  },
  {
    icon: Flower2,
    title: 'Landscape Installations',
    desc: 'Thoughtful planting, irrigation, and hardscape installations tailored to your property.',
    link: '/services#installations',
    image: installationsImg,
  },
  {
    icon: Sparkles,
    title: 'One-Time Cleanups',
    desc: 'Transform overgrown or neglected spaces into clean, intentional gardens.',
    link: '/services#cleanups',
    image: cleanupsImg,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3" style={{ color: '#1e1e1e' }}>
            Everything Your Outdoor Space Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (

            <Link
              key={service.title}
              to={service.link}
              className="group relative overflow-hidden block"
              style={{ borderRadius: '12px', height: '420px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '12px' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ background: 'rgba(0,0,0,0.55)' }}
                />
                <div
                  className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(0,0,0,0.2)' }}
                />
              </div>

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-1"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  background: 'rgba(255,255,255,0.1)',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <service.icon className="w-6 h-6 mb-3" style={{ color: '#c9547a' }} />
                <h3 className="font-body text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="font-body text-sm text-white/70 mb-3" style={{ lineHeight: 1.6 }}>{service.desc}</p>
                <span className="font-body text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-300" style={{ color: '#c9547a' }}>
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 20px 48px rgba(201,84,122,0.2)', borderRadius: '12px' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}