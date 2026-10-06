import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ((window as any).__lenis) {
      try {
        (window as any).__lenis.scrollTo(0, { immediate: true });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
};
