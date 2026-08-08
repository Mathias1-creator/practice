import { useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

export default function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [inView, controls]);

  return { ref, controls };
}