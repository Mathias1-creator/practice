import React from 'react';
import { Zap, Award, Eye } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Same-Day Service',
    desc: "When your septic backs up, you can't wait. We move fast — same-day pumping available when you need it most.",
  },
  {
    icon: Award,
    title: '19 Years of Local Experience',
    desc: "Rex Springer has been serving SLO County since the beginning. We know these systems, these properties, and this community.",
  },
  {
    icon: Eye,
    title: 'We Check the Incoming Sewer Flow',
    desc: "We don't just pump and leave. We check your incoming sewer line for flow issues — catching problems before they become emergencies.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-center mb-12 text-white">
          Why Homeowners and Agents Trust SLO Septic Pumping LLC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-5 mx-auto lg:mx-0"
                style={{ backgroundColor: 'rgba(204,0,0,0.15)' }}>
                <f.icon className="w-7 h-7" style={{ color: '#CC0000' }} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}