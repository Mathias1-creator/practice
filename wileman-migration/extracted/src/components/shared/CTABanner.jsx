import useFadeUp from '../../hooks/useFadeUp';

export default function CTABanner() {
  const ref = useFadeUp();

  return (
    <section
      ref={ref}
      className="fade-up py-20 px-6 md:px-20 text-center"
      style={{ background: 'linear-gradient(135deg, #0d2a4a, #1a3d6b)' }}
    >
      <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-wide mb-4">
        NEED A PLUMBER RIGHT NOW?
      </h2>
      <p className="font-body text-lg mb-8" style={{ color: '#94b8d0' }}>
        Call us any time — day or night. Fast response across SLO County.
      </p>
      <a
        href="tel:8055509152"
        className="inline-block font-heading text-xl text-white uppercase tracking-[2px] transition-opacity duration-300 hover:opacity-90"
        style={{
          backgroundColor: '#e53e3e',
          padding: '18px 48px',
          borderRadius: '0px',
        }}
      >
        CALL (805) 550-9152
      </a>
    </section>
  );
}