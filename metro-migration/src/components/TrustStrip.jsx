import React from "react";

const ITEMS = [
  "25+ Years Experience",
  "Commercial Specialists",
  "Free Estimates",
  "Sacramento to El Dorado County",
];

export default function TrustStrip() {
  return (
    <section className="w-full" style={{ backgroundColor: "#C0692A" }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {ITEMS.map((item, i) => {
            const isTopRow = i < 2;
            const isLeftCol = i % 2 === 0;
            return (
              <div
                key={item}
                className={[
                  "flex items-center justify-center text-center py-3 md:py-0",
                  isTopRow ? "border-b md:border-b-0 border-white/30" : "",
                  isLeftCol ? "border-r border-white/30" : "",
                  !isLeftCol && i < 3 ? "md:border-r md:border-white/30" : "",
                ].join(" ")}
              >
                <span
                  className="font-body font-medium text-sm md:text-base px-4"
                  style={{ color: "#1C1F22" }}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}