export default function AboutHero() {
  return (
    <section
      className="py-20 md:py-28 px-4 text-center"
      style={{ backgroundColor: "#13233B" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="font-body font-semibold text-xs tracking-[0.15em] mb-5"
          style={{ color: "#1A8781" }}
        >
          ABOUT US
        </p>
        <h1
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
        >
          A Family Name on Every Job
        </h1>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Delta Pacific Plumbing is a family-owned and operated plumbing contractor serving new construction, remodels, and repipes across Northern California.
        </p>
      </div>
    </section>
  );
}