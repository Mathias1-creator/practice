import React, { useEffect, useRef, useState } from 'react';

/**
 * Wraps each word in the children string in a masked span
 * so words rise into view one-by-one on load.
 * Falls back to a simple fade if prefers-reduced-motion is set.
 */
export default function SplitWordReveal({ children, className = '', tag: Tag = 'h1', baseDelay = 0 }) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    document.fonts.ready.then(() => {
      setReady(true);
    });
  }, []);

  // Flatten children to a string (handles JSX with spans inside)
  const renderWords = () => {
    // We split the raw string passed as children
    const text = typeof children === 'string' ? children : null;
    if (!text) return children; // fallback: just render as-is

    const words = text.split(' ');
    return words.map((word, i) => (
      <span
        key={i}
        style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.25em' }}
      >
        <span
          style={{
            display: 'inline-block',
            transform: ready && !reducedMotion ? 'translateY(0)' : reducedMotion ? 'translateY(0)' : 'translateY(110%)',
            opacity: ready || reducedMotion ? 1 : 0,
            transition: reducedMotion
              ? 'opacity 0.6s ease'
              : `transform 0.8s cubic-bezier(0.65, 0, 0.35, 1) ${baseDelay + i * 80}ms, opacity 0.01s ${baseDelay + i * 80}ms`,
          }}
        >
          {word}
        </span>
      </span>
    ));
  };

  return (
    <Tag className={className}>
      {typeof children === 'string' ? renderWords() : children}
    </Tag>
  );
}