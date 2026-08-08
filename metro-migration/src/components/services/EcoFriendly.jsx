import React from "react";
import { Droplets, Flame, Leaf } from "lucide-react";
import SectionHeading from "../SectionHeading";

const ECO_ITEMS = [
  {
    icon: Droplets,
    line: "Water-saving fixtures and systems",
  },
  {
    icon: Flame,
    line: "High-efficiency tankless water heaters",
  },
  {
    icon: Leaf,
    line: "Conservation-first recommendations",
  },
];

export default function EcoFriendly() {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "#1C1F22" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading text="Eco-Friendly Plumbing" light />
        <p
          className="font-body font-normal text-center text-base md:text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: "#F8F6F2", lineHeight: 1.6 }}
        >
          Metro Plumbing specializes in water conservation products and systems
          that save water and lower your bills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ECO_ITEMS.map(({ icon: Icon, line }) => (
            <div
              key={line}
              className="flex flex-col items-center text-center gap-3"
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                style={{ color: "#C0692A" }}
              />
              <span
                className="font-body font-normal text-base text-white"
                style={{ lineHeight: 1.6 }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}