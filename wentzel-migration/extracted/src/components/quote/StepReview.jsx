import React from 'react';
import { Check } from 'lucide-react';

export default function StepReview({ service, details, info }) {
  const detailItems = Object.entries(details).filter(([, v]) => v && (Array.isArray(v) ? v.length > 0 : true));

  return (
    <div>
      <h2 className="text-xl font-heading font-bold text-[#1A1A1A] mb-2">Review Your Request</h2>
      <p className="text-gray-500 text-sm mb-6">Please confirm everything looks correct.</p>

      <div className="space-y-6">
        {/* Service */}
        <div className="bg-[#F5F5F5] rounded-xl p-5">
          <p className="text-xs text-gray-400 font-medium mb-1">Service</p>
          <p className="font-heading font-bold text-[#1A1A1A]">{service}</p>
        </div>

        {/* Details */}
        {detailItems.length > 0 && (
          <div className="bg-[#F5F5F5] rounded-xl p-5">
            <p className="text-xs text-gray-400 font-medium mb-3">Details</p>
            <div className="space-y-2">
              {detailItems.map(([key, value]) => (
                <div key={key} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span>{' '}
                    {Array.isArray(value) ? value.join(', ') : value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="bg-[#F5F5F5] rounded-xl p-5">
          <p className="text-xs text-gray-400 font-medium mb-3">Your Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {info.full_name && <p className="text-sm text-gray-600"><span className="font-medium">Name:</span> {info.full_name}</p>}
            {info.phone && <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> {info.phone}</p>}
            {info.email && <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {info.email}</p>}
            {info.address && <p className="text-sm text-gray-600"><span className="font-medium">Address:</span> {info.address}</p>}
          </div>
          {info.notes && (
            <p className="text-sm text-gray-600 mt-3"><span className="font-medium">Notes:</span> {info.notes}</p>
          )}
        </div>
      </div>
    </div>
  );
}