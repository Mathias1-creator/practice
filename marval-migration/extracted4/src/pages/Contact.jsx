import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import FooterCTA from '../components/layout/FooterCTA';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const contactDetails = [
  { icon: Phone, label: '(805) 602-2230', href: 'tel:8056022230' },
  { icon: Mail, label: 'marval.landsmain@gmail.com', href: 'mailto:marval.landsmain@gmail.com' },
  { icon: MapPin, label: '1303 E. Grand Avenue Suite 115D, Arroyo Grande, CA 93420' },
  { icon: Clock, label: 'Monday–Friday 8:00 AM – 3:30 PM' },
];

const trustPoints = [
  'Free on-site estimates — no obligation',
  'No hidden fees',
  'Licensed and insured — Lic# 1087803 C-27',
  'Martin answers every call personally',
  'Response within 24 hours',
];

const services = [
  'Landscaping', 'Hardscape', 'Irrigation', 'Planting & Tree Services', 'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      <PageHero
        title="Get Your Free Quote"
        subtitle="Free estimates. No obligation. Just honest answers."

      />

      <section className="bg-cream py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Let's Build Something Great
            </h2>
            <div className="w-16 h-1 bg-stone rounded-full mb-8" />
            <p className="text-charcoal/70 text-lg mb-10 leading-relaxed">
              Whether you need a full landscape design, a hardscape installation, or a simple irrigation repair — we are ready to help. Martin answers every call personally.
            </p>

            <div className="space-y-5 mb-10">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                const Tag = item.href ? 'a' : 'div';
                return (
                  <Tag
                    key={i}
                    href={item.href}
                    className={`flex items-start gap-4 ${item.href ? 'hover:text-forest transition-colors' : ''}`}
                  >
                    <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <span className="text-charcoal/80 pt-2">{item.label}</span>
                  </Tag>
                );
              })}
            </div>

            <div className="space-y-3">
              {trustPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-forest shrink-0" />
                  <span className="text-charcoal/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tally Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone/20"
          >
            <iframe
              data-tally-src="https://tally.so/embed/1ADA1M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Get your free quote"
              onLoad={() => {
                if (typeof window !== 'undefined' && !document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
                  const s = document.createElement('script');
                  s.src = 'https://tally.so/widgets/embed.js';
                  document.head.appendChild(s);
                }
              }}
              style={{ padding: '24px' }}
            />
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}