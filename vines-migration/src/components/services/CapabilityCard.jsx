import React from 'react';
import { Minus } from 'lucide-react';

export default function CapabilityCard({ title, desc }) {
  return (
    <div
      className="bg-white rounded-[8px] p-6 flex flex-col gap-3 h-full"
      style={{ border: '1px solid #d9d0bf' }}
    >
      <span className="block w-[18px] h-[1px] mt-1" style={{ backgroundColor: '#9a7b43' }} />
      <h4 className="font-heading font-medium text-heading text-[18px] md:text-[19px] leading-tight">
        {title}
      </h4>
      <p className="font-body text-[14px] leading-relaxed" style={{ color: '#6f6a5d' }}>
        {desc}
      </p>
    </div>
  );
}