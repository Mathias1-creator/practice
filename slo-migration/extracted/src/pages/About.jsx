import React from 'react';
import { Zap, Eye, ThumbsUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import ClosingCTA from '../components/ClosingCTA';

const WINE_COUNTRY_PHOTO = '/images/c15cae14a_Screenshot2026-04-20at75951PM.jpg';
const SIDE_PROFILE_PHOTO = '/images/2d33d40a4_Screenshot2026-04-20at75903PM.jpg';

const sloCounty = ['San Luis Obispo', 'Paso Robles', 'Atascadero', 'Templeton', 'Arroyo Grande', 'Pismo Beach', 'Grover Beach', 'Morro Bay', 'Cambria', 'Santa Margarita', 'Nipomo', 'Shell Beach'];
const sbCounty = ['Solvang', 'Santa Ynez', 'Los Olivos', 'Buellton', 'Santa Maria'];

const differentiators = [
  {
    icon: Zap,
    title: 'Same-Day Availability',
    desc: "When your system backs up, the last thing you want to hear is 'we can't come until Thursday.' We do same-day service when you need it.",
  },
  {
    icon: Eye,
    title: 'We Check the Incoming Sewer Flow',
    desc: "Most pumpers just pump and go. We check the incoming sewer line for flow problems — so you know the full picture before we leave.",
  },
  {
    icon: ThumbsUp,
    title: 'Honest and Straightforward',
    desc: "No upsells, no surprises. We tell you what we find, what it means, and what your options are. That's it.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        headline="19 Years. One Standard. Do It Right."
        subheadline="Family-owned and operated in San Luis Obispo County."
        breadcrumbs="About"
        bgImage={WINE_COUNTRY_PHOTO}
      />

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-6" style={{ color: '#111111' }}>
                About SLO Septic Pumping LLC
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SLO SEPTIC PUMPING LLC has been serving San Luis Obispo County and the surrounding areas for over 19 years. Founded by Rex Springer, the company was built on a simple belief: show up on time, do the job right, and treat every customer the way you'd want to be treated.
                </p>
                <p>
                  Rex has pumped and serviced hundreds of septic systems across the Central Coast — from residential homes and rural ranches to commercial properties and real estate transactions. He knows these systems, this county, and what it takes to keep your property running clean.
                </p>
                <p>
                  We are a division of Rex's Rooter Plumbing Inc., which means when the job calls for more than pumping, we have the depth to handle it.
                </p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden">
              <img src={SIDE_PROFILE_PHOTO} alt="SLO Septic truck side profile" className="w-full h-72 lg:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-center mb-12" style={{ color: '#111111' }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-white p-6 lg:p-8 rounded-sm border border-gray-200">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                  <d.icon className="w-6 h-6" style={{ color: '#CC0000' }} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#111111' }}>{d.title}</h3>
                <p className="text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight mb-3" style={{ color: '#111111' }}>
              Proudly Serving Two Counties
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We cover all of San Luis Obispo County and key areas of Santa Barbara County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#CC0000' }}>
                San Luis Obispo County
              </h3>
              <div className="flex flex-wrap gap-2">
                {sloCounty.map((city) => (
                  <span key={city} className="px-3 py-1.5 text-sm font-medium rounded-sm border border-gray-200" style={{ color: '#111111' }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#CC0000' }}>
                Santa Barbara County
              </h3>
              <div className="flex flex-wrap gap-2">
                {sbCounty.map((city) => (
                  <span key={city} className="px-3 py-1.5 text-sm font-medium rounded-sm border border-gray-200" style={{ color: '#111111' }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Not sure if we cover your area? Call us — we travel.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}