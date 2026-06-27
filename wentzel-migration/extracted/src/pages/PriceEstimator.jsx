import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, Minus, Plus } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimateInView from '../components/shared/AnimateInView';
import EstimatorCategory from '../components/estimator/EstimatorCategory';
import EstimateSummary from '../components/estimator/EstimateSummary';

export const CATEGORIES = [
  {
    id: 'irrigation',
    label: 'Irrigation',
    items: [
      { id: 'sprinkler_head', label: 'Sprinkler head replacement', low: 15, high: 35, unit: 'per head', type: 'stepper', min: 1, max: 20, defaultQty: 1 },
      { id: 'valve_repair', label: 'Valve repair/replacement', low: 75, high: 150, unit: 'per valve', type: 'stepper', min: 1, max: 10, defaultQty: 1 },
      { id: 'timer', label: 'Timer/controller replacement', low: 150, high: 400, unit: 'flat', type: 'fixed' },
      { id: 'inspection', label: 'Full system inspection & audit', low: 125, high: 125, unit: 'flat', type: 'fixed' },
      { id: 'new_system', label: 'New system design & install', low: 2500, high: 8000, unit: 'flat', type: 'fixed' },
      { id: 'drip', label: 'Drip system installation', low: 500, high: 2500, unit: 'flat', type: 'fixed' },
      { id: 'leak', label: 'Leak detection & repair', low: 95, high: 300, unit: 'flat', type: 'fixed' },
      { id: 'backflow', label: 'Backflow testing/repair', low: 75, high: 200, unit: 'flat', type: 'fixed' },
    ],
  },
  {
    id: 'drainage',
    label: 'Drainage',
    items: [
      { id: 'french_drain', label: 'French drain installation', low: 1500, high: 5000, unit: 'flat', type: 'fixed' },
      { id: 'surface_drain', label: 'Surface/channel drain', low: 500, high: 2000, unit: 'flat', type: 'fixed' },
      { id: 'downspout', label: 'Downspout drainage', low: 300, high: 800, unit: 'flat', type: 'fixed' },
      { id: 'grading', label: 'Yard grading & leveling', low: 500, high: 3000, unit: 'flat', type: 'fixed' },
      { id: 'erosion', label: 'Erosion control', low: 400, high: 2000, unit: 'flat', type: 'fixed' },
    ],
  },
  {
    id: 'lawn',
    label: 'Lawn Care',
    items: [
      { id: 'aeration', label: 'Aeration', low: 75, high: 200, unit: 'flat', type: 'fixed' },
      { id: 'dethatch', label: 'Dethatching', low: 100, high: 250, unit: 'flat', type: 'fixed' },
      { id: 'overseed', label: 'Overseeding', low: 150, high: 400, unit: 'flat', type: 'fixed' },
      { id: 'sod', label: 'Sod installation', low: 1, high: 2, unit: 'per sq ft', type: 'sqft', min: 500, max: 10000, defaultQty: 1000 },
      { id: 'fertilize', label: 'Fertilization program (per visit)', low: 65, high: 125, unit: 'flat', type: 'fixed' },
      { id: 'weed', label: 'Weed control (per visit)', low: 65, high: 100, unit: 'flat', type: 'fixed' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports Fields & Parks',
    items: [
      { id: 'field_audit', label: 'Field audit', low: 250, high: 500, unit: 'flat', type: 'fixed' },
      { id: 'field_reno', label: 'Field renovation (full)', low: 5000, high: 25000, unit: 'flat', type: 'fixed' },
      { id: 'field_level', label: 'Field leveling', low: 2000, high: 10000, unit: 'flat', type: 'fixed' },
      { id: 'field_mgmt', label: 'Ongoing field management', low: null, high: null, unit: 'custom', type: 'contact' },
    ],
  },
];

export default function PriceEstimator() {
  const navigate = useNavigate();
  // selections: { [itemId]: { checked: bool, qty: number } }
  const [selections, setSelections] = useState({});

  const handleToggle = (item) => {
    setSelections(prev => {
      const existing = prev[item.id];
      if (existing?.checked) {
        const next = { ...prev };
        delete next[item.id];
        return next;
      }
      return { ...prev, [item.id]: { checked: true, qty: item.defaultQty || 1 } };
    });
  };

  const handleQty = (itemId, qty) => {
    setSelections(prev => ({ ...prev, [itemId]: { ...prev[itemId], qty } }));
  };

  const allItems = CATEGORIES.flatMap(c => c.items);

  const selectedItems = allItems
    .filter(item => selections[item.id]?.checked)
    .map(item => {
      const qty = selections[item.id]?.qty || 1;
      if (item.type === 'contact') return { ...item, qty, low: null, high: null };
      const low = item.type === 'fixed' ? item.low : item.low * qty;
      const high = item.type === 'fixed' ? item.high : item.high * qty;
      return { ...item, qty, low, high };
    });

  const totalLow = selectedItems.reduce((s, i) => s + (i.low || 0), 0);
  const totalHigh = selectedItems.reduce((s, i) => s + (i.high || 0), 0);
  const hasContact = selectedItems.some(i => i.type === 'contact');
  const hasSelections = selectedItems.length > 0;

  const fmt = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const handleCTA = () => {
    const services = selectedItems.map(i => i.label).join(', ');
    const range = hasSelections
      ? (hasContact ? `${fmt(totalLow)}+ (some items contact for quote)` : `${fmt(totalLow)}–${fmt(totalHigh)}`)
      : '';
    const params = new URLSearchParams();
    if (services) params.set('services', services);
    if (range) params.set('budget', range);
    navigate(`/get-a-quote?${params.toString()}`);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <PageHeader
        headline="What Will My Project Cost?"
        subtext="Select your services below to build a rough estimate. No signup needed — just pick what you need and see the range."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-8 lg:items-start">

          {/* Left: categories */}
          <div className="space-y-4">
            {CATEGORIES.map((cat, i) => (
              <AnimateInView key={cat.id} delay={i * 0.05}>
                <EstimatorCategory
                  category={cat}
                  selections={selections}
                  onToggle={handleToggle}
                  onQty={handleQty}
                />
              </AnimateInView>
            ))}

            <AnimateInView>
              <button
                onClick={handleCTA}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.01] hover:shadow-lg"
              >
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </AnimateInView>
          </div>

          {/* Right: sticky summary */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <EstimateSummary
                selectedItems={selectedItems}
                totalLow={totalLow}
                totalHigh={totalHigh}
                hasContact={hasContact}
                hasSelections={hasSelections}
                fmt={fmt}
                onCTA={handleCTA}
              />
            </div>
          </div>
        </div>

        {/* Mobile sticky bottom bar */}
        {hasSelections && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-xl z-40">
            <div>
              <p className="text-xs text-gray-500">Your Estimate</p>
              <p className="font-heading font-bold text-[#F57C00] text-lg">
                {fmt(totalLow)}{!hasContact && `–${fmt(totalHigh)}`}{hasContact && '+'}
              </p>
            </div>
            <button
              onClick={handleCTA}
              className="flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-5 py-2.5 rounded-lg font-semibold transition-all"
            >
              Book Free Consult <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}