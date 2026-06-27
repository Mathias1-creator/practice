import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle, Phone } from 'lucide-react';

const serviceOptions = [
  'Irrigation Repair',
  'Irrigation Installation',
  'Drainage Solution',
  'Lawn Care / Maintenance',
  'Sports Field Services',
  'General Consultation',
  'Not Sure',
];

const timeOptions = [
  'Morning (8AM–11AM)',
  'Midday (11AM–2PM)',
  'Afternoon (2PM–5PM)',
  'Anytime',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: '', phone: '', email: '', address: '',
    service_needed: '', description: '', best_time: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const body = new URLSearchParams({ 'form-name': 'contact', ...form }).toString();
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#2E7D32]" />
        </div>
        <h3 className="font-heading font-bold text-xl text-[#1A1A1A] mb-2">Thank You!</h3>
        <p className="text-gray-500 mb-4">
          Andrew will follow up within 1 business day.
        </p>
        <a
          href="tel:+18056744333"
          className="inline-flex items-center gap-2 text-[#F57C00] font-semibold"
        >
          <Phone className="w-4 h-4" />
          For faster response call (805) 674-4333
        </a>
      </div>
    );
  }

  return (
    <>
      <form name="contact" netlify="true" hidden>
        <input type="text" name="full_name" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <input type="text" name="address" />
        <input type="text" name="service_needed" />
        <textarea name="description" />
        <input type="text" name="best_time" />
      </form>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg space-y-5">
        <h3 className="font-heading font-bold text-xl text-[#1A1A1A]">Request a Quote</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</Label>
            <Input required value={form.full_name} onChange={e => handleChange('full_name', e.target.value)} placeholder="Your name" />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">Phone *</Label>
            <Input required type="tel" value={form.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">Email *</Label>
            <Input required type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="you@email.com" />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">Service Address / City *</Label>
            <Input required value={form.address} onChange={e => handleChange('address', e.target.value)} placeholder="Atascadero, CA" />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">Service Needed *</Label>
          <Select required onValueChange={v => handleChange('service_needed', v)}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {serviceOptions.map(opt => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">Describe the Issue *</Label>
          <Textarea
            required
            value={form.description}
            onChange={e => handleChange('description', e.target.value)}
            placeholder="Tell us about your irrigation, drainage, lawn, or field issue."
            className="min-h-[120px]"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">Best Time to Reach You</Label>
          <Select onValueChange={v => handleChange('best_time', v)}>
            <SelectTrigger><SelectValue placeholder="Select preferred time" /></SelectTrigger>
            <SelectContent>
              {timeOptions.map(opt => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          {submitting ? 'Sending...' : 'Send My Request'}
        </button>
      </form>
    </>
  );
}
