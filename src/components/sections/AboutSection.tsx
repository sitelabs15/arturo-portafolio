import {
  Palette,
  Megaphone,
  Globe,
  Video,
  Printer,
  Wrench,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { careerTimeline, secondaryProjects } from "@/data/timeline";

const AREAS = [
  {
    title: "Diseño Gráfico y Branding",
    icon: Palette,
    desc: "Identidad visual, logotipos, piezas publicitarias y manuales de marca.",
  },
  {
    title: "Marketing Digital y Contenido",
    icon: Megaphone,
    desc: "Estrategias visuales comerciales, fotografía de producto y campañas.",
  },
  {
    title: "Desarrollo Web",
    icon: Globe,
    desc: "Sitios en WordPress, WooCommerce, maquetación responsive y SEO.",
  },
  {
    title: "Edición Audiovisual",
    icon: Video,
    desc: "Reels de alto impacto, videos promocionales y corrección de color.",
  },
  {
    title: "Impresión Digital y Plotter",
    icon: Printer,
    desc: "Lonas, vinilos, textiles y preparación técnica de archivos de gran formato.",
  },
  {
    title: "Soporte Técnico",
    icon: Wrench,
    desc: "Armado de PC, mantenimiento de hardware, redes y diagnóstico técnico.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Sobre mí"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Conóceme"
          title="Creatividad con visión técnica."
          subtitle="Una perspectiva integral que une identidad visual, desarrollo digital y entendimiento comercial."
        />

        {/* Narrative & Focus Cards */}
        <div data-reveal-group className="grid gap-8 lg:grid-cols-12">
          {/* Narrative Block */}
          <div className="lg:col-span-7 rounded-3xl hairline bg-surface/70 p-6 md:p-10 backdrop-blur-md space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Trayectoria multidisciplinaria
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Mi trayectoria profesional se ha desarrollado en entornos donde el diseño, la
              tecnología y las necesidades comerciales se conectan.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              He trabajado en diseño gráfico, identidad visual, contenido digital, edición de video,
              administración web, impresión digital y soporte técnico. Esta combinación me permite
              comprender tanto la presentación visual de un proyecto como parte de los procesos
              necesarios para llevarlo a la práctica.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Me interesa crear soluciones que no solo se vean bien, sino que también comuniquen con
              claridad, respondan a una necesidad y aporten valor a las personas y negocios que las
              utilizan.
            </p>
          </div>

          {/* Professional Focus Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl hairline bg-gradient-to-br from-surface to-surface-2 p-6 md:p-10 shadow-soft">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full hairline bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Enfoque Profesional
              </span>
              <blockquote className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                “Combino pensamiento visual, conocimientos técnicos y orientación comercial para
                desarrollar soluciones adaptadas a cada proyecto.”
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Compromiso con la claridad y la funcionalidad</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                <span>Soluciones adaptadas a la realidad operativa del cliente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-16">
          <h3
            data-reveal
            className="text-xs uppercase font-bold tracking-[0.2em] text-muted-foreground mb-6"
          >
            Áreas de Especialidad
          </h3>
          <div data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl hairline bg-surface/50 p-5 transition-all duration-300 hover:bg-surface hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-primary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-foreground">{area.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3
            data-reveal
            className="text-xs uppercase font-bold tracking-[0.2em] text-muted-foreground mb-8"
          >
            Línea Temporal Profesional
          </h3>
          <div data-reveal-group className="grid gap-4 md:grid-cols-2">
            {careerTimeline.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl hairline bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:bg-surface"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold tracking-tight text-gradient">
                    {item.company}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full hairline bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-semibold text-foreground">{item.role}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Freelance and secondary projects from the official resume */}
          <div className="mt-10 border-t border-hairline/60 pt-10">
            <div
              data-reveal
              className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
            >
              <div className="max-w-2xl">
                <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-muted-foreground">
                  Proyectos freelance y colaboraciones
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Diseño, branding, desarrollo web y contenido realizados en paralelo a mi
                  experiencia formal.
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center rounded-full hairline bg-surface-2 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                {secondaryProjects.length} colaboraciones
              </span>
            </div>

            <div data-reveal-group className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((item) => (
                <div
                  key={item.company}
                  className="rounded-2xl hairline bg-surface/40 p-4 backdrop-blur-sm transition-colors hover:bg-surface"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                    <span className="text-sm font-bold tracking-tight text-gradient">
                      {item.company}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
