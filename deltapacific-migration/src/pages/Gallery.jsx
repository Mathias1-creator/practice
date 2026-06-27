import { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilterBar from "../components/gallery/GalleryFilterBar";
import GalleryCategorySection from "../components/gallery/GalleryCategorySection";
import GalleryCTA from "../components/gallery/GalleryCTA";

const newConstructionImages = [
  { src: "/images/newconstruction_real.jpg", caption: "New Construction Rough-In" },
  { src: "/images/gallery_gasline1.jpg", caption: "Gas Meter & Service Line" },
  { src: "/images/gallery_gasline2.jpg", caption: "Underground Gas Line" },
];

const remodelsImages = [
  { src: "/images/remodels_real.jpg", caption: "DWV Repipe" },
  { src: "/images/gallery_shower.jpg", caption: "Bathroom Remodel" },
];

const serviceRepairsImages = [
  { src: "/images/servicerepairs_real.jpg", caption: "Tankless Water Heater Install" },
  { src: "/images/gallery_commercial1.jpg", caption: "Commercial Backflow" },
  { src: "/images/gallery_commercial2.jpg", caption: "Commercial Repipe" },
];

const categories = [
  {
    id: "new-construction",
    key: "new-construction",
    eyebrow: "NEW CONSTRUCTION",
    heading: "New Construction",
    subline: "Complete plumbing for custom homes, tract homes, and ADUs, from rough-in to finished fixtures.",
    images: newConstructionImages,
    bg: "#F7F4EF",
  },
  {
    id: "remodels-repipes",
    key: "remodels-repipes",
    eyebrow: "REMODELS AND REPIPES",
    heading: "Remodels and Repipes",
    subline: "Whole-home repipes and remodel plumbing installed clean and built to last.",
    images: remodelsImages,
    bg: "#EBEFF3",
  },
  {
    id: "service-repairs",
    key: "service-repairs",
    eyebrow: "SERVICE AND REPAIRS",
    heading: "Service and Repairs",
    subline: "Dependable repair and replacement work that keeps homes running.",
    images: serviceRepairsImages,
    bg: "#F7F4EF",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.key === activeFilter);

  return (
    <>
      <GalleryHero />
      <GalleryFilterBar active={activeFilter} onChange={setActiveFilter} />
      {visibleCategories.map((cat) => (
        <GalleryCategorySection
          key={cat.id}
          id={cat.id}
          eyebrow={cat.eyebrow}
          heading={cat.heading}
          subline={cat.subline}
          images={cat.images}
          bg={cat.bg}
        />
      ))}
      <GalleryCTA />
    </>
  );
}