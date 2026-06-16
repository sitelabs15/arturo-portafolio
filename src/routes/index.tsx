import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { featured } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arturo Urbina — Diseñador & Creador Multimedia" },
      {
        name: "description",
        content:
          "Branding, renders 3D, edición de video y proyectos web por Arturo Urbina, estudiante de ingeniería de software y diseñador multimedia de Puebla, México.",
      },
      { property: "og:title", content: "Arturo Urbina — Diseñador & Creador Multimedia" },
      {
        property: "og:description",
        content:
          "Branding, renders 3D, edición de video y proyectos web por Arturo Urbina.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const skills = [
  "Branding",
  "Diseño de Logo",
  "Merch",
  "Miniaturas",
  "TikTok / Reels",
  "Renders 3D",
  "Tiendas Web",
  "Edición de Video",
];

const tools = ["Adobe Suite", "Photoshop", "Illustrator", "Premiere", "After Effects", "Blender", "Figma"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="aurora absolute inset-0 -z-10" />
        <div className="grain absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-32 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponible para nuevos proyectos · Q3 2026
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-7xl lg:text-[88px] lg:leading-[0.95] animate-rise">
              Arturo Urbina<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl animate-rise [animation-delay:80ms]">
              Diseñador & creador multimedia enfocado en{" "}
              <span className="text-foreground">branding</span>,{" "}
              <span className="text-foreground">renders 3D</span>,{" "}
              <span className="text-foreground">edición de video</span> y{" "}
              <span className="text-foreground">proyectos web</span>. Estudiante de ingeniería
              de software en DASC, basado en Puebla.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-rise [animation-delay:160ms]">
              <Link
                to="/work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-200 ease-out-soft hover:opacity-90"
              >
                Ver Trabajo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center rounded-full hairline bg-surface/60 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface"
              >
                Contacto
              </Link>
              <a
                href="https://cv-web-arturo.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full hairline bg-primary/10 px-6 text-sm font-medium text-primary transition-colors hover:bg-primary/20 backdrop-blur"
              >
                Volver al CV
              </a>
            </div>

            {/* Skills row */}
            <div className="mt-16 flex flex-wrap gap-2 animate-rise [animation-delay:220ms]">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative aspect-[4/5] overflow-hidden rounded-3xl hairline shadow-2xl animate-rise [animation-delay:200ms]">
            <img 
              src="/foto.jpg" 
              alt="Arturo Urbina" 
              className="h-full w-full object-cover transition-transform duration-700 ease-out-soft hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Trabajo destacado
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Proyectos seleccionados.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            Ver todo el trabajo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} eager={i < 2} />
          ))}
        </div>
      </section>

      {/* TOOLS / HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 rounded-3xl hairline bg-surface/60 p-8 backdrop-blur md:grid-cols-3 md:p-12">
          <div>
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Un oficio multidisciplinario.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Años de trabajo en marca, video, 3D y web — construidos en torno a un solo
              gusto por la claridad y el detalle silencioso.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Stat label="Proyectos lanzados" value="40+" />
            <Stat label="Años diseñando" value="4" />
            <Stat label="Marcas atendidas" value="15+" />
            <Stat label="Reels & shorts" value="100+" />
            <Stat label="Escenas de render" value="20+" />
            <Stat label="Desarrollos web" value="6" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Herramientas que uso
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full hairline px-3 py-1.5 text-xs text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
