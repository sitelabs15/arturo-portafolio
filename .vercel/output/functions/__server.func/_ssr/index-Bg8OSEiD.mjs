import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as ProjectCard } from "./ProjectCard-Co4Y39Ho.mjs";
import { f as featured } from "./router-Cnx6bm0O.mjs";
import { e as ArrowRight, f as Sparkles } from "../_libs/lucide-react.mjs";
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
const skills = ["Branding", "Logo Design", "Merch", "Thumbnails", "TikTok / Reels", "3D Rendering", "Web Stores", "Video Editing"];
const tools = ["Adobe Suite", "Photoshop", "Illustrator", "Premiere", "After Effects", "Blender", "Figma"];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aurora absolute inset-0 -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain absolute inset-0 -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          "Available for new projects · Q3 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-7xl lg:text-[88px] lg:leading-[0.95] animate-rise", children: [
          "Arturo Urbina",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl animate-rise [animation-delay:80ms]", children: [
          "Designer & multimedia creator focused on",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "branding" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "3D renders" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "video editing" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "web projects" }),
          ". Software-engineering student at DASC, based in Puebla."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3 animate-rise [animation-delay:160ms]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work", className: "group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-200 ease-out-soft hover:opacity-90", children: [
            "View Work",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex h-12 items-center rounded-full hairline bg-surface/60 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface", children: "Contact" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-wrap gap-2 animate-rise [animation-delay:220ms]", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur", children: s }, s)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Featured work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight md:text-4xl", children: "Selected projects." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work", className: "group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
          "See all work",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: featured.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, eager: i < 2 }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 rounded-3xl hairline bg-surface/60 p-8 backdrop-blur md:grid-cols-3 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl font-semibold tracking-tight", children: "A multidisciplinary craft." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Years of work across brand, video, 3D and the web — built around a single taste for clarity and quiet detail." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 grid grid-cols-2 gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Projects shipped", value: "40+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Years designing", value: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Brands served", value: "15+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Reels & shorts", value: "100+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Render scenes", value: "20+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Web builds", value: "6" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Tools I use" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full hairline px-3 py-1.5 text-xs text-foreground", children: t }, t)) })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-semibold tracking-tight text-foreground", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground", children: label })
  ] });
}
export {
  Home as component
};
