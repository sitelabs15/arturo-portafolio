import { useState } from "react";
import { ArrowUpRight, ChevronDown, FolderGit2 } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { ProjectDialog } from "@/components/portfolio/ProjectDialog";
import type { SectionId } from "@/hooks/useActiveSection";

const PREVIEW_COUNT = 4;

/** Picks the cover plus evenly-spread images from the gallery for the card collage. */
function getPreviewImages(project: Project): string[] {
  const allImages = Array.from(new Set([project.cover, ...project.gallery].filter(Boolean)));
  if (allImages.length <= PREVIEW_COUNT) return allImages;

  const rest = allImages.filter((image) => image !== project.cover);
  const spread = [0.2, 0.5, 0.8].map((position) => rest[Math.floor(position * (rest.length - 1))]);

  return Array.from(new Set([project.cover, ...spread])).slice(0, PREVIEW_COUNT);
}

export function PortfolioSection({
  onSelectService,
}: {
  onSelectService: (service: string, section: SectionId) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Todos">("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "Todos" ? projects : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, PREVIEW_COUNT);
  const hasMore = filteredProjects.length > PREVIEW_COUNT;

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleFilterChange = (category: ProjectCategory | "Todos") => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
    <section
      id="portafolio"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Portafolio de proyectos"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Trabajo seleccionado"
          title="Proyectos que conectan diseño, tecnología y resultados."
          subtitle="Una selección de proyectos de diseño, branding, desarrollo web y contenido audiovisual."
        />

        {/* Category Filters */}
        <div data-reveal className="flex flex-wrap items-center gap-2 pb-8">
          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleFilterChange(cat.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "gradient-brand text-white shadow-glow"
                    : "hairline bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid — 4-project preview */}
        <div data-reveal-group className="portfolio-grid gap-5">
          {visibleProjects.map((project, i) => {
            const previewImages = getPreviewImages(project);
            const imageCount = previewImages.length;
            const gridClass =
              imageCount >= 3
                ? "grid-cols-2 grid-rows-2"
                : imageCount === 2
                  ? "grid-cols-2 grid-rows-1"
                  : "grid-cols-1";

            return (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => handleOpenProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenProject(project);
                  }
                }}
                className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-3xl hairline bg-surface/70 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface hover:shadow-elevated hover:border-white/20 select-none"
              >
                <div>
                  {/* Cover collage: several images from the project's gallery */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                    <div className={`grid h-full w-full gap-[2px] ${gridClass}`}>
                      {previewImages.map((src, idx) => (
                        <div
                          key={`${src}-${idx}`}
                          className={`relative overflow-hidden bg-surface-2 ${
                            imageCount === 3 && idx === 0 ? "col-span-2" : ""
                          }`}
                        >
                          <img
                            src={src}
                            alt={`${project.title} — imagen ${idx + 1}`}
                            loading={i === 0 && idx === 0 ? "eager" : "lazy"}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080914]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 72% 12%, rgba(236,54,201,0.18), transparent 55%), radial-gradient(circle at 18% 82%, rgba(121,40,255,0.22), transparent 60%)",
                      }}
                    />

                    {/* Corner arrow button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(project);
                      }}
                      className="absolute right-3.5 top-3.5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full hairline bg-[#080914]/85 text-foreground backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:scale-110 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-soft"
                      aria-label={`Ver detalles del proyecto ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    {/* Year badge */}
                    <div className="absolute left-3.5 bottom-3.5 rounded-md hairline bg-[#080914]/80 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-md">
                      {project.date}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap">
                        {project.category}
                      </span>
                      <span className="text-auxiliary">•</span>
                      <span className="truncate text-[11px] text-muted-foreground">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {project.overview}
                    </p>

                    {/* Tools / Tags preview */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-md hairline bg-surface-2 px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: View Details Button */}
                <div className="border-t border-hairline px-5 py-3.5 flex items-center justify-between text-xs text-muted-foreground group-hover:text-foreground">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 font-semibold text-xs text-foreground group-hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>Ver caso completo</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <span className="text-[10px] text-auxiliary font-mono">
                    {project.gallery.length} fotos
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show all / collapse */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full hairline bg-surface/70 px-6 py-3 text-xs font-semibold text-foreground transition-all hover:bg-surface hover:border-white/20 hover:shadow-soft cursor-pointer"
              aria-expanded={showAll}
            >
              {showAll
                ? "Ver menos proyectos"
                : `Ver todos los proyectos (${filteredProjects.length})`}
              <ChevronDown
                className={`h-4 w-4 text-primary transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Empty state if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="rounded-3xl hairline bg-surface/40 p-12 text-center">
            <FolderGit2 className="mx-auto h-8 w-8 text-auxiliary" />
            <p className="mt-4 text-sm text-muted-foreground">
              No hay proyectos en esta categoría por el momento.
            </p>
          </div>
        )}
      </div>

      {/* Detail Dialog Modal */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactSimilar={(category) => {
          onSelectService(category, "contacto");
        }}
      />
    </section>
  );
}
