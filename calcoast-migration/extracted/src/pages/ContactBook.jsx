import React from 'react';
import ScrollReveal from '../components/shared/ScrollReveal';
import { Mail, Clock, Instagram, Shield, CheckCircle2 } from 'lucide-react';

const WHY_POINTS = [
  'Free on-site consultation, no obligation',
  'We come to you, serving all of SLO County',
  'Get a detailed quote within 48 hours',
];

export default function ContactBook() {

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">Contact & Book</h1>
          <p className="text-white/50 text-lg">Book a free consultation or send us a message.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left Sidebar */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-8">
                {/* What to Expect */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                  <h2 className="font-heading font-extrabold text-xl text-obsidian mb-5">What to Expect</h2>
                  <ul className="space-y-4 mb-8">
                    {WHY_POINTS.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Call Us</p>
                      <a href="tel:+18058066476" className="block text-xl font-extrabold text-forest hover:text-forest/80 transition-colors">(805) 806-6476</a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Email</p>
                      <a href="mailto:calcoasthardscape.irrigation@gmail.com" className="flex items-center gap-2 text-foreground hover:text-forest transition-colors text-sm break-all">
                        <Mail className="w-4 h-4 flex-shrink-0" /> calcoasthardscape.irrigation@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Hours</p>
                      <div className="flex items-start gap-2 text-sm text-foreground">
                        <Clock className="w-4 h-4 mt-0.5 text-forest flex-shrink-0" />
                        <div className="space-y-1">
                          <p>Monday–Friday: 7:00 AM – 5:00 PM</p>
                          <p>Saturday: 8:00 AM – 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/cal_coast_hardscape.irrigation" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-forest transition-colors text-sm">
                        <Instagram className="w-4 h-4" /> @cal_coast_hardscape.irrigation
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-forest font-semibold text-sm pt-1">
                      <Shield className="w-4 h-4" /> Licensed · Bonded · Insured
                    </div>
                    <div className="bg-forest/10 border border-forest/20 rounded-2xl p-4">
                      <p className="text-forest font-bold text-sm mb-1">Free Consultations</p>
                      <p className="text-sm text-muted-foreground">No pressure — just honest advice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <div className="lg:col-span-3 space-y-10">

              {/* Section A — Book via Calendly */}
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                  <h2 className="font-heading font-extrabold text-2xl text-forest mb-2">Book an Appointment</h2>
                  <p className="text-muted-foreground text-sm mb-6">Pick a date and time that works for you — we'll confirm within a few hours.</p>
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <iframe
                      src="https://calendly.com/calcoasthardscape-irrigation/30min"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Schedule an Appointment"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider px-2">Or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Section B — Send a Message */}
              <ScrollReveal delay={0.15}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                  <h2 className="font-heading font-extrabold text-2xl text-charcoal mb-6">Or Send Us a Message</h2>
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <iframe
                      src="https://tally.so/embed/vGqWj8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title="Contact Form"
                    />
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="bg-charcoal py-5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            Serving San Miguel · Paso Robles · Templeton · Atascadero · San Luis Obispo · Pismo Beach · Grover Beach · Morro Bay · Los Osos · Shandon · Santa Margarita
          </p>
        </div>
      </section>
    </>
  );
}