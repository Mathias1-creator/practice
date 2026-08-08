export default function SectionLabel({ children, center = false }) {
  return (
    <p
      className={`font-body uppercase mb-4 ${center ? 'text-center' : ''}`}
      style={{ fontSize: '11px', letterSpacing: '3px', color: '#7c3aed' }}
    >
      {children}
    </p>
  );
}