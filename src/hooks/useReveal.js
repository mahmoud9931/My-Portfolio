import { useEffect, useRef } from 'react';

export default function useReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return elementRef;
}
