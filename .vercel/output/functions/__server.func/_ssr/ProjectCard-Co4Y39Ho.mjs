import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as ArrowUpRight } from "../_libs/lucide-react.mjs";
function ProjectCard({ project, eager = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/work/$id",
      params: { id: project.id },
      className: "group relative block overflow-hidden rounded-2xl hairline bg-surface shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-glow",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-surface-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.cover,
              alt: project.title,
              loading: eager ? "eager" : "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-muted-foreground", children: project.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 truncate text-base font-medium", children: project.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs text-muted-foreground", children: project.year })
        ] })
      ]
    }
  );
}
export {
  ProjectCard as P
};
