import React, { useState } from 'react';

const SERVICES = ['Hardscape', 'Irrigation', 'Drainage', 'Landscape Construction', 'Property Maintenance'];

export default function BookingForm({ selectedDate, selectedTime }) {
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', service: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dateStr = selectedDate
      ? `${monthNames[selectedDate.month]} ${selectedDate.day}, ${selectedDate.year}`
      : '';
    const body = new URLSearchParams({
      'form-name': 'booking',
      full_name: form.full_name,
      phone: form.phone,
      email: form.email,
      service: form.service || 'Not Sure',
      notes: `Consultation booking for ${dateStr} at ${selectedTime || 'TBD'}. Notes: ${form.notes}`,
    }).toString();
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-extrabold text-xl text-obsidian mb-2">You're all set!</h3>
        <p className="text-muted-foreground">Thanks! We will confirm your consultation within 24 hours.</p>
      </div>
    );
  }

  return (
    <>
      <form name="booking" netlify="true" hidden>
        <input type="text" name="full_name" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <input type="text" name="service" />
        <textarea name="notes" />
      </form>

      <form onSubmit={handleSubmit} className="space-y-4">
        {selectedDate && selectedTime && (
          <div className="bg-forest/8 border border-forest/20 rounded-xl px-4 py-3 text-sm text-forest font-semibold">
            {monthNames[selectedDate.month]} {selectedDate.day}, {selectedDate.year} at {selectedTime}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Full Name *</label>
            <input
              required
              type="text"
              value={form.full_name}
              onChange={e => setForm({ ...form, full_name: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-white"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Phone Number *</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-white"
              placeholder="(805) 555-0100"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-white"
            placeholder="john@email.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Service Needed</label>
          <select
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Notes</label>
          <textarea
            value={form.notes}
            onChange={e => setForm({ ...form, notes: e.target.value })}
            rows={3}
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-white resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={loading || !selectedDate || !selectedTime}
          className="w-full bg-forest text-white font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-forest/20"
        >
          {loading ? 'Submitting...' : 'Confirm Booking'}
        </button>
        {(!selectedDate || !selectedTime) && (
          <p className="text-xs text-center text-muted-foreground">Please select a date and time above to continue.</p>
        )}
      </form>
    </>
  );
}
