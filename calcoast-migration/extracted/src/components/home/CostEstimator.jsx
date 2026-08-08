import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import SectionTag from '../shared/SectionTag';

const PROJECT_TYPES = [
  'Paver Patio', 'Driveway', 'Retaining Wall', 'Irrigation System', 'Landscape Construction', 'Property Maintenance'
];

const SIZES = ['Small (under 200 sq ft)', 'Medium (200–500 sq ft)', 'Large (500+ sq ft)'];
const PROPERTY_TYPES = ['Residential', 'Commercial'];

const PRICES = {
  'Paver Patio': { Small: '$3,000–$6,000', Medium: '$6,000–$12,000', Large: '$12,000+' },
  'Driveway': { Small: '$4,000–$8,000', Medium: '$8,000–$15,000', Large: '$15,000+' },
  'Retaining Wall': { Small: '$2,500–$5,000', Medium: '$5,000–$10,000', Large: '$10,000+' },
  'Irrigation System': { Small: '$1,500–$3,000', Medium: '$3,000–$6,000', Large: '$6,000+' },
  'Landscape Construction': { Small: '$2,000–$5,000', Medium: '$5,000–$10,000', Large: '$10,000+' },
  'Property Maintenance': { Small: 'Starting at $150/month', Medium: 'Starting at $150/month', Large: 'Starting at $150/month' },
};

export default function CostEstimator() {
  const [projectType, setProjectType] = useState('');
  const [size, setSize] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const sizeKey = size.split(' ')[0];
  const estimate = projectType && sizeKey ? PRICES[projectType]?.[sizeKey] : null;

  return (
    <section className="bg-forest py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionTag light>Estimate Your Project</SectionTag>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Get a Rough Idea of Your Project Cost
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Select your project type and size for a general estimate range. Final pricing requires an on-site consultation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
            {/* Step 1: Project Type */}
            <div className="mb-8">
              <p className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">1. Project Type</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      projectType === type
                        ? 'bg-white text-forest shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="mb-8">
              <p className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">2. Approximate Size</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      size === s
                        ? 'bg-white text-forest shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Property Type */}
            <div className="mb-8">
              <p className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">3. Property Type</p>
              <div className="grid grid-cols-2 gap-2">
                {PROPERTY_TYPES.map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setPropertyType(pt)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      propertyType === pt
                        ? 'bg-white text-forest shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  className="bg-white rounded-2xl p-6 md:p-8 text-center"
                >
                  <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">Estimated Range</p>
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-forest mb-3">{estimate}</p>
                  <p className="text-xs text-muted-foreground mb-6">
                    These are rough estimates only. Contact us for an accurate free quote.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-forest text-white font-bold px-8 py-3.5 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200"
                  >
                    Get Your Free Quote
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}