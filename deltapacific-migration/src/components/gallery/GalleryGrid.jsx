import { useState } from "react";
import { motion } from "framer-motion";

function GalleryImage({ src, caption }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-lg cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 16px 40px -10px rgba(19,35,59,0.18)"
          : "0 4px 16px -6px rgba(19,35,59,0.1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={`${caption} (placeholder)`}
        className="w-full h-56 sm:h-60 object-cover"
        style={{ borderRadius: "6px" }}
      />
      {/* Placeholder badge */}
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-body px-2.5 py-0.5 rounded-full z-10">
        (placeholder)
      </div>
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end justify-start p-4 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(178,107,62,0.75) 0%, rgba(178,107,62,0.1) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          borderRadius: "6px",
        }}
      >
        <span className="font-body font-medium text-sm text-white">{caption}</span>
      </div>
    </motion.div>
  );
}

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {images.map((img, i) => (
        <GalleryImage key={i} src={img.src} caption={img.caption} />
      ))}
    </div>
  );
}