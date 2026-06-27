import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getCleanHash(hash) {
  try {
    return decodeURIComponent(hash.replace('#', ''));
  } catch {
    return hash.replace('#', '');
  }
}

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        const id = getCleanHash(hash);
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 90;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key]);

  return null;
}