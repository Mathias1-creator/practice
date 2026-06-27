import ServicesHero from "../components/services/ServicesHero";
import WhoWeWorkWith from "../components/services/WhoWeWorkWith";
import ServiceBlock from "../components/services/ServiceBlock";
import HowWeWork from "../components/services/HowWeWork";
import ServicesCTA from "../components/services/ServicesCTA";

const NEW_CONSTRUCTION_IMG = "/images/newconstruction_real.jpg";
const REMODELS_IMG = "/images/aeb96ab9d_generated_image.png";
const SERVICE_REPAIRS_IMG = "/images/1dea21695_generated_image.png";

const newConstructionItems = [
  "Underground and slab rough-in plumbing",
  "Water supply and distribution lines",
  "Drain, waste, and vent (DWV) systems",
  "Gas line installation",
  "Finish plumbing and fixture setting",
  "Water heater installation",
  "Custom homes, tract homes, and ADUs",
  "Code compliance and inspection coordination",
];

const remodelsItems = [
  "Whole-home repipes in copper or PEX",
  "Kitchen and bathroom remodel plumbing",
  "Replacing aging or failing pipes",
  "New fixture and appliance hookups",
  "Relocating plumbing lines for new layouts",
  "Clean, minimal-disruption installation",
];

const serviceRepairsItems = [
  "Faucet repair and replacement",
  "Toilet repair and replacement",
  "Water heater installation and replacement",
  "Fixture upgrades and replacements",
  "Leak detection and repair",
  "General plumbing repairs",
];

export default function Services() {
  return (
    <>
      <ServicesHero />
      <WhoWeWorkWith />
      <ServiceBlock
        id="new-construction"
        number="01"
        eyebrow="NEW CONSTRUCTION"
        heading="New Construction Plumbing"
        paragraph="We handle the complete plumbing scope for new homes, from the first underground rough-in through final fixture set. As a self-performing crew, we keep your project on schedule and built to code, whether it is a single custom home, a tract development, or an ADU."
        checkItems={newConstructionItems}
        imgSrc={NEW_CONSTRUCTION_IMG}
        imgAlt="New construction home framing with plumbing rough-in"
        reverse={false}
        bg="#F7F4EF"
      />
      <ServiceBlock
        id="remodels-repipes"
        number="02"
        eyebrow="REMODELS AND REPIPES"
        heading="Remodels and Repipes"
        paragraph="When a home needs new life or new pipes, we remove aging, failing systems and install clean, modern plumbing with as little disruption as possible. From kitchen and bath remodels to whole-home repipes, we leave the job tidy and built to last."
        checkItems={remodelsItems}
        imgSrc={REMODELS_IMG}
        imgAlt="Copper and PEX plumbing pipes newly installed in a wall"
        reverse={true}
        bg="#EBEFF3"
      />
      <ServiceBlock
        id="service-repairs"
        number="03"
        eyebrow="SERVICE AND REPAIRS"
        heading="Service and Repairs"
        paragraph="Beyond big projects, we keep homes running with dependable repair and replacement work. From a leaking faucet to a new water heater, we show up on time and fix it right."
        checkItems={serviceRepairsItems}
        imgSrc={SERVICE_REPAIRS_IMG}
        imgAlt="Professional plumber installing a water heater"
        reverse={false}
        bg="#F7F4EF"
      />
      <HowWeWork />
      <ServicesCTA />
    </>
  );
}