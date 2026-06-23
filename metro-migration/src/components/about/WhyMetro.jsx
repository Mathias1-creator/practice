import React from "react";
import SectionHeading from "../SectionHeading";

const ITEMS = [
  {
    numeral: "01",
    title: "Family-Run",
    line: "Owned and operated by the same family for over 25 years",
  },
  {
    numeral: "02",
    title: "Up-Front Pricing",
    line: "A clear price before work starts, no hidden costs ever",
  },
  {
    numeral: "03",
    title: "Certified Specialists",
    line: "Medical gas, hydronics, underground gas piping, and backflow certified",
  },
  {
    numeral: "04",
    title: "Eco-Friendly",
    line: "Water conservation products and systems that save you money",
  },
];

export default function WhyMetro() {
  return (
    <section className="w-full py-20 md:py-28" style={{ backgroundColor: "#EDEEF0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading text="Why Metro" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {ITEMS.map(({ numeral, title, line }) => (
            <div key={numeral} className="flex flex-col">
              <span
                className="font-heading leading-none mb-1"
                style={{ color: "#C0692A", fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {numeral}
              </span>
              <h3
                className="font-heading leading-none mb-3"
                style={{ color: "#1C1F22", fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
              >
                {title}
              </h3>
              <p
                className="font-body font-normal text-base"
                style={{ color: "#4A5058", lineHeight: 1.6 }}
              >
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}