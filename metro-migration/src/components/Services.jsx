import React from "react";
import { Wrench, Flame, Building2, Camera, ShieldCheck, Droplets } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: Wrench,
    title: "Commercial Plumbing",
    line: "Design and build of commercial plumbing systems",
  },
  {
    icon: Flame,
    title: "Gas Piping",
    line: "Gas line installation and service",
  },
  {
    icon: Building2,
    title: "Tenant Improvement",
    line: "Plumbing for commercial tenant buildouts",
  },
  {
    icon: Camera,
    title: "Camera and Diagnostics",
    line: "TV fiber-optic line inspection and video diagnostics",
  },
  {
    icon: ShieldCheck,
    title: "Backflow Prevention",
    line: "Testing, installation, and code compliance",
  },
  {
    icon: Droplets,
    title: "Eco-Friendly Systems",
    line: "Water conservation products and systems that save you money",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 md:py-28"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading text="What We Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="group p-6 transition-all duration-300 hover:border-[#C0692A]"
                style={{
                  border: "1px solid #DDDEE0",
                  borderRadius: "2px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "#C0692A" }}
                />
                <h3
                  className="font-heading text-xl mb-2"
                  style={{ color: "#1C1F22" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="font-body font-normal text-base"
                  style={{ color: "#4A5058", lineHeight: 1.6 }}
                >
                  {svc.line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}