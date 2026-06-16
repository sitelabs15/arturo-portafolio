import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ 
  project, 
  eager = false,
  onClick 
}: { 
  project: Project; 
  eager?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
        <img
          src={project.cover}
          alt={project.title}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </p>
          <h3 className="mt-1 truncate text-base font-medium">{project.title}</h3>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        className="text-left group relative block overflow-hidden rounded-2xl hairline bg-surface shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-glow w-full"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      to="/work/$id"
      params={{ id: project.id }}
      className="group relative block overflow-hidden rounded-2xl hairline bg-surface shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-glow"
    >
      {content}
    </Link>
  );
}
