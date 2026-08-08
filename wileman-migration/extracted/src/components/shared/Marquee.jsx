const ITEMS = [
  'EMERGENCY SERVICE 24/7',
  'DRAIN CLEANING',
  'LEAK DETECTION',
  'SEWER SCOPING',
  'LICENSED & BONDED',
  'CA LICENSE# 1081234',
  'SERVING SLO COUNTY',
  'GUARANTEED WORK',
  'NEW CONSTRUCTION',
  'REMODELS',
];

function MarqueeContent() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <span className="font-heading text-lg tracking-[3px]" style={{ color: '#5bc8f5' }}>
            {item}
          </span>
          <span style={{ color: '#5bc8f5' }}>◆</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div
      className="w-full overflow-hidden py-[18px]"
      style={{
        backgroundColor: '#0a1628',
        borderTop: '1px solid rgba(91,200,245,0.12)',
        borderBottom: '1px solid rgba(91,200,245,0.12)',
      }}
    >
      <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}