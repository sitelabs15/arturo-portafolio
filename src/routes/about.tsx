import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Arturo Urbina" },
      {
        name: "description",
        content:
          "Sobre Arturo Urbina — estudiante de ingeniería de software en DASC y diseñador multidisciplinario en branding, video, 3D y web.",
      },
      { property: "og:title", content: "Sobre mí — Arturo Urbina" },
      {
        property: "og:description",
        content:
          "Estudiante de ingeniería de software en DASC y diseñador multidisciplinario.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const experience = [
  { role: "Técnico", detail: "Soporte de hardware y sistemas en pequeños estudios." },
  { role: "Diseñador Gráfico", detail: "Branding, merch y publicidad para tiendas y creadores." },
  { role: "Diseñador 3D y Render", detail: "Visualización arquitectónica y renders de producto en Blender." },
  { role: "Editor de Video", detail: "YouTube, podcasts, TikTok/Reels para múltiples canales." },
  { role: "Diseñador Web", detail: "Sitios de marketing y tiendas e-commerce." },
];



function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Sobre mí</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
        Hola, soy Arturo — diseñador, editor & ingeniero en formación.
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Soy estudiante de ingeniería de software en DASC. Durante los últimos cuatro años he trabajado como técnico, editor, diseñador gráfico, artista 3D, renderista y editor de video para medios digitales. Me importa la claridad, la moderación y los pequeños detalles que hacen que una pieza se sienta terminada.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="rounded-3xl hairline bg-surface/60 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Qué hago
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><span className="text-foreground">Branding</span> — sistemas de identidad, logos, merch.</li>
            <li><span className="text-foreground">3D</span> — renders arquitectónicos y de producto.</li>
            <li><span className="text-foreground">Video</span> — formato largo, podcasts, redes sociales.</li>
            <li><span className="text-foreground">Web</span> — sitios de marketing y e-commerce.</li>
          </ul>
        </div>

        <div className="rounded-3xl hairline bg-surface/60 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Actualmente
          </p>
          <p className="mt-5 text-sm text-foreground">
            Estudiando Ingeniería de Software en DASC (Sábados), 24 años, basado en
            Puebla. Tomando proyectos freelance de branding, video y web a nivel mundial.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Experiencia
        </p>
        <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
          {experience.map((e) => (
            <li key={e.role} className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-8">
              <p className="text-sm font-medium text-foreground">{e.role}</p>
              <p className="text-sm text-muted-foreground">{e.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          to="/work"
          className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background"
        >
          Ver Trabajo
        </Link>
        <Link
          to="/contact"
          className="inline-flex h-11 items-center rounded-full hairline bg-surface/60 px-6 text-sm font-medium"
        >
          Contacto
        </Link>
      </div>
    </section>
  );
}
