import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arturo Urbina" },
      {
        name: "description",
        content:
          "About Arturo Urbina — software-engineering student at DASC and multidisciplinary designer working on brand, video, 3D and web.",
      },
      { property: "og:title", content: "About — Arturo Urbina" },
      {
        property: "og:description",
        content:
          "Software-engineering student at DASC and multidisciplinary designer.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const experience = [
  { role: "Technician", detail: "Hardware & systems support across small studios." },
  { role: "Graphic Designer", detail: "Branding, merch and publicity for retail & creator brands." },
  { role: "3D Designer & Renderer", detail: "Architectural visualisation and product renders in Blender." },
  { role: "Video Editor", detail: "YouTube long-form, podcasts, TikTok/Reels for multiple channels." },
  { role: "Web Designer", detail: "Marketing sites and e-commerce storefronts." },
];



function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
        Hi, I'm Arturo — designer, editor & engineer-in-training.
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        I'm a software-engineering student at DASC. For the past four years I've worked
        as a technician, editor, graphic designer, 3D artist, renderer and video editor
        for digital media. I care about clarity, restraint and the small details that
        make a piece feel finished.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="rounded-3xl hairline bg-surface/60 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            What I do
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><span className="text-foreground">Branding</span> — identity systems, logos, merch.</li>
            <li><span className="text-foreground">3D</span> — architectural and product renders.</li>
            <li><span className="text-foreground">Video</span> — long-form, podcasts, short-form social.</li>
            <li><span className="text-foreground">Web</span> — marketing sites and e-commerce.</li>
          </ul>
        </div>

        <div className="rounded-3xl hairline bg-surface/60 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Currently
          </p>
          <p className="mt-5 text-sm text-foreground">
            Studying Software Engineering at DASC (Saturdays), 24 years old, based in
            Puebla. Taking on freelance branding, video and web projects worldwide.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Experience
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
          View Work
        </Link>
        <Link
          to="/contact"
          className="inline-flex h-11 items-center rounded-full hairline bg-surface/60 px-6 text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
