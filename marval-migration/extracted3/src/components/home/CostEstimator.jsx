import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const priceData = {
  'Landscaping': {
    Residential: {
      Small:  { range: '$2,000–$5,000',   note: 'Front or back yard refresh, sod, basic planting' },
      Medium: { range: '$5,000–$12,000',  note: 'Full yard design & install, grading, turf' },
      Large:  { range: '$12,000+',        note: 'Complete property transformation, drainage included' },
    },
    Commercial: {
      Small:  { range: '$4,000–$8,000',   note: 'Curb appeal planting, small commercial lot' },
      Medium: { range: '$8,000–$20,000',  note: 'Mid-size commercial property, irrigation included' },
      Large:  { range: '$20,000+',        note: 'Large commercial or public works project' },
    },
  },
  'Hardscape': {
    Residential: {
      Small:  { range: '$3,000–$6,000',   note: 'Small patio or walkway, up to ~200 sq ft' },
      Medium: { range: '$6,000–$15,000',  note: 'Patio, driveway, or retaining wall' },
      Large:  { range: '$15,000+',        note: 'Full outdoor living space, driveway + walls' },
    },
    Commercial: {
      Small:  { range: '$5,000–$10,000',  note: 'Entry walkways, small plaza area' },
      Medium: { range: '$10,000–$25,000', note: 'Parking lot borders, large paved areas' },
      Large:  { range: '$25,000+',        note: 'Full commercial hardscape scope' },
    },
  },
  'Irrigation': {
    Residential: {
      Small:  { range: '$1,500–$3,000',   note: 'Up to 3 zones, drip or spray, small yard' },
      Medium: { range: '$3,000–$6,000',   note: '4–8 zones, full residential system' },
      Large:  { range: '$6,000+',         note: '8+ zones, smart controller, large property' },
    },
    Commercial: {
      Small:  { range: '$3,000–$6,000',   note: 'Small commercial lot, basic zoning' },
      Medium: { range: '$6,000–$15,000',  note: 'Mid-size property, multiple zone design' },
      Large:  { range: '$15,000+',        note: 'Large commercial, ag, or public works system' },
    },
  },
  'Planting & Tree Services': {
    Residential: {
      Small:  { range: '$500–$1,500',     note: 'Tree trimming (1–3 trees) or small planting' },
      Medium: { range: '$1,500–$4,000',   note: 'Multiple trees, shrubs, drought-tolerant design' },
      Large:  { range: '$4,000+',         note: 'Large tree removal, full planting installation' },
    },
    Commercial: {
      Small:  { range: '$1,000–$3,000',   note: 'Parking lot trees, entry plantings' },
      Medium: { range: '$3,000–$8,000',   note: 'Large tree trimming/removal, commercial planting' },
      Large:  { range: '$8,000+',         note: 'Full commercial planting scope or large removal' },
    },
  },
};

export default function CostEstimator() {
  const { ref, controls } = useScrollAnimation();
  const [service, setService] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [size, setSize] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);

  useEffect(() => {
    if (service && propertyType && size) {
      setShowEstimate(false);
      const timer = setTimeout(() => {
        const result = priceData[service]?.[propertyType]?.[size] || null;
        setEstimate(result);
        setShowEstimate(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowEstimate(false);
    }
  }, [service, propertyType, size]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-cream py-24 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">Estimate Your Project</h2>
          <p className="text-stone text-lg">Get a ballpark range for your project in seconds.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-forest" />
            </div>
            <div>
              <p className="font-semibold text-charcoal">Project Calculator</p>
              <p className="text-sm text-charcoal/50">Answer 3 quick questions for a range</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">1. Service Type</label>
              <Select onValueChange={(v) => { setService(v); setSize(''); }} value={service}>
                <SelectTrigger className="h-12 rounded-xl border-stone/30 bg-cream">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(priceData).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">2. Property Type</label>
              <div className="grid grid-cols-2 gap-3">
                {['Residential', 'Commercial'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPropertyType(type)}
                    className={`h-12 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                      propertyType === type
                        ? 'border-forest bg-forest/10 text-forest'
                        : 'border-stone/30 bg-cream text-charcoal/70 hover:border-stone'
                    }`}
                  >
                    {type === 'Residential' ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">3. Project Size</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'Small', label: 'Small', sub: 'Basic scope' },
                  { value: 'Medium', label: 'Medium', sub: 'Standard scope' },
                  { value: 'Large', label: 'Large', sub: 'Full scope' },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSize(s.value)}
                    className={`py-3 px-2 rounded-xl border-2 font-medium text-sm flex flex-col items-center gap-0.5 transition-all ${
                      size === s.value
                        ? 'border-forest bg-forest/10 text-forest'
                        : 'border-stone/30 bg-cream text-charcoal/70 hover:border-stone'
                    }`}
                  >
                    <span>{s.label}</span>
                    <span className="text-xs font-normal opacity-60">{s.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {showEstimate && estimate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-forest/5 rounded-2xl p-6 mb-6 border border-forest/10"
            >
              <p className="text-sm text-charcoal/60 mb-1 text-center">Estimated Range</p>
              <p className="text-3xl md:text-4xl font-playfair font-bold text-forest text-center mb-3">{estimate.range}</p>
              <p className="text-sm text-charcoal/60 text-center italic">{estimate.note}</p>
            </motion.div>
          )}

          <p className="text-xs text-charcoal/40 text-center mb-6">
            Estimates are ranges only. Contact us for a free on-site quote.
          </p>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-forest/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/25"
            >
              GET A FREE ESTIMATE
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}