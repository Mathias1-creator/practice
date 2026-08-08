import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Leaf, LayoutGrid, Droplets, TreePine, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Landscaping',
    desc: 'Residential and commercial design and installation. Sod, planting, grading, and full yard transformations.',
    stat: '300+ Projects Completed',
    anchor: 'landscaping',
  },
  {
    icon: LayoutGrid,
    title: 'Hardscape',
    desc: 'Custom paver patios, walkways, driveways, and retaining walls built to last.',
    stat: '200+ Patios Installed',
    anchor: 'hardscape',
  },
  {
    icon: Droplets,
    title: 'Irrigation',
    desc: 'System installation, repair, and troubleshooting. Keep your landscape healthy year-round.',
    stat: '500+ Systems Serviced',
    anchor: 'irrigation',
  },
  {
    icon: TreePine,
    title: 'Planting & Tree Services',
    desc: 'Tree trimming, removal, and expert planting. Professional care for every tree on your property.',
    stat: '1,000+ Trees Trimmed',
    anchor: 'planting',
  },
];

export default function BentoServices() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-charcoal/85" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-stone text-sm font-semibold tracking-widest uppercase mb-3">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">What We Do</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Full-service landscaping and hardscape for residential, commercial, and public works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={i}
                to={`/services#${service.anchor}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest/30 hover:bg-white/10 hover:border-forest/50 transition-all duration-300 cursor-pointer block"
              >
                {/* Top green accent bar */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-forest rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="mb-5 mt-2">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-forest transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{service.desc}</p>

                {/* Stat */}
                <p className="text-stone text-xs font-semibold tracking-wide uppercase mb-4">{service.stat}</p>

                {/* Learn More — fades in on hover */}
                <div className="flex items-center gap-1 text-forest text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </motion.section>
  );
}