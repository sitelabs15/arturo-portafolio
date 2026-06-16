import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route } from "./router-Cnx6bm0O.mjs";
import { g as ArrowLeft, a as Mail, b as MessageCircle, I as Instagram } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ProjectDetail() {
  const {
    project
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-6xl px-6 pt-16 md:pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " All work"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: project.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl", children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full hairline px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: project.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: project.role }),
        project.client && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: project.client })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl hairline bg-surface shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.gallery[0], alt: project.title, className: "h-auto w-full object-cover" }) }),
    project.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 sm:grid-cols-2", children: project.gallery.slice(1).map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl hairline bg-surface shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${project.title} detail ${i + 1}`, loading: "lazy", className: "h-auto w-full object-cover" }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { label: "Overview", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: project.overview }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { label: "Scope", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: project.scope.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block h-1 w-1 rounded-full bg-primary" }),
        s
      ] }, s)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { label: "Deliverables", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: project.deliverables.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block h-1 w-1 rounded-full bg-accent" }),
        s
      ] }, s)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24 overflow-hidden rounded-3xl hairline bg-surface/60 p-10 text-center backdrop-blur md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl font-semibold tracking-tight md:text-5xl", children: "Let's work together." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Branding, video, 3D or web — happy to chat. Fast reply within 24–48h." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:arturourbina6161@gmail.com", className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          " Email"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/522212828717", target: "_blank", rel: "noreferrer", className: "inline-flex h-11 items-center gap-2 rounded-full hairline bg-surface px-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/urbina.art", target: "_blank", rel: "noreferrer", className: "inline-flex h-11 items-center gap-2 rounded-full hairline bg-surface px-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
          " Instagram"
        ] })
      ] })
    ] })
  ] });
}
function Section({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-foreground/90 leading-relaxed", children })
  ] });
}
export {
  ProjectDetail as component
};
