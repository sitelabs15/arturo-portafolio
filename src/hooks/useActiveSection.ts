import { useEffect, useState } from "react";

export type SectionId =
  | "inicio"
  | "sobre-mi"
  | "servicios"
  | "portafolio"
  | "habilidades"
  | "certificados"
  | "cartas-de-recomendacion"
  | "contacto";

export const SECTION_IDS: SectionId[] = [
  "inicio",
  "sobre-mi",
  "servicios",
  "portafolio",
  "habilidades",
  "certificados",
  "cartas-de-recomendacion",
  "contacto",
];

export function useActiveSection(initialSection: SectionId = "inicio") {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top, activate inicio
      if (window.scrollY < 180) {
        setActiveSection("inicio");
        return;
      }

      // If scrolled close to bottom, activate contacto
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140) {
        setActiveSection("contacto");
        return;
      }

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "-15% 0px -50% 0px",
        threshold: 0,
      };

      const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        Boolean,
      ) as HTMLElement[];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      }, observerOptions);

      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };

    const cleanup = handleScroll();

    // Fallback scroll listener
    const onScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    try {
      window.history.pushState(null, "", `#${id}`);
    } catch {
      // safe fallback
    }
  };

  return { activeSection, scrollToSection };
}
