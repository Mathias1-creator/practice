import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, CloudRain, Leaf, Trophy, ArrowRight } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

const services = [
  {
    icon: Droplets,
    title: 'Irrigation',
    description: 'Design, installation, repair, and maintenance of residential and commercial irrigation systems.',
    link: '/services#irrigation',
  },
  {
    icon: CloudRain,
    title: 'Drainage',
    description: 'Custom drainage solutions to eliminate standing water, erosion, and runoff problems.',
    link: '/services#drainage',
  },
  {
    icon: Leaf,
    title: 'Lawn Care',
    description: 'Aeration, dethatching, fertilizing, overseeding, and full lawn maintenance programs.',
    link: '/services#lawn-care',
  },
  {
    icon: Trophy,
    title: 'Sports Fields & Parks',
    description: 'Professional sports field audits, renovation, leveling, and ongoing field management.',
    link: '/sports-fields',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-14">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
              Our Services
            </h2>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimateInView key={service.title} delay={i * 0.1}>
              <Link
                to={service.link}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full"
              >
                <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2E7D32] transition-colors">
                  <service.icon className="w-6 h-6 text-[#2E7D32] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-[#2E7D32] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}