import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/projects";

import { CompanyModal } from "@/components/CompanyModal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Trabajo — Arturo Urbina" },
      {
        name: "description",
        content:
          "Proyectos seleccionados de Arturo Urbina: diseño de imagen y logo, video, renders 3D y proyectos web.",
      },
      { property: "og:title", content: "Trabajo — Arturo Urbina" },
      {
        property: "og:description",
        content: "Proyectos de branding, video, 3D y web seleccionados por Arturo Urbina.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [year, setYear] = useState<"All" | number>("All");
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const years = useMemo(
    () => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "All" || p.category === filter) &&
          (year === "All" || p.year === year),
      ),
    [filter, year],
  );

  const handleProjectClick = (p: typeof projects[0]) => {
    setSelectedClient(p.client || p.title);
  };

  const modalProjects = selectedClient 
    ? projects.filter(p => (p.client || p.title) === selectedClient)
    : [];

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 relative">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trabajo seleccionado
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
          Marca, motion, 3D & web.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Un archivo en crecimiento de trabajo de diseño en varias categorías. Filtra para explorar.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ease-out-soft hairline ${
                filter === c.key
                  ? "bg-foreground text-background"
                  : "bg-surface/60 text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Año
          </span>
          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value === "All" ? "All" : Number(e.target.value))
            }
            className="rounded-full hairline bg-surface/60 px-3 py-2 text-sm text-foreground outline-none"
          >
            <option value="All">Todos</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard 
            key={p.id} 
            project={p} 
            eager={i < 3} 
            onClick={() => handleProjectClick(p)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          Aún no hay proyectos que coincidan con este filtro.
        </p>
      )}

      {selectedClient && (
        <CompanyModal
          client={selectedClient}
          projects={modalProjects}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </section>
  );
}
