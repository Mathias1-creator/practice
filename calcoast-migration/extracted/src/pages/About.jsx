import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionTag from '../components/shared/SectionTag';
import { Award, Shield, MessageCircle } from 'lucide-react';

const HERO_BG = '/images/e376c7bb9_generated_image.jpg';
const PROJECT_IMG = '/images/4c6b5b03f_generated_411d9bf6.jpg';

const VALUES = [
  { icon: Award, title: 'Quality First', desc: 'Long-term durability and proper installation on every project. Done right the first time, every time.' },
  { icon: Shield, title: 'Licensed · Bonded · Insured', desc: 'Fully credentialed. You are protected on every Cal Coast project.' },
  { icon: MessageCircle, title: 'Clear Communication', desc: 'From estimate to final walkthrough, no surprises, no runaround. Just honest work.' },
];

const CITIES = [
  'San Miguel', 'Paso Robles', 'Templeton', 'Atascadero', 'Santa Margarita',
  'San Luis Obispo', 'Pismo Beach', 'Grover Beach', 'Morro Bay', 'Los Osos', 'Shandon',
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Contractor at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Built on Quality. Rooted in the Central Coast.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Licensed, bonded, and insured, serving our community with pride.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionTag>About Us</SectionTag>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian mb-6">
                  About Cal Coast Hardscape & Irrigation
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Cal Coast Hardscape & Irrigation was founded by Alejandro Rios, a licensed, bonded, and insured contractor with years of hands-on experience in residential and commercial hardscaping and landscaping across the Central Coast. Alex built Cal Coast on a simple belief: do the job right the first time, communicate clearly, and treat every property like your own. From custom paver installations to full landscape transformations, Cal Coast brings the same dedication to quality and detail to every project, no matter the size. We are proud to serve the communities of San Miguel, Paso Robles, Templeton, Atascadero, San Luis Obispo, Pismo Beach, Grover Beach, Morro Bay, Los Osos, Shandon, and Santa Margarita.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={PROJECT_IMG} alt="Cal Coast project" className="w-full h-80 lg:h-96 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian text-center mb-14">
              What Sets Us Apart
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-forest/10 mb-5">
                    <value.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-obsidian mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionTag>Service Area</SectionTag>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-obsidian mb-10">
              Proudly Serving the Central Coast
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CITIES.map((city, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <span className="inline-block bg-alabaster border border-border text-foreground font-medium text-sm px-5 py-2.5 rounded-full hover:bg-forest hover:text-white hover:border-forest transition-all duration-200 cursor-default">
                  {city}
                </span>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground text-sm">
              Don't see your city? Give us a call — we may still be able to help.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}