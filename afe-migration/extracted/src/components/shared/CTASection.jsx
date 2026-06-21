import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTASection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#111111' }} className="py-24 border-y border-[#2a2a2a]">
      <div className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-grotesk text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="font-dm text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
          Licensed landscape contractor serving Santa Barbara and San Luis Obispo County. Free estimates. Warranties. Se Habla Español.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-[#c8f500] text-black font-grotesk font-bold text-base px-8 py-6 uppercase tracking-wider rounded-none hover:bg-[#c8f500]/90 hover:scale-105 transition-all duration-200">
              Request a Free Quote
            </Button>
          </Link>
          <a href="tel:+18056214093">
            <Button className="border-2 border-[#c8f500] text-[#c8f500] font-grotesk font-bold text-base px-8 py-6 uppercase tracking-wider rounded-none bg-transparent hover:bg-[#c8f500]/10 hover:scale-105 transition-all duration-200">
              Call (805) 621-4093
            </Button>
          </a>
        </div>
        <p className="font-dm text-[#888888] text-sm mt-6">
          Free estimates · No obligation · Licensed · Insured · Se Habla Español
        </p>
      </div>
    </section>
  );
}