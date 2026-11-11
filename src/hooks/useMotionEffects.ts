import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal], [data-reveal-group]";

/**
 * Reveals elements marked with `data-reveal` and staggers the direct children
 * of `data-reveal-group` containers once they enter the viewport.
 * Uses IntersectionObserver and CSS animations only (no layout thrashing).
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

/**
 * Subtle depth movement for decorative background elements.
 * Disabled on reduced-motion and coarse-pointer (mobile) devices.
 */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (elements.length === 0) return;

    let frame = 0;

    const update = () => {
      const offset = Math.min(window.scrollY, 1400);
      elements.forEach((element) => {
        const speed = Number(element.dataset.parallax ?? 0);
        element.style.translate = `0 ${(offset * speed).toFixed(2)}px`;
      });
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      elements.forEach((element) => {
        element.style.translate = "";
      });
    };
  }, []);
}
