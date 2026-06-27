import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ClosingCTA() {
  return (
    <section className="bg-ray-red py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Need a Plumber Right Now?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-inter text-base sm:text-lg text-white/90 mt-4 max-w-xl mx-auto">
            Ray Espinoza Plumbing is available 24/7 for residential and commercial plumbing across San Luis Obispo County.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-white text-ray-red font-dm font-semibold px-8 py-4 rounded-md hover:scale-103 active:scale-97 transition-transform duration-200 w-full sm:w-auto text-center"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+18058352196"
              className="border-2 border-ray-black text-ray-black font-dm font-semibold px-8 py-4 rounded-md hover:bg-ray-black hover:text-white transition-all duration-200 w-full sm:w-auto text-center"
            >
              Call Now
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="tel:+18058352196"
            className="inline-flex items-center gap-3 font-barlow font-bold text-2xl sm:text-3xl text-white mt-8 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-7 h-7" />
            (805) 835-2196
          </a>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-inter text-sm text-white/60 mt-4">
            Licensed · Honest · Clean · Available 24/7
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}