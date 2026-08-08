import React from 'react';
import { Check } from 'lucide-react';

const steps = ['Service', 'Details', 'Your Info', 'Review'];

export default function QuoteProgress({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              i < currentStep
                ? 'bg-[#2E7D32] text-white'
                : i === currentStep
                  ? 'bg-[#2E7D32] text-white ring-4 ring-[#2E7D32]/20'
                  : 'bg-gray-200 text-gray-400'
            }`}>
              {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-sm font-medium hidden sm:block ${
              i <= currentStep ? 'text-[#1A1A1A]' : 'text-gray-400'
            }`}>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-8 sm:w-16 h-0.5 ${i < currentStep ? 'bg-[#2E7D32]' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}