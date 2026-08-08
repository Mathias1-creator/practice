import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import FooterCTA from '../components/layout/FooterCTA';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const trustPoints = [
  'Free on-site estimates — no obligation',
  'No hidden fees',
  'Licensed and insured — Lic# 1087803 C-27',
  'Martin answers every call personally',
  'Response within 24 hours',
];

const services = [
  'Landscaping', 'Hardscape', 'Irrigation', 'Lighting',
  'Planting & Tree Services', 'Property Maintenance', 'Other',
];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Get Your Free Quote"
        subtitle="Tell us about your project — we'll get back to you within 24 hours."
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
              Whether it's a full outdoor transformation or a focused project, Marval Landscaping Services is ready to help. Fill out the form and we'll reach out to schedule your free on-site estimate.
            </p>
            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-forest shrink-0" />
                  <span className="text-charcoal/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone/20"
          >
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">Thank You!</h3>
                <p className="text-charcoal/60">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  required
                  className="h-12 rounded-xl bg-cream/50 border-stone/20 focus:border-forest"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  required
                  className="h-12 rounded-xl bg-cream/50 border-stone/20 focus:border-forest"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  required
                  className="h-12 rounded-xl bg-cream/50 border-stone/20 focus:border-forest"
                />
                <Select>
                  <SelectTrigger className="h-12 rounded-xl bg-cream/50 border-stone/20">
                    <SelectValue placeholder="Service Needed" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="rounded-xl bg-cream/50 border-stone/20 focus:border-forest resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-forest text-white py-4 rounded-full font-semibold text-lg hover:bg-forest/90 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-forest/25"
                >
                  SEND MY REQUEST
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}