export default function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] bg-wp-red text-white text-center py-2.5 px-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700 }}>
      24/7 EMERGENCY PLUMBING — CALL NOW{' '}
      <a href="tel:8055509152" className="text-white font-bold underline hover:opacity-90 transition-opacity">
        (805) 550-9152
      </a>
    </div>
  );
}