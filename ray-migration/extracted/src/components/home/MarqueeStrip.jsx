import React, { useEffect, useState } from 'react';

const ITEMS = [
  'AVAILABLE 24/7',
  'LICENSED LIC# 1132312',
  '5.0 STARS',
  '18 GOOGLE REVIEWS',
  'HONEST WORK',
  'SLO COUNTY',
  'CLEAN INSTALLS',
  'RAY ANSWERS',
];

function buildContent() {
  return ITEMS.map((item, i) => (
    <React.Fragment key={i}>
      <span
        style={{
          fontFamily: 'var(--font-barlow)',
          fontWeight: 700,
          fontSize: 'clamp(40px, 5vw, 56px)',
          color: '#FFFFFF',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {item}
      </span>
      <span
        style={{
          color: '#CC2200',
          fontSize: 'clamp(40px, 5vw, 56px)',
          margin: '0 40px',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        •
      </span>
    </React.Fragment>
  ));
}

export default function MarqueeStrip() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        height: 'clamp(70px, 10vw, 100px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
      aria-hidden="true"
    >
      {reducedMotion ? (
        // Static version for reduced motion
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 40px', overflow: 'hidden' }}>
          {buildContent()}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            willChange: 'transform',
            animation: 'marquee-scroll 35s linear infinite',
            flexShrink: 0,
          }}
        >
          {/* Duplicate content for seamless loop */}
          {buildContent()}
          {buildContent()}
        </div>
      )}
    </div>
  );
}