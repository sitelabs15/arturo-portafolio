import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  Tag,
  Wrench,
} from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectDialog({
  project,
  onClose,
  onContactSimilar,
}: {
  project: Project | null;
  onClose: () => void;
  onContactSimilar: (service: string) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null);
        } else {
          onClose();
        }
      }
      if (activeImageIndex !== null && project) {
        if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : project.gallery.length - 1,
          );
        } else if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) =>
            prev !== null && prev < project.gallery.length - 1 ? prev + 1 : 0,
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, onClose, project]);

  // Lock scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project || !mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <div
          className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl hairline bg-[#0D1020] shadow-2xl lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full hairline bg-[#080914]/90 text-foreground backdrop-blur-md transition-all hover:bg-surface-2 hover:scale-105 cursor-pointer shadow-soft"
            aria-label="Cerrar detalles del proyecto"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Left: Gallery Column */}
          <div className="flex-1 overflow-y-auto bg-[#080914] p-4 sm:p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                Galería de recursos ({project.gallery.length} piezas)
              </span>
              <span className="text-[11px] text-auxiliary">
                Haz clic para ampliar en pantalla completa
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl hairline bg-surface/50"
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} - Imagen ${idx + 1}`}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <div className="rounded-full bg-white/20 p-2.5 backdrop-blur-md text-white">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Project Metadata & Description */}
          <div className="w-full shrink-0 overflow-y-auto border-t border-hairline bg-[#0D1020] p-6 lg:w-[420px] lg:border-l lg:border-t-0 lg:p-8">
            {/* Category & Year */}
            <div className="flex items-center gap-2">
              <span className="rounded-full gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
            </div>

            {/* Title & Client */}
            <h2
              id="project-dialog-title"
              className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-xs font-semibold text-primary">Cliente: {project.client}</p>

            {/* Overview */}
            <div className="mt-6 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>{project.overview}</p>
            </div>

            {/* Results if documented */}
            {project.results && project.results.length > 0 && (
              <div className="mt-6 rounded-2xl hairline bg-surface/60 p-4">
                <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                  Resultados documentados
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-foreground">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="font-medium">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scope / Trabajo realizado */}
            {project.scope && project.scope.length > 0 && (
              <div className="mt-6 border-t border-hairline pt-5">
                <p className="text-[10px] uppercase font-bold tracking-wider text-auxiliary">
                  Alcance del proyecto
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.scope.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-lg hairline bg-surface px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      <Tag className="h-3 w-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {project.tools && project.tools.length > 0 && (
              <div className="mt-5 border-t border-hairline pt-5">
                <p className="text-[10px] uppercase font-bold tracking-wider text-auxiliary">
                  Herramientas utilizadas
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tools.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-lg hairline bg-surface px-2.5 py-1 text-[11px] text-foreground font-medium"
                    >
                      <Wrench className="h-3 w-3 text-cyan" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-hairline">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactSimilar(project.category);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl gradient-brand py-3 text-xs font-semibold text-white shadow-glow transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                Consultar sobre un proyecto similar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 z-[10000] rounded-full hairline bg-white/10 p-2.5 text-white hover:bg-white/20 cursor-pointer"
            aria-label="Cerrar visor de imagen"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev / Next controls */}
          {project.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : project.gallery.length - 1,
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full hairline bg-white/10 p-3 text-white hover:bg-white/20 cursor-pointer"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev !== null && prev < project.gallery.length - 1 ? prev + 1 : 0,
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full hairline bg-white/10 p-3 text-white hover:bg-white/20 cursor-pointer"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[activeImageIndex]}
              alt={`${project.title} detalle`}
              className="max-h-[85vh] max-w-full object-contain mx-auto"
            />
            <p className="mt-3 text-center text-xs text-muted-foreground font-mono">
              {activeImageIndex + 1} de {project.gallery.length}
            </p>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
