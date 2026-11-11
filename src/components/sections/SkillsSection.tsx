import {
  Palette,
  Video,
  Globe,
  FileSpreadsheet,
  Bot,
  Wrench,
  Megaphone,
  Users,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { skillGroups } from "@/data/skills";

const GROUP_ICONS: Record<string, typeof Palette> = {
  "design-branding": Palette,
  "marketing-content": Megaphone,
  "video-audiovisual": Video,
  "web-development": Globe,
  "productivity-data": FileSpreadsheet,
  "ai-assisted-dev": Bot,
  "technical-support": Wrench,
  "soft-skills": Users,
};

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Habilidades y herramientas técnicas"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Capacidades"
          title="Herramientas para convertir ideas en soluciones."
          subtitle="Conjunto de herramientas y metodologías aplicadas en producción gráfica, desarrollo y procesos digitales."
        />

        <div data-reveal-group className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.id] || Palette;
            return (
              <div
                key={group.id}
                className="group flex flex-col justify-between rounded-3xl hairline bg-surface/60 p-6 md:p-7 backdrop-blur-sm transition-all duration-300 hover:bg-surface hover:-translate-y-1 hover:shadow-soft"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-2 text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{group.title}</h3>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>

                  {/* Skills tags list */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-xl hairline bg-surface-2/70 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Check className="h-3 w-3 text-primary shrink-0" /> {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
