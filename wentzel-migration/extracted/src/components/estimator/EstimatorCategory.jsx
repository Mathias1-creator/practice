import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

function Stepper({ value, min, max, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors"
      >
        <Minus className="w-3 h-3" />
      </button>
      <span className="w-8 text-center font-semibold text-sm">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors"
      >
        <Plus className="w-3 h-3" />
      </button>
      <span className="text-xs text-gray-400">{value === 1 ? 'unit' : 'units'}</span>
    </div>
  );
}

function SqftSlider({ value, min, max, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="flex-1 accent-[#2E7D32]"
      />
      <span className="text-xs font-semibold text-[#2E7D32] whitespace-nowrap w-24 text-right">
        {value.toLocaleString()} sq ft
      </span>
    </div>
  );
}

function ItemRow({ item, selection, onToggle, onQty }) {
  const checked = selection?.checked || false;
  const qty = selection?.qty || item.defaultQty || 1;

  const rangeText = () => {
    if (item.type === 'contact') return 'Contact for quote';
    if (item.type === 'fixed') {
      return item.low === item.high
        ? `$${item.low.toLocaleString()}`
        : `$${item.low.toLocaleString()}–$${item.high.toLocaleString()}`;
    }
    const low = Math.round(item.low * qty);
    const high = Math.round(item.high * qty);
    return `$${low.toLocaleString()}–$${high.toLocaleString()}`;
  };

  return (
    <div className={`rounded-xl border-2 transition-all p-4 ${checked ? 'border-[#2E7D32] bg-[#2E7D32]/5' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(item)}
          className={`mt-0.5 w-5 h-5 rounded border-2 flex-none flex items-center justify-center transition-all ${
            checked ? 'bg-[#2E7D32] border-[#2E7D32]' : 'border-gray-300 hover:border-[#2E7D32]'
          }`}
        >
          {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p className={`font-medium text-sm ${checked ? 'text-[#1A1A1A]' : 'text-gray-700'}`}>{item.label}</p>
            <span className={`text-sm font-semibold whitespace-nowrap ${checked ? 'text-[#2E7D32]' : 'text-gray-500'}`}>
              {rangeText()}
            </span>
          </div>
          {checked && item.type === 'stepper' && (
            <div className="mt-3">
              <Stepper value={qty} min={item.min} max={item.max} onChange={(v) => onQty(item.id, v)} />
            </div>
          )}
          {checked && item.type === 'sqft' && (
            <div className="mt-3">
              <SqftSlider value={qty} min={item.min} max={item.max} onChange={(v) => onQty(item.id, v)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EstimatorCategory({ category, selections, onToggle, onQty }) {
  const [open, setOpen] = useState(true);
  const checkedCount = category.items.filter(i => selections[i.id]?.checked).length;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-heading font-bold text-[#1A1A1A] text-lg">{category.label}</h3>
          {checkedCount > 0 && (
            <span className="bg-[#2E7D32] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {checkedCount} selected
            </span>
          )}
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && (
        <div className="px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.items.map(item => (
            <ItemRow
              key={item.id}
              item={item}
              selection={selections[item.id]}
              onToggle={onToggle}
              onQty={onQty}
            />
          ))}
        </div>
      )}
    </div>
  );
}