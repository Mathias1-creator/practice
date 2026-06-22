import React, { useState } from 'react';
import RevealWrapper from '../shared/RevealWrapper';

const SERVICES = [
  'Land Management',
  'Wildfire & Fuel Reduction',
  'Poison Oak Removal',
  'Vineyard & Ranch',
  'Pest & Vegetation Control',
  'Real Estate / Listing Prep',
  'Something Else',
];

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  border: '1px solid #d9d0bf',
  borderRadius: '4px',
  background: '#ffffff',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  color: '#21261f',
  outline: 'none',
  transition: 'border-color 0.2s',
};

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body font-medium text-[13px]" style={{ color: '#3b3f37' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [focused, setFocused] = useState(null);

  const getFocusStyle = (name) =>
    focused === name ? { ...inputStyle, borderColor: '#35513f', boxShadow: '0 0 0 2px rgba(53,81,63,0.1)' } : inputStyle;

  return (
    <RevealWrapper delay={0.12}>
      <div
        className="bg-white p-8 md:p-10"
        style={{ borderRadius: '10px', boxShadow: '0 4px 32px rgba(30,42,34,0.08)' }}
      >
        <h3 className="font-heading font-medium text-heading text-[22px] md:text-[26px] leading-tight mb-2">
          Request a free quote
        </h3>
        <p className="font-body text-[15px] mb-8" style={{ color: '#6f6a5d' }}>
          Fill out the form below and we will be in touch shortly.
        </p>
        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name">
              <input
                type="text"
                placeholder="Jane Smith"
                style={getFocusStyle('name')}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                placeholder="jane@email.com"
                style={getFocusStyle('email')}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Phone">
              <input
                type="tel"
                placeholder="(707) 000-0000"
                style={getFocusStyle('phone')}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
              />
            </Field>
            <Field label="Property Address or City">
              <input
                type="text"
                placeholder="Sebastopol, CA"
                style={getFocusStyle('address')}
                onFocus={() => setFocused('address')}
                onBlur={() => setFocused(null)}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Approximate Acreage">
              <input
                type="text"
                placeholder="e.g. 50 acres"
                style={getFocusStyle('acreage')}
                onFocus={() => setFocused('acreage')}
                onBlur={() => setFocused(null)}
              />
            </Field>
            <Field label="What can we help with?">
              <select
                style={getFocusStyle('service')}
                onFocus={() => setFocused('service')}
                onBlur={() => setFocused(null)}
              >
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Tell us about your property and project">
            <textarea
              rows={4}
              placeholder="Describe your land, what you are looking to accomplish, and any relevant details..."
              style={getFocusStyle('message')}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
            />
          </Field>
          <button
            type="submit"
            className="w-full font-body font-medium uppercase text-[13px] tracking-[0.1em] text-white py-[15px] px-8 transition-all duration-[350ms] hover:-translate-y-[2px] hover:shadow-lg"
            style={{ backgroundColor: '#35513f', borderRadius: '4px' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e2a22'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#35513f'}
          >
            Send Request
          </button>
        </form>
      </div>
    </RevealWrapper>
  );
}