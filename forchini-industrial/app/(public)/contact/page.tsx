import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Forchini Industrial Equipment',
  description:
    'Get in touch with Forchini Industrial Equipment. Call or email to inquire about equipment, buy, or sell. Available 24/7 in Northern California.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 border-b border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Questions about a listing? Want to sell your equipment? Reach out directly &mdash; no forms, no wait times.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Phone</div>
                  <a
                    href="tel:+17077584253"
                    className="text-white font-bold text-3xl hover:text-amber-400 transition-colors block"
                  >
                    (707) 758-4253
                  </a>
                  <div className="text-slate-400 text-sm mt-1">Tap to call</div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Email</div>
                  <a
                    href="mailto:sales@forchiniindustrial.com"
                    className="text-white font-bold text-xl sm:text-2xl hover:text-amber-400 transition-colors block break-all"
                  >
                    sales@forchiniindustrial.com
                  </a>
                  <div className="text-slate-400 text-sm mt-1">Tap to email</div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Hours</div>
                  <div className="text-white font-bold text-2xl">Available 24/7</div>
                </div>
              </div>

              {/* Areas served */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Areas Served</div>
                  <div className="text-white font-bold text-2xl">Northern California &amp; the Central Valley</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
