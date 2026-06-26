import GalleryGrid from "./GalleryGrid";

export default function GalleryCategorySection({ id, eyebrow, heading, subline, images, bg }) {
  return (
    <section id={id} style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Section header */}
        <div className="mb-10">
          <p
            className="font-body font-semibold text-xs tracking-[0.15em] mb-3"
            style={{ color: "#B26B3E" }}
          >
            {eyebrow}
          </p>
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl mb-3"
            style={{ color: "#13233B" }}
          >
            {heading}
          </h2>
          <p
            className="font-body text-base max-w-2xl"
            style={{ color: "#4C525A" }}
          >
            {subline}
          </p>
        </div>

        <GalleryGrid images={images} />
      </div>
    </section>
  );
}