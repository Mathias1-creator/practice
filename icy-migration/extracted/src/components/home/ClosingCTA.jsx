import React from 'react';
import { Link } from 'react-router-dom';

export default function ClosingCTA() {
  return (
    <section className="bg-alpine-green py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
          Have a Job in Mind? Give Us a Call.
        </h2>
        <p className="font-inter text-base text-white/80 mb-10 max-w-xl mx-auto">
          Licensed, bonded, and insured landscaping and construction serving La Habra Heights and Southern California. Free estimates. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <Link
            to="/contact"
            className="bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:+16265595946"
            className="border-2 border-white text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
          >
            Call (626) 559-5946
          </a>
        </div>
        <p className="font-inter text-xs text-white/50">
          Free estimates · Licensed · Bonded · Insured · Quality Over Quantity
        </p>
      </div>
    </section>
  );
}