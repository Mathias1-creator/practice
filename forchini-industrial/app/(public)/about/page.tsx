import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Forchini Industrial Equipment',
  description:
    'Northern California heavy equipment brokerage connecting buyers and sellers with straightforward representation and industry knowledge.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 border-b border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About Forchini</h1>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            Northern California equipment brokerage built on firsthand industry experience and a commitment to honest, professional service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Placeholder for a strong business photo */}
            <div className="w-full aspect-video bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mb-12">
              <div className="text-center text-slate-600">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Equipment photo coming soon</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Who We Are</h2>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                We connect buyers and sellers with straightforward representation, industry knowledge, and a commitment to professional service. Whether you&apos;re buying, selling, or searching for a specific piece of equipment, Forchini Industrial Equipment works to help you find the right machine at the right value.
              </p>
              <p>
                Forchini Industrial Equipment was founded on firsthand experience working around heavy equipment, agricultural machinery, and aggregate operations throughout Northern California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Equipment Sales',
                desc: 'Browse current inventory of construction, aggregate, agricultural, and truck equipment available for purchase across Northern California and the Central Valley.',
                iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Sell Your Equipment',
                desc: 'Looking to move a machine? We represent sellers with accurate listings, industry-informed pricing, and professional presentation to qualified buyers.',
                iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
              },
              {
                title: 'Find What You Need',
                desc: "Don&apos;t see the machine you&apos;re after? Get in touch and describe what you need. We have knowledge of equipment not yet publicly listed.",
                iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
              },
            ].map(({ title, desc, iconPath }) => (
              <div key={title} className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories we handle */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Equipment We Handle</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl">
            We work across four core categories of heavy and industrial machinery.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Construction', examples: 'Excavators, dozers, cranes, compactors, loaders' },
              { label: 'Aggregate', examples: 'Crushers, screeners, conveyors, wash plants' },
              { label: 'Agricultural', examples: 'Tractors, combines, planters, hay equipment' },
              { label: 'Trucks', examples: 'Semi trucks, dump trucks, lowboys, trailers' },
            ].map(({ label, examples }) => (
              <div key={label} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-amber-400 font-bold text-lg mb-2">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to talk equipment?</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="tel:+17077584253"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-md text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (707) 758-4253
            </a>
            <a
              href="mailto:sales@forchiniindustrial.com"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-600 hover:border-amber-500 text-slate-200 hover:text-amber-400 font-semibold rounded-md text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@forchiniindustrial.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
