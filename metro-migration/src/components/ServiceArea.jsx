import React from "react";
import SectionHeading from "./SectionHeading";

const AREAS = ["Sacramento", "Placer County", "El Dorado County"];

export default function ServiceArea() {
  return (
    <section className="w-full py-20 md:py-28" style={{ backgroundColor: "#EDEEF0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading text="Serving the Greater Sacramento Area" />
        <p
          className="font-body font-normal text-center text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "#4A5058", lineHeight: 1.6 }}
        >
          Family-run and operated, serving Sacramento, Placer, and El Dorado
          counties with up-front pricing and no hidden costs
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {AREAS.map((area) => (
            <span
              key={area}
              className="font-body font-medium text-sm text-white px-5 py-2.5"
              style={{
                backgroundColor: "#1C1F22",
                borderRadius: "9999px",
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}