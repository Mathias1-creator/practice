export default function ServicesHero() {
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
          OUR SERVICES
        </p>
        <h1
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
        >
          Plumbing for Every Stage of the Build
        </h1>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          From underground rough-in on a new custom home to a whole-home repipe or a simple fixture repair, Delta Pacific delivers precise, dependable plumbing across Northern California.
        </p>
      </div>
    </section>
  );
}