import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-500">
          Free estimates. Honest recommendations. No pressure.
        </p>
      </div>

      <div className="space-y-5">
        <a href="tel:+18056744333" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2E7D32] transition-colors">
            <Phone className="w-5 h-5 text-[#2E7D32] group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Phone</p>
            <p className="text-[#1A1A1A] font-semibold">(805) 674-4333</p>
          </div>
        </a>

        <a href="mailto:atwentzel@yahoo.com" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-[#1565C0]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1565C0] transition-colors">
            <Mail className="w-5 h-5 text-[#1565C0] group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Email</p>
            <p className="text-[#1A1A1A] font-semibold">atwentzel@yahoo.com</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F57C00]/10 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#F57C00]" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Address</p>
            <p className="text-[#1A1A1A] font-semibold">5620 Bajada Avenue<br />Atascadero, CA 93422</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Hours</p>
            <p className="text-[#1A1A1A] font-semibold">Monday to Friday, 8AM to 5PM</p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div className="bg-[#F5F5F5] rounded-xl p-5 flex items-center gap-3">
        <Shield className="w-5 h-5 text-[#2E7D32] shrink-0" />
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-[#1A1A1A]">CSLB #1103954</span>. Licensed, Bonded & Insured.
        </p>
      </div>
    </div>
  );
}