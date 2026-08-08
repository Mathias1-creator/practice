import React from 'react';

export default function BookingCalendar() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ minHeight: 650 }}>
      <iframe
        src="https://calendly.com/atwentzel/30min?embed_domain=&embed_type=Inline"
        width="100%"
        height="650"
        frameBorder="0"
        title="Schedule a Consultation"
        style={{ border: 'none' }}
      />
    </div>
  );
}