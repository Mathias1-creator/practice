import Link from 'next/link'

export default function ContactBand() {
  return (
    <section className="bg-amber-500 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold mb-3">
          Ready to find your next machine?
        </h2>
        <p className="text-slate-800 text-lg mb-8 max-w-xl mx-auto">
          Our team of experienced brokers is standing by to help you source the right equipment at the right price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/listings"
            className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-md hover:bg-slate-900/10 transition-colors"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </section>
  )
}
