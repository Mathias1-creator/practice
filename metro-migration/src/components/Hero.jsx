import React from "react";

const HERO_IMAGE = "/images/hero-pipes.avif";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: "90vh", minHeight: "600px" }}>
      <img
        src={HERO_IMAGE}
        alt="Professional commercial plumbing installation showing copper and steel pipes in a large mechanical room"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0E1012 0%, #0E1012ee 35%, #0E1012aa 55%, transparent 100%)",
        }}
      />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1
              className="font-heading text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              {"Sacramento\u2019s Commercial Plumbing Specialists"}
            </h1>
            <p
              className="font-body font-normal text-lg md:text-xl mb-8"
              style={{ color: "#F8F6F2", lineHeight: 1.6 }}
            >
              Over 25 years serving Sacramento, Placer, and El Dorado counties
            </p>
            <a
              href="tel:9168704033"
              className="font-heading block mb-8 transition-colors duration-200 hover:text-[#A3561F]"
              style={{
                color: "#C0692A",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1,
              }}
            >
              (916) 870-4033
            </a>
            <a
              href="/services"
              className="inline-block font-body font-medium text-white border border-white px-8 py-3 transition-all duration-200 hover:bg-[#1C1F22] hover:border-[#1C1F22]"
              style={{ borderRadius: "2px" }}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}