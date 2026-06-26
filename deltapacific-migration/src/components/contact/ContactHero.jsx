export default function ContactHero() {
  return (
    <section
      className="py-20 md:py-28 px-4 text-center"
      style={{ backgroundColor: "#13233B" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="font-body font-semibold text-xs tracking-[0.15em] mb-5"
          style={{ color: "#B26B3E" }}
        >
          CONTACT US
        </p>
        <h1
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
        >
          Let Us Quote Your Project
        </h1>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Tell us about your build, remodel, or repair and we will get back to you quickly with a clear, detailed quote.
        </p>
      </div>
    </section>
  );
}