export default function MobileCallButton() {
  return (
    <a
      href="tel:8055509152"
      className="fixed bottom-6 right-6 z-[999] md:hidden flex items-center gap-2 text-white font-body font-semibold text-sm"
      style={{
        backgroundColor: '#e53e3e',
        borderRadius: '32px',
        padding: '14px 24px',
        boxShadow: '0 4px 20px rgba(229,62,62,0.4)',
      }}
    >
      (805) 550-9152
    </a>
  );
}