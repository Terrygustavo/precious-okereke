import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const element = elementRef.current;
    if (element) {
      const animatedElements = element.querySelectorAll('.scroll-animate');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (element) {
        const animatedElements = element.querySelectorAll('.scroll-animate');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return elementRef;
};
