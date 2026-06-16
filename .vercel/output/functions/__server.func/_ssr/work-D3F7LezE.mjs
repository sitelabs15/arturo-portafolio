import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as ProjectCard } from "./ProjectCard-Co4Y39Ho.mjs";
import { p as projects, c as categories } from "./router-Cnx6bm0O.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function WorkPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [year, setYear] = reactExports.useState("All");
  const years = reactExports.useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), []);
  const filtered = reactExports.useMemo(() => projects.filter((p) => (filter === "All" || p.category === filter) && (year === "All" || p.year === year)), [filter, year]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-16 md:pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Selected work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl", children: "Brand, motion, 3D & the web." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "A growing archive of design work across categories. Filter to dig in." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c.key), className: `rounded-full px-4 py-2 text-sm transition-all duration-200 ease-out-soft hairline ${filter === c.key ? "bg-foreground text-background" : "bg-surface/60 text-muted-foreground hover:text-foreground hover:bg-surface"}`, children: c.label }, c.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Year" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: year, onChange: (e) => setYear(e.target.value === "All" ? "All" : Number(e.target.value)), className: "rounded-full hairline bg-surface/60 px-3 py-2 text-sm text-foreground outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All" }),
          years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: y, children: y }, y))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, eager: i < 3 }, p.id)) }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center text-muted-foreground", children: "No projects match that filter yet." })
  ] });
}
export {
  WorkPage as component
};
