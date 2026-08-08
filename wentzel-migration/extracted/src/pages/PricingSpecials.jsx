import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Zap, Truck, CheckCircle } from 'lucide-react';
import AnimateInView from '../components/shared/AnimateInView';

const regularRates = [
  { role: 'Project Manager', rate: '$75/hr' },
  { role: 'Site Foreman', rate: '$65/hr' },
  { role: 'Technician', rate: '$55/hr' },
];

const emergencyRates = [
  { role: 'Project Manager', rate: '$150/hr' },
  { role: 'Site Foreman', rate: '$125/hr' },
  { role: 'Technician', rate: '$100/hr' },
];

const equipmentCards = [
  { icon: Truck, name: 'Dump Trailer', rate: '$100/day' },
  { icon: Truck, name: 'Dump Truck', rate: '$150/day' },
  { icon: Truck, name: 'Mini Excavator, Skid Steer & Loader', rate: '$350/day' },
];

const maintenanceChecklist = [
  'Full system inspection',
  'Controller programming',
  'Water usage optimization',
  'Head adjustments',
  'Leak detection',
  'Drip flushing/filter cleaning',
  'Coverage corrections',
  'Seasonal adjustments',
  'Check batteries in timers',
];

const lawnPricing = [
  { label: 'Aeration Only', price: '$60–$70 per 1,000 sq ft', best: false },
  { label: 'Fertilizing', price: '$15–$20 per 1,000 sq ft', best: false },
  { label: 'Over-Seeding', price: '$25–$30 per 1,000 sq ft', best: false },
  { label: 'Bundle (Aeration + Fertilizing + Over-Seeding)', price: '$85–$88 per 1,000 sq ft', best: true, note: 'Best Value · 20% Savings' },
  { label: 'Minimum aeration service', price: '$125', best: false },
];

function RateRow({ role, rate, last }) {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <span className="text-gray-300 font-body">{role}</span>
        <span className="text-[#2E7D32] font-semibold font-body">{rate}</span>
      </div>
      {!last && <div className="h-px bg-white/10" />}
    </>
  );
}

export default function PricingSpecials() {
  return (
    <div className="font-body">

      {/* PAGE HEADER */}
      <section className="bg-[#2E7D32] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-white/70 text-xs font-body tracking-[0.2em] uppercase mb-3">WENTZEL IRRIGATION & TURF SOLUTIONS</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Pricing & Specials</h1>
            <p className="text-white/80 text-lg font-body max-w-2xl">
              Transparent, honest pricing from a licensed SLO County irrigation and turf specialist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — IRRIGATION ASSESSMENT */}
      <section className="bg-[#F8F5F0] py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">ASSESSMENTS</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A1A] mb-4">Irrigation System Assessment</h2>
            <div className="w-16 h-0.5 bg-[#1A56DB] mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg font-body">
              We approach residential assessments on a time & material basis as there are so many unknowns. We charge a minimum of $100 for the first hour and if the assessment goes beyond an hour we charge our regular technician rate of $55 per hour. Please contact us if you're interested in a commercial assessment.
            </p>
          </AnimateInView>
        </div>
      </section>

      {/* SECTION 2 — LABOR RATES */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">SERVICE RATES</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F8F5F0] mb-4">Honest. Competitive. Transparent.</h2>
            <div className="w-16 h-0.5 bg-[#1A56DB] mb-10" />
          </AnimateInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Regular Rates Card */}
            <AnimateInView delay={0.1}>
              <div className="bg-[#242424] border-l-4 border-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(46,125,50,0.2)] transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-[#2E7D32]" />
                  <h3 className="text-xl font-heading font-bold text-white">Regular Service Rates</h3>
                </div>
                {regularRates.map((r, i) => (
                  <RateRow key={r.role} role={r.role} rate={r.rate} last={i === regularRates.length - 1} />
                ))}
                <p className="text-gray-500 text-xs italic mt-4 font-body">
                  *Minimum $125 per service call. Regular rates apply beyond the first hour.
                </p>
              </div>
            </AnimateInView>
            {/* Emergency Rates Card */}
            <AnimateInView delay={0.2}>
              <div className="bg-[#242424] border-l-4 border-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(46,125,50,0.2)] transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <Zap className="w-5 h-5 text-[#1A56DB]" />
                  <h3 className="text-xl font-heading font-bold text-white">Emergency Service Rates</h3>
                </div>
                {emergencyRates.map((r, i) => (
                  <RateRow key={r.role} role={r.role} rate={r.rate} last={i === emergencyRates.length - 1} />
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EQUIPMENT RATES */}
      <section className="bg-[#F8F5F0] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="text-[#2E7D32] text-xs font-body tracking-[0.2em] uppercase mb-3">EQUIPMENT</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A1A] mb-4">Equipment & Daily Rates</h2>
            <div className="w-16 h-0.5 bg-[#2E7D32] mb-10" />
          </AnimateInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipmentCards.map((card, i) => (
              <AnimateInView key={card.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center h-48">
                  <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-2xl flex items-center justify-center mb-4 shrink-0">
                    <card.icon className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#1A1A1A] mb-2 leading-tight">{card.name}</h3>
                  <p className="text-3xl font-heading font-bold text-[#2E7D32]">{card.rate}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 HEADER — SPECIALS */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView>
            <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">SPECIALS</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#F8F5F0] mb-4">Seasonal Specials & Service Packages</h2>
            <div className="w-24 h-0.5 bg-[#1A56DB] mx-auto" />
          </AnimateInView>
        </div>
      </section>

      {/* SPECIAL 1 — IRRIGATION MAINTENANCE */}
      <section className="bg-[#F8F5F0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <AnimateInView>
              <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">IRRIGATION MAINTENANCE</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A] mb-4 leading-tight">
                The Most Important Part of a Healthy Landscape
              </h2>
              <div className="w-16 h-0.5 bg-[#2E7D32] mb-6" />
              <p className="text-gray-600 leading-relaxed font-body text-sm">
                Whether it's monthly, quarterly, or yearly — proper irrigation maintenance is one of the most important parts of keeping a landscape healthy, efficient, and cost-effective over time. A well-maintained irrigation system helps ensure your lawn, plants, and trees receive the right amount of water without waste, preventing common problems like dry spots, oversaturation, runoff, erosion, root damage, and rising water bills. Regular maintenance also helps identify leaks, broken sprinkler heads, clogged nozzles, valve issues, pressure problems, and coverage inconsistencies before they turn into expensive repairs or landscape damage. In areas with changing weather conditions and water restrictions, properly adjusted irrigation systems can significantly improve water efficiency while keeping landscapes looking green and healthy year-round. Consistent irrigation maintenance not only protects your investment in your property and landscaping, but also extends the life of your irrigation system and helps avoid unnecessary water usage and costly long-term issues.
              </p>
            </AnimateInView>
            {/* Right — Checklist */}
            <AnimateInView delay={0.15}>
              <div className="bg-[#2E7D32] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">What to Expect:</h3>
                <ul className="space-y-3">
                  {maintenanceChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body">
                      <CheckCircle className="w-5 h-5 text-white/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
        {/* Pricing Callout Band */}
        <div className="bg-[#2E7D32] mt-16 py-8 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white font-body text-lg">
              Each sprinkler zone <strong>$20 per visit</strong>. Each drip system zone <strong>$30 per visit</strong>. Call for a free assessment &amp; quote.
            </p>
            <a
              href="tel:+18056744333"
              className="bg-white text-[#2E7D32] px-6 py-3 rounded-lg font-semibold font-body hover:bg-gray-100 hover:scale-105 transition-all whitespace-nowrap"
            >
              Call (805) 674-4333
            </a>
          </div>
        </div>
      </section>

      {/* SPECIAL 2 — LAWN AERATION */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">LAWN CARE SPECIALS</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F8F5F0] mb-4">Lawn Aeration, Fertilizing & Over-Seeding</h2>
            <div className="w-16 h-0.5 bg-[#1A56DB] mb-10" />
          </AnimateInView>

          {/* Image Placeholder */}
          <AnimateInView delay={0.1}>
            <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
              <img
                src="/images/911123e82_DaesvourlawnneedheloAeratereiuvenateandsaveonwater.jpg"
                alt="Aeration Brochure"
                className="w-full h-auto"
              />
            </div>
          </AnimateInView>

          {/* Pricing Table */}
          <AnimateInView delay={0.2}>
            <div className="space-y-3">
              {lawnPricing.map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl font-body ${
                    row.best
                      ? 'bg-[#2E7D32] text-white'
                      : 'bg-[#F8F5F0] text-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{row.label}</span>
                    {row.best && (
                      <span className="bg-[#2E7D32] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        {row.note}
                      </span>
                    )}
                    {row.note && !row.best && (
                      <span className="text-xs text-gray-500">{row.note}</span>
                    )}

                  </div>
                  <span className="font-bold">{row.price}</span>
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* SPECIAL 3 — EZ FLO */}
      <section className="bg-[#F8F5F0] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — Product Spotlight */}
            <AnimateInView>
              <div className="bg-[#2E7D32] rounded-2xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
                    EZ Flo Fertigation &<br />Mitigation Systems
                  </h2>
                  <p className="font-body text-white/85 mb-8 leading-relaxed">
                    Want your lawn to look great all year round while deterring gophers and ground squirrels at the same time?
                  </p>
                </div>
                <a
                  href="https://ezfloinjection.com/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#2E7D32] px-6 py-3 rounded-lg font-semibold font-body hover:bg-gray-100 hover:scale-105 transition-all"
                >
                  Learn About EZ Flo Systems →
                </a>
              </div>
            </AnimateInView>
            {/* Right */}
            <AnimateInView delay={0.15}>
              <p className="text-[#2E7D32] text-xs font-body tracking-[0.2em] uppercase mb-3">HOW IT WORKS</p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A] mb-4 leading-tight">
                Fertilize & Protect<br />at the Same Time
              </h3>
              <div className="w-16 h-0.5 bg-[#2E7D32] mb-6" />
              <p className="text-gray-600 leading-relaxed font-body">
                EZ Flo injection systems connect directly to your existing irrigation system to deliver fertilizer, pest deterrents, and other treatments automatically — every time your system runs. Ask us about installation at your next service visit.
              </p>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* SPECIAL 4 — LAWN MAINTENANCE */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <p className="text-[#1A56DB] text-xs font-body tracking-[0.2em] uppercase mb-3">LAWN MAINTENANCE</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F8F5F0] mb-4">Competitive Lawn & Land Maintenance</h2>
            <div className="w-16 h-0.5 bg-[#1A56DB] mb-6" />
            <p className="text-gray-400 leading-relaxed font-body text-lg mb-8">
              We offer VERY COMPETITIVE weekly, bi-weekly, monthly, and seasonal lawn & land maintenance. We service both residential and commercial. Whether it's once a week or once a year, acres of field mowing or small yards — we have the equipment, talent, and reliability you can count on.
            </p>
            <a
              href="tel:+18056744333"
              className="inline-flex items-center justify-center bg-[#1A56DB] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold font-body text-lg hover:scale-105 transition-all"
            >
              Call for a Free Consultation & Custom Quote
            </a>
          </AnimateInView>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="bg-[#2E7D32] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F8F5F0] mb-4">Questions About Pricing?</h2>
            <p className="text-white/80 font-body text-lg mb-8">
              We believe in honest, transparent pricing. Call us anytime for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18056744333"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold font-body hover:bg-white/10 hover:scale-105 transition-all"
              >
                Call (805) 674-4333
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#1A56DB] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold font-body hover:scale-105 transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  );
}