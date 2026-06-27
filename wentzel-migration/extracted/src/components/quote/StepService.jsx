import React from 'react';
import { Droplets, CloudRain, Leaf, Trophy, Layers } from 'lucide-react';

const serviceOptions = [
  { value: 'Irrigation', icon: Droplets, description: 'Sprinkler systems, repair, installation' },
  { value: 'Drainage', icon: CloudRain, description: 'French drains, grading, erosion control' },
  { value: 'Lawn Care', icon: Leaf, description: 'Mowing, aeration, fertilizing, sod' },
  { value: 'Sports Field Services', icon: Trophy, description: 'Field audits, renovation, leveling' },
  { value: 'Multiple Services', icon: Layers, description: 'Need help with more than one area' },
];

export default function StepService({ selected, onSelect }) {
  return (
    <div>
      <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Select Your Service</h2>
      <p className="text-gray-500 text-sm mb-6">What do you need help with?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-md ${
              selected === opt.value
                ? 'border-[#2E7D32] bg-[#2E7D32]/5 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
              selected === opt.value ? 'bg-[#2E7D32]' : 'bg-gray-100'
            }`}>
              <opt.icon className={`w-5 h-5 ${selected === opt.value ? 'text-white' : 'text-gray-500'}`} />
            </div>
            <p className="font-heading font-bold text-[#1A1A1A]">{opt.value}</p>
            <p className="text-xs text-gray-400 mt-1">{opt.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}