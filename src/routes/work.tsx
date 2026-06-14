import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Arturo Urbina" },
      {
        name: "description",
        content:
          "Selected projects by Arturo Urbina: image & logo design, video, 3D render builds and web projects.",
      },
      { property: "og:title", content: "Work — Arturo Urbina" },
      {
        property: "og:description",
        content: "Selected branding, video, 3D and web projects by Arturo Urbina.",
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

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Selected work
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
          Brand, motion, 3D & the web.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A growing archive of design work across categories. Filter to dig in.
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
            Year
          </span>
          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value === "All" ? "All" : Number(e.target.value))
            }
            className="rounded-full hairline bg-surface/60 px-3 py-2 text-sm text-foreground outline-none"
          >
            <option value="All">All</option>
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
          <ProjectCard key={p.id} project={p} eager={i < 3} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No projects match that filter yet.
        </p>
      )}
    </section>
  );
}
