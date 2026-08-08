import React from 'react';
import { CalendarDays, ClipboardList } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimateInView from '../components/shared/AnimateInView';
import BookingCalendar from '../components/quote/BookingCalendar';

export default function GetAQuote() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <PageHeader
        headline="Book Your Free Consultation"
        subtext="Andrew will come out, assess the job, and give you an exact quote. No pressure. No obligation. Always free."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">

        {/* Section 1: Calendar */}
        <AnimateInView>
          <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2E7D32]/10 rounded-xl flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <h2 className="text-xl font-heading font-bold text-[#1A1A1A]">Pick a Date & Time</h2>
            </div>
            <BookingCalendar />
          </div>
        </AnimateInView>

        {/* Section 2: Tally Form */}
        <AnimateInView delay={0.1}>
          <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1565C0]/10 rounded-xl flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#1565C0]" />
              </div>
              <h2 className="text-xl font-heading font-bold text-[#1A1A1A]">Request a Quote</h2>
            </div>
            <iframe
              src="https://tally.so/embed/449B7d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="900"
              frameBorder="0"
              title="Request a Quote"
              className="w-full"
              onLoad={() => {
                const script = document.createElement('script');
                script.src = 'https://tally.so/widgets/embed.js';
                document.body.appendChild(script);
              }}
            />
          </div>
        </AnimateInView>
      </div>
    </div>
  );
}