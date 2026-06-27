import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    // Horizontal top bar
    const bar = document.getElementById('scroll-progress-bar');
    // Vertical left bar (legacy, keep it but hide via CSS if desired)
    const legacyEl = document.getElementById('scroll-progress');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (bar) bar.style.width = `${progress}%`;
      if (legacyEl) legacyEl.style.height = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}