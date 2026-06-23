import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/services/PageHeader";
import ServiceBlock from "../components/services/ServiceBlock";
import EcoFriendly from "../components/services/EcoFriendly";
import ServicesCta from "../components/services/ServicesCta";

const COMMERCIAL_ITEMS = [
  "Commercial plumbing systems design and build",
  "Plumbing systems installation",
  "Tenant improvement and fit-up",
  "Code violation correction",
  "Sewage ejector pumps",
  "Custom homes and additions",
  "Water heaters and on-demand tankless",
  "Repipes",
  "Drain cleaning",
  "Fixture installation",
  "All plumbing repairs",
];

const SPECIALTY_ITEMS = [
  "Medical gas line installation certified",
  "Underground gas piping certified",
  "Hydronics systems certified",
  "Gas lines installed and repaired",
  "Backflow prevention testing and certification",
  "Backflow preventer installation and correction",
  "Sewer camera inspection and video diagnostics",
  "Slab leak detection",
  "Underground line detection",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>
      <Navbar />

      <PageHeader />

      <ServiceBlock
        bgColor="#F8F6F2"
        imageLeft={true}
        imageSrc="/images/0763e9a72_generated_image.png"
        imageAlt="Large commercial building plumbing system installation with copper and steel pipes running through walls and ceilings"
        title="Commercial Plumbing"
        intro="Design-build commercial systems from the ground up"
        items={COMMERCIAL_ITEMS}
      />

      <ServiceBlock
        bgColor="#EDEEF0"
        imageLeft={false}
        imageSrc="/images/4b27c3bbe_generated_image.png"
        imageAlt="Sewer camera inspection monitor and fiber-optic diagnostic equipment showing pipe interior inspection"
        title="Specialty and Diagnostics"
        intro="Certified specialty work most plumbers cannot touch"
        items={SPECIALTY_ITEMS}
      />

      <EcoFriendly />

      <ServicesCta />

      <Footer />
    </div>
  );
}