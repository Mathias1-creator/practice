import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ClosingCTA() {
  return (
    <section className="bg-forest py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Licensed, bonded, and insured. Serving the Central Coast from San Miguel to Pismo Beach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-forest font-bold text-base px-8 py-4 rounded-full hover:bg-stone transition-colors duration-200 shadow-xl"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+18058066476"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 hover:scale-103 active:scale-97 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Call (805) 806-6476
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}