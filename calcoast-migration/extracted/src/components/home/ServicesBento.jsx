import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import { ArrowRight, Shield } from 'lucide-react';

const HARDSCAPE_IMG = '/images/296cce353_generated_f9960c64.jpg';

const services = [
  {
    title: 'Hardscape Installation',
    desc: 'Custom paver patios, walkways, driveways, and retaining walls built for durability, proper drainage, and a clean finished look.',
    size: 'large',
    bg: 'bg-forest',
    text: 'text-white',
    image: HARDSCAPE_IMG,
  },
  {
    title: 'Irrigation & Drainage',
    desc: 'Installation, repair, and troubleshooting of irrigation systems, drip lines, and drainage solutions.',
    size: 'medium',
    bg: 'bg-charcoal',
    text: 'text-white',
  },
  {
    title: 'Landscape Construction',
    desc: 'Sod installation, grading, planting, and full yard transformations.',
    size: 'medium',
    bg: 'bg-stone',
    text: 'text-obsidian',
  },
  {
    title: 'Property Maintenance',
    desc: 'Lawn mowing, edging, trimming, weed control, and seasonal cleanups.',
    size: 'small',
    bg: 'bg-alabaster border-2 border-forest/20',
    text: 'text-charcoal',
  },
  {
    title: 'Licensed · Bonded · Insured',
    desc: 'Fully credentialed contractor you can trust.',
    size: 'small',
    bg: 'bg-obsidian',
    text: 'text-white',
    isCredential: true,
  },
];

export default function ServicesBento() {
  return (
    <section className="bg-alabaster py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-obsidian mb-4">
              Outdoor Spaces Built to Last
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From custom hardscaping to full landscape transformations — we do it right the first time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {/* Large card — 7/12 columns (~58%) */}
          <ScrollReveal delay={0.1} className="md:col-span-7 lg:row-span-2">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-forest/30">
              <img src={services[0].image} alt={services[0].title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-forest/80" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{services[0].title}</h3>
                <p className="text-white/80 text-sm mb-4 max-w-md">{services[0].desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-stone text-sm font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Medium cards — 5/12 columns each */}
          {services.slice(1, 3).map((service, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1} className="md:col-span-5">
              <div className={`${service.bg} ${service.text} rounded-2xl p-7 h-full min-h-[180px] flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-forest/30`}>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                  <p className="opacity-80 text-sm">{service.desc}</p>
                </div>
                <Link to="/services" className={`inline-flex items-center gap-1.5 text-sm font-semibold mt-4 hover:gap-3 transition-all ${service.text === 'text-white' ? 'text-stone' : 'text-forest'}`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}

          {/* Small cards */}
          {services.slice(3).map((service, i) => (
            <ScrollReveal key={i} delay={0.4 + i * 0.1} className="md:col-span-6">
              <div className={`${service.bg} ${service.text} rounded-2xl p-6 h-full min-h-[160px] flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${!service.isCredential ? 'hover:ring-2 hover:ring-forest/30' : ''}`}>
                <div>
                  {service.isCredential && <Shield className="w-6 h-6 text-stone mb-3" />}
                  <h3 className="font-heading font-bold text-lg mb-1.5">{service.title}</h3>
                  <p className="opacity-80 text-sm">{service.desc}</p>
                </div>
                {!service.isCredential && (
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-forest text-sm font-semibold mt-3 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-forest text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-forest/20"
            >
              See All Services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}