/* ============================================================
   USE SCROLL REVEAL HOOK
   Custom React hook for scroll-based reveal animations
   ============================================================ */
import { useEffect, useRef } from "react";

/**
 * Hook to add scroll reveal animation to elements
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} ref - Ref to attach to element
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("sr-visible");
      return;
    }

    // Add initial scroll reveal class
    element.classList.add("sr");

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
};

/**
 * Hook to add scroll reveal to multiple child elements
 * @param {string} selector - CSS selector for child elements
 * @param {Object} options - IntersectionObserver options
 */
export const useScrollRevealChildren = (selector, options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const elements = container.querySelectorAll(selector);
      elements.forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    // Add scroll reveal classes to children
    const elements = container.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.classList.add("sr");
      const delay = index % 4;
      if (delay > 0) {
        el.classList.add(`sr-delay-${delay}`);
      }
    });

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, options.threshold, options.rootMargin]);

  return containerRef;
};

export default useScrollReveal;
