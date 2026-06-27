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
      className="relative overflow-hidden rounded-lg cursor-pointer bg-white aspect-[3/4]"
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
        alt={caption}
        className="w-full h-full object-cover"
        style={{ borderRadius: "6px" }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(178,107,62,0.75) 0%, rgba(178,107,62,0.1) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          borderRadius: "6px",
        }}
      ></div>
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
