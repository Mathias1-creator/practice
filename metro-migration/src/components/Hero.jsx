import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center"
      style={{
        height: "90vh",
        minHeight: "600px",
        background: "linear-gradient(135deg, #0E1012 0%, #1C1F22 50%, #0E1012 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1
            className="font-heading text-white leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {"Sacramento’s Commercial Plumbing Specialists"}
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
    </section>
  );
}
