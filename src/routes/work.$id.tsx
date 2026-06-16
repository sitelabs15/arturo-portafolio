import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Arturo Urbina` : "Proyecto — Arturo Urbina";
    const desc = p?.overview ?? "Caso de estudio de proyecto por Arturo Urbina.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
      links: p ? [{ rel: "canonical", href: `/work/${p.id}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Proyecto no encontrado</h1>
      <Link to="/work" className="mt-6 inline-flex text-primary hover:underline">
        ← Volver a trabajos
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Todos los trabajos
      </Link>

      <header className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {project.category}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full hairline px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-right">
          <dt className="text-muted-foreground">Fecha</dt>
          <dd>{project.date}</dd>
          <dt className="text-muted-foreground">Rol</dt>
          <dd>{project.role}</dd>
          {project.client && (
            <>
              <dt className="text-muted-foreground">Cliente</dt>
              <dd>{project.client}</dd>
            </>
          )}
        </dl>
      </header>

      {/* Hero gallery */}
      <div className="mt-12 overflow-hidden rounded-3xl hairline bg-surface shadow-soft">
        <img
          src={project.gallery[0]}
          alt={project.title}
          className="h-auto w-full object-cover"
        />
      </div>

      {project.gallery.length > 1 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {project.gallery.slice(1).map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl hairline bg-surface shadow-soft"
            >
              <img
                src={src}
                alt={`${project.title} detail ${i + 1}`}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Sections */}
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <Section label="Visión general"><p>{project.overview}</p></Section>
        <Section label="Alcance">
          <ul className="space-y-2">
            {project.scope.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 inline-block h-1 w-1 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </Section>
        <Section label="Entregables">
          <ul className="space-y-2">
            {project.deliverables.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 inline-block h-1 w-1 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* CTA */}
      <section className="mt-24 overflow-hidden rounded-3xl hairline bg-surface/60 p-10 text-center backdrop-blur md:p-16">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Trabajemos juntos.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Branding, video, 3D o web — encantado de hablar. Respuesta rápida dentro de 24–48h.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:arturourbina6161@gmail.com"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-glow"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://wa.me/522212828717"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full hairline bg-surface px-5 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="https://instagram.com/urbina.art"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full hairline bg-surface px-5 text-sm"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </section>
    </article>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}
