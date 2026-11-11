import { createFileRoute } from "@tanstack/react-router";
import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";
import { useParallax, useScrollReveal } from "@/hooks/useMotionEffects";
import { DesktopSidebar } from "@/components/layout/DesktopSidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Arturo Urbina Reyes | Diseño Digital, Branding y Web",
      },
      {
        name: "description",
        content:
          "Portafolio profesional de Arturo Urbina Reyes, diseñador digital en Puebla, México. Diseño gráfico, identidad visual, desarrollo web y contenido audiovisual.",
      },
      {
        property: "og:title",
        content: "Arturo Urbina Reyes | Diseño Digital, Branding y Web",
      },
      {
        property: "og:description",
        content:
          "Diseño digital, branding y experiencias web por Arturo Urbina Reyes en Puebla, México.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "author", content: "Arturo Urbina Reyes" },
    ],
  }),
  component: PortfolioHomePage,
});

function PortfolioHomePage() {
  const { activeSection, scrollToSection } = useActiveSection("inicio");
  useScrollReveal();
  useParallax();

  const handleSelectService = (_serviceTitle: string, targetSection: SectionId) => {
    scrollToSection(targetSection);
  };

  return (
    <div className="min-h-screen bg-[#080914] text-foreground selection:bg-primary/30 selection:text-white">
      {/* Ambient neon lighting layer */}
      <AmbientBackground />

      {/* Persistent Desktop Sidebar */}
      <DesktopSidebar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Top Mobile Navigation Header */}
      <MobileHeader activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <div className="relative z-10 lg:pl-[250px] transition-all">
        <main className="relative min-h-screen">
          {/* Section 01: Inicio */}
          <HeroSection onNavigate={scrollToSection} />

          {/* Section 02: Sobre mí */}
          <AboutSection />

          {/* Section 03: Servicios */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Section 04: Portafolio */}
          <PortfolioSection onSelectService={handleSelectService} />

          {/* Section 05: Habilidades */}
          <SkillsSection />

          {/* Section 06: Certificados y formación */}
          <CertificatesSection />

          {/* Section 07: Cartas de recomendación */}
          <RecommendationsSection />

          {/* Section 08: Contacto */}
          <ContactSection />
        </main>

        {/* Minimalist Site Footer */}
        <SiteFooter />
      </div>
    </div>
  );
}
