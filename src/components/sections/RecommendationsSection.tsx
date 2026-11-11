import { FileText, ExternalLink, Quote, BadgeCheck, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { recommendations, recommendationsPdfUrl } from "@/data/recommendations";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function RecommendationsSection() {
  return (
    <section
      id="cartas-de-recomendacion"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Cartas de recomendación"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Cartas de recomendación"
          title="Lo que dicen quienes han trabajado conmigo."
          subtitle="Cartas emitidas por directores, jefes de producción y responsables de las empresas donde he colaborado."
        />

        <div data-reveal className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-auxiliary">
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            {recommendations.length} cartas verificadas · Documentos originales
          </p>

          <a
            href={recommendationsPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-xs font-semibold text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="h-4 w-4" />
            Ver PDF originales
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div data-reveal-group className="grid gap-5 md:grid-cols-2">
          {recommendations.map((letter) => (
            <article
              key={letter.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl hairline bg-surface/60 p-6 md:p-7 backdrop-blur-sm transition-all duration-300 hover:bg-surface hover:-translate-y-1 hover:shadow-soft"
            >
              {/* Subtle corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

              <div>
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-primary/70" />
                  <span className="inline-flex items-center gap-1.5 rounded-full hairline bg-surface-2 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {letter.date}
                  </span>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  “{letter.quote}”
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-brand text-[11px] font-black text-white">
                  {getInitials(letter.author)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{letter.author}</p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {letter.role} · {letter.company}
                  </p>
                  {letter.contact && (
                    <a
                      href={`mailto:${letter.contact}`}
                      className="mt-0.5 block truncate text-[10px] text-auxiliary transition-colors hover:text-primary"
                    >
                      {letter.contact}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl hairline bg-surface/40 px-5 py-4 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Los documentos originales firmados se encuentran disponibles en el archivo PDF para su
            consulta y validación.
          </p>
          <a
            href={recommendationsPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-foreground"
          >
            Ver PDF originales
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
