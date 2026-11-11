import {
  Palette,
  Globe,
  TrendingUp,
  Video,
  Printer,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { services, type ServiceItem } from "@/data/services";
import type { SectionId } from "@/hooks/useActiveSection";

const ICON_MAP: Record<string, typeof Palette> = {
  branding: Palette,
  web: Globe,
  marketing: TrendingUp,
  video: Video,
  print: Printer,
  tech: Wrench,
};

export function ServicesSection({
  onSelectService,
}: {
  onSelectService: (serviceTitle: string, sectionId: SectionId) => void;
}) {
  return (
    <section
      id="servicios"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Servicios profesionales"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Qué puedo hacer"
          title="Servicios para construir una presencia digital sólida."
          subtitle="Soluciones visuales y digitales adaptadas a las necesidades de cada negocio."
        />

        <div data-reveal-group className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: ServiceItem) => {
            const Icon = ICON_MAP[service.id] || Palette;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl hairline p-7 transition-all duration-300 hover:-translate-y-1 ${
                  service.isComplementary
                    ? "bg-surface/40 hover:bg-surface/70"
                    : "bg-surface/70 hover:bg-surface hover:shadow-soft"
                }`}
              >
                <div>
                  {/* Top: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-auxiliary">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-6 space-y-2 border-t border-hairline pt-5">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-auxiliary">
                      Capacidades clave
                    </p>
                    <ul className="space-y-1.5 text-xs text-foreground/85">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Action */}
                <div className="mt-8 pt-5 border-t border-hairline">
                  <button
                    onClick={() => onSelectService(service.title, "contacto")}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-foreground group-hover:text-primary transition-colors"
                  >
                    <span>Consultar servicio</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
