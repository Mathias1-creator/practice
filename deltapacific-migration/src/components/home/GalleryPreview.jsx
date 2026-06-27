import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/gallery_gasline1.jpg", label: "Gas Line", tall: true },
  { src: "/images/remodels_real.jpg", label: "Repipe", tall: false },
  { src: "/images/gallery_shower.jpg", label: "Remodel", tall: true },
  { src: "/images/gallery_commercial1.jpg", label: "Commercial", tall: true },
  { src: "/images/gallery_gasline2.jpg", label: "New Construction", tall: false },
  { src: "/images/gallery_commercial2.jpg", label: "Commercial", tall: false },
];

export default function GalleryPreview() {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#B26B3E" }}
          >
            RECENT WORK
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ color: "#13233B" }}
          >
            Our Craftsmanship
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto" style={{ color: "#4C525A" }}>
            A look at the new construction, remodel, and repipe work we deliver across Northern California.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} image={img} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md font-body font-semibold text-sm border-2 transition-all duration-200 hover:bg-navy hover:text-white"
            style={{
              color: "#13233B",
              borderColor: "#13233B",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#13233B";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#13233B";
            }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer"
    >
      <img
        src={image.src}
        alt={`${image.label} plumbing project`}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ borderRadius: "6px" }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end justify-start p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(178, 107, 62, 0.6) 0%, transparent 60%)",
          borderRadius: "6px",
        }}
      >
        <span className="font-body font-medium text-sm text-white">{image.label}</span>
      </div>
    </motion.div>
  );
}