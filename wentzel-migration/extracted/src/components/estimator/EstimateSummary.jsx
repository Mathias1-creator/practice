import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

export default function EstimateSummary({ selectedItems, totalLow, totalHigh, hasContact, hasSelections, fmt, onCTA }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-5">
        <Calculator className="w-5 h-5 text-[#2E7D32]" />
        <h3 className="font-heading font-bold text-[#1A1A1A]">Your Estimate</h3>
      </div>

      {!hasSelections ? (
        <p className="text-gray-400 text-sm">Select services on the left to see your estimate.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-5">
            {selectedItems.map(item => (
              <li key={item.id} className="flex justify-between items-start gap-2 text-sm">
                <span className="text-gray-600 leading-tight">{item.label}</span>
                <span className="font-semibold text-[#1A1A1A] whitespace-nowrap">
                  {item.type === 'contact'
                    ? 'Custom'
                    : `${fmt(item.low)}${item.low !== item.high ? `–${fmt(item.high)}` : ''}`}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-100 pt-4 mb-2">
            <p className="text-xs text-gray-400 mb-1">Estimated Total Range</p>
            <p className="text-2xl font-heading font-bold text-[#F57C00]">
              {fmt(totalLow)}
              {!hasContact && `–${fmt(totalHigh)}`}
              {hasContact && '+'}
            </p>
            {hasContact && (
              <p className="text-xs text-gray-400 mt-1">Some services require a custom quote.</p>
            )}
          </div>
        </>
      )}

      <p className="text-xs text-gray-400 leading-relaxed mt-4 mb-5">
        These are rough estimates only. Final pricing depends on site conditions, property size, and project scope.
        Andrew will provide an exact quote after your free on-site consultation — always free, always no pressure.
      </p>

      <button
        onClick={onCTA}
        className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] hover:shadow-md"
      >
        Book Free Consultation <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}