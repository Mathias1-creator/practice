import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      const tag = e.target.closest('a, button, [role="button"], img');
      setHovering(!!tag);
    };

    let raf;
    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.15;
      current.current.y += (pos.current.y - current.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.left = current.current.x + 'px';
        cursorRef.current.style.top = current.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-200"
      style={{
        width: hovering ? '36px' : '14px',
        height: hovering ? '36px' : '14px',
        borderRadius: '50%',
        border: hovering ? 'none' : '1.5px solid #5bc8f5',
        backgroundColor: hovering ? 'rgba(91,200,245,0.15)' : 'transparent',
        mixBlendMode: 'normal',
      }}
    />
  );
}