import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import BookingCalendar from '../components/booking/BookingCalendar';
import BookingForm from '../components/booking/BookingForm';

const WHY_POINTS = [
  'Free on-site consultation, no obligation',
  'We come to you, serving all of SLO County',
  'Get a detailed quote within 48 hours',
];

export default function BookConsultation() {
  const [selection, setSelection] = useState({ date: null, time: null });

  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-32 pb-12" style={{ minHeight: '200px' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
            Book a Free Consultation
          </h1>
          <p className="text-stone text-lg font-medium">Pick a date and time that works for you.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left Column — Why Book */}
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border h-fit">
                <h2 className="font-heading font-extrabold text-2xl text-obsidian mb-6">What to Expect</h2>
                <ul className="space-y-4 mb-8">
                  {WHY_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-6 space-y-3">
                  <p className="text-sm text-muted-foreground font-medium">Prefer to call?</p>
                  <a
                    href="tel:+18058066476"
                    className="block text-forest font-bold text-base hover:underline"
                  >
                    (805) 806-6476
                  </a>
                  <p className="text-sm text-muted-foreground font-medium">Or email us at</p>
                  <a
                    href="mailto:calcoasthardscape.irrigation@gmail.com"
                    className="block text-forest font-bold text-sm break-all hover:underline"
                  >
                    calcoasthardscape.irrigation@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column — Calendar + Form */}
            <ScrollReveal className="lg:col-span-3" delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                <h2 className="font-heading font-extrabold text-xl text-obsidian mb-6">Select a Date & Time</h2>
                <BookingCalendar onDateTimeSelect={setSelection} />
                <div className="border-t border-border mt-8 pt-8">
                  <h2 className="font-heading font-extrabold text-xl text-obsidian mb-6">Your Details</h2>
                  <BookingForm selectedDate={selection.date} selectedTime={selection.time} />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}