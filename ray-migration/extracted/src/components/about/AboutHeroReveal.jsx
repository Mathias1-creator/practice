import React, { useState, useEffect } from 'react';

export default function AboutHeroReveal() {
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    document.fonts.ready.then(() => {
      setReady(true);
      setTimeout(() => setShow(true), 80);
    });
  }, []);

  const line1 = ['Honest', 'Work.'];
  const line2 = ['Every', 'Time.'];

  return (
    <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
      <span style={{ display: 'block' }}>
        {line1.map((word, i) => (
          <WordMask key={i} word={word} index={i} ready={ready} show={show} reducedMotion={reducedMotion} baseDelay={100} />
        ))}
      </span>
      <span style={{ display: 'block' }}>
        {line2.map((word, i) => (
          <WordMask key={i} word={word} index={i} ready={ready} show={show} reducedMotion={reducedMotion} baseDelay={340} />
        ))}
      </span>
    </h1>
  );
}

function WordMask({ word, index, ready, show, reducedMotion, baseDelay }) {
  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        marginRight: '0.3em',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: ready && show && !reducedMotion ? 'translateY(0)' : reducedMotion ? 'translateY(0)' : 'translateY(110%)',
          opacity: (ready && show) || reducedMotion ? 1 : 0,
          transition: reducedMotion
            ? 'opacity 0.6s ease'
            : `transform 0.8s cubic-bezier(0.65, 0, 0.35, 1) ${baseDelay + index * 80}ms, opacity 0.01s ${baseDelay + index * 80}ms`,
        }}
      >
        {word}
      </span>
    </span>
  );
}