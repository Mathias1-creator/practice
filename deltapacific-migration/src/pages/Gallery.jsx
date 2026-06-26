import { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilterBar from "../components/gallery/GalleryFilterBar";
import GalleryCategorySection from "../components/gallery/GalleryCategorySection";
import GalleryCTA from "../components/gallery/GalleryCTA";

const newConstructionImages = [
  { src: "/images/71039a914_generated_image.png", caption: "Custom Home Rough-In" },
  { src: "/images/d10e6833f_generated_image.png", caption: "Tract Home Plumbing" },
  { src: "/images/a1e40df5e_generated_image.png", caption: "ADU Water Lines" },
  { src: "/images/67098db6c_generated_image.png", caption: "Slab Rough-In" },
  { src: "/images/aeba3829f_generated_image.png", caption: "Finish Fixture Set" },
  { src: "/images/c893b9fb2_generated_image.png", caption: "Gas Line Installation" },
];

const remodelsImages = [
  { src: "/images/b836b9bfc_generated_image.png", caption: "Whole-Home Repipe" },
  { src: "/images/3a27d9692_generated_image.png", caption: "Kitchen Remodel" },
  { src: "/images/d7c416117_generated_image.png", caption: "Bathroom Remodel" },
  { src: "/images/b836b9bfc_generated_image.png", caption: "Copper Repipe" },
  { src: "/images/a5649d7c1_generated_image.png", caption: "PEX Installation" },
  { src: "/images/9bb50534c_generated_image.png", caption: "Fixture Upgrade" },
];

const serviceRepairsImages = [
  { src: "/images/d76516d8b_generated_image.png", caption: "Water Heater Install" },
  { src: "/images/eafe95f13_generated_image.png", caption: "Faucet Replacement" },
  { src: "/images/9a855abff_generated_image.png", caption: "Toilet Installation" },
  { src: "/images/f170d866b_generated_image.png", caption: "Leak Repair" },
  { src: "/images/9bb50534c_generated_image.png", caption: "Fixture Replacement" },
  { src: "/images/886a9c72a_generated_image.png", caption: "Repipe Repair" },
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