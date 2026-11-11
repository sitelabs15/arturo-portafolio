import { useState } from "react";
import { GraduationCap, BookOpen, Building2, Calendar, FileCheck, X, Info } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  educationList,
  educationCategories,
  type EducationItem,
  type EducationCategory,
} from "@/data/education";

export function CertificatesSection() {
  const [selectedFilter, setSelectedFilter] = useState<EducationCategory | "Todos">("Todos");
  const [activeItem, setActiveItem] = useState<EducationItem | null>(null);

  const filteredItems =
    selectedFilter === "Todos"
      ? educationList
      : educationList.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="certificados"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Certificados y formación profesional"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Formación continua"
          title="Aprendizaje aplicado al trabajo creativo."
          subtitle="Formación académica formal y capacitaciones especializadas en herramientas, metodologías y procesos creativos."
        />

        {/* Filter Bar */}
        <div data-reveal className="flex flex-wrap items-center gap-2 pb-8">
          {educationCategories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "gradient-brand text-white shadow-glow"
                    : "hairline bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Cards */}
        <div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isAcademic = item.type === "academic";
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group cursor-pointer flex flex-col justify-between rounded-3xl hairline p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  isAcademic
                    ? "bg-gradient-to-b from-surface to-surface-2 border-primary/30 hover:border-primary/60 shadow-soft"
                    : "bg-surface/60 hover:bg-surface hover:shadow-soft"
                }`}
              >
                <div>
                  {/* Category Pill & Type */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isAcademic
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "hairline bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      {isAcademic ? (
                        <GraduationCap className="h-3 w-3" />
                      ) : (
                        <BookOpen className="h-3 w-3" />
                      )}
                      {item.category}
                    </span>

                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 shrink-0 text-cyan" />
                    <span className="truncate">{item.institution}</span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Honest Verification Note */}
                <div className="mt-6 border-t border-hairline pt-4 flex items-center justify-between text-[11px] text-auxiliary">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <FileCheck className="h-3.5 w-3.5 text-primary" />
                    Ver constancia
                  </span>
                  <span className="text-[10px]">Detalles →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg rounded-3xl hairline bg-[#0D1020] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 rounded-full hairline bg-surface p-2 text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              aria-label="Cerrar ventana de constancia"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-full gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {activeItem.category}
              </span>
              <span className="text-xs text-emerald-400 font-medium">{activeItem.status}</span>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
              {activeItem.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Building2 className="h-4 w-4 text-cyan shrink-0" />
              <span>{activeItem.institution}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {activeItem.description}
            </p>

            {/* Verification Status */}
            <div className="mt-6 rounded-2xl hairline bg-surface/70 p-4 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <Info className="h-4 w-4 text-primary" />
                <span>Estado de Acreditación</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activeItem.documentNote}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="rounded-xl hairline bg-surface px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
