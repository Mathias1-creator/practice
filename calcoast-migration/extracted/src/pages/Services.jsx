import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionTag from '../components/shared/SectionTag';
import { ArrowRight, Phone, Droplets, Trees, Scissors, Shield } from 'lucide-react';

const HERO_BG = '/images/296cce353_generated_f9960c64.jpg';
const IRRIGATION_IMG = '/images/b98c21ea3_generated_450aa6cf.jpg';
const LANDSCAPE_IMG = '/images/1b8c6b7d1_generated_ca6d948a.jpg';
const MAINTENANCE_IMG = '/images/dedc04162_generated_1dcc9cb6.jpg';

const BENTO_ITEMS = [
  { icon: '🧱', title: 'Hardscape Installation', desc: 'Pavers, walkways, driveways & retaining walls', color: 'bg-forest text-white' },
  { icon: '💧', title: 'Irrigation & Drainage', desc: 'Systems, drip lines & drainage solutions', color: 'bg-charcoal text-white' },
  { icon: '🌿', title: 'Landscape Construction', desc: 'Sod, grading, planting & transformations', color: 'bg-stone text-obsidian' },
  { icon: '✂️', title: 'Property Maintenance', desc: 'Mowing, edging, trimming & cleanups', color: 'bg-alabaster text-charcoal border-2 border-forest/20' },
];

const SERVICE_DETAILS = [
  {
    title: 'Hardscape Installation',
    image: HERO_BG,
    bg: 'bg-white',
    body: "Cal Coast Hardscape & Irrigation builds custom paver patios, walkways, driveways, and retaining walls that are designed to last. Every hardscape project starts with proper site preparation, grading, and drainage planning, because a beautiful patio that doesn't drain properly isn't beautiful for long. We use premium materials and proven installation techniques to deliver a finished product that holds up to the Central Coast climate and looks great for years to come. Whether you want a simple walkway or a complete outdoor living space, we bring the same attention to detail to every project.",
  },
  {
    title: 'Irrigation & Drainage',
    image: IRRIGATION_IMG,
    bg: 'bg-alabaster',
    body: "A healthy landscape starts with smart water management. Cal Coast Hardscape & Irrigation installs, repairs, and troubleshoots irrigation systems, drip lines, and drainage solutions for residential and commercial properties across the Central Coast. Whether you need a new system designed from scratch, an existing system repaired, or a drainage problem solved before it damages your property, we have the experience to get it right. We design systems for efficiency, saving you water and money while keeping your landscape healthy.",
    reverse: true,
  },
  {
    title: 'Landscape Construction',
    image: LANDSCAPE_IMG,
    bg: 'bg-white',
    body: "From bare dirt to beautiful, Cal Coast Hardscape & Irrigation handles full landscape construction projects including sod installation, grading, planting, and complete yard transformations. We design and build outdoor spaces that are not only visually impressive but built for long-term performance. Every project is approached with durability and curb appeal in mind. If you can picture it, we can build it.",
  },
  {
    title: 'Property Maintenance',
    image: MAINTENANCE_IMG,
    bg: 'bg-alabaster',
    body: "Your landscape is an investment — protect it with regular professional maintenance. Cal Coast Hardscape & Irrigation offers lawn mowing, edging, trimming, weed control, and seasonal cleanups to keep your property looking its best year-round. We serve both residential and commercial properties throughout the Central Coast with reliable, consistent service you can count on.",
    reverse: true,
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Hardscape services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/50 text-sm mb-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &gt; Services
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Custom hardscaping, irrigation, landscape construction, and property maintenance across the Central Coast.
          </p>
        </div>
      </section>

      {/* Bento Overview */}
      <section className="bg-alabaster py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENTO_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`${item.color} rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-forest/30 transition-all duration-300`}>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                  <p className="opacity-80 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {SERVICE_DETAILS.map((service, i) => (
        <section key={i} className={`${service.bg} py-16 lg:py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <ScrollReveal className={service.reverse ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={service.image} alt={service.title} className="w-full h-72 lg:h-96 object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15} className={service.reverse ? 'lg:order-1' : ''}>
                <div>
                  <SectionTag>Services</SectionTag>
                  <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian mb-5">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.body}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-forest text-white font-bold px-7 py-3.5 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 shadow-lg shadow-forest/20"
                  >
                    Book an Appointment <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">
              Ready to get started? Let's talk about your project.
            </h2>
            <a href="tel:+18058066476" className="text-stone text-2xl font-bold block mb-6 hover:text-white transition-colors">(805) 806-6476</a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest font-bold px-8 py-4 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}