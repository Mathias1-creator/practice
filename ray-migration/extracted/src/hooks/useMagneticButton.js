import { useEffect, useRef } from 'react';

/**
 * Applies a magnetic hover effect to a button element.
 * Returns a ref to attach to the target element.
 * Disabled on touch devices and screens < 768px.
 */
export default function useMagneticButton({ strength = 0.3, radius = 80 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on touch / narrow screens
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    let animFrame = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      if (!isHovering && Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
        currentX = 0;
        currentY = 0;
        el.style.transform = 'translate(0px, 0px)';
        return;
      }
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
      animFrame = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const edgeDist = Math.max(
        0,
        dist - Math.min(rect.width, rect.height) / 2
      );

      if (edgeDist < radius) {
        isHovering = true;
        const pull = (1 - edgeDist / radius);
        targetX = dx * strength * pull;
        targetY = dy * strength * pull;
        // Clamp to 8px max
        const mag = Math.sqrt(targetX * targetX + targetY * targetY);
        if (mag > 8) {
          targetX = (targetX / mag) * 8;
          targetY = (targetY / mag) * 8;
        }
        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(animate);
      } else {
        isHovering = false;
        targetX = 0;
        targetY = 0;
        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(animate);
      }
    };

    const onMouseLeave = () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [strength, radius]);

  return ref;
}