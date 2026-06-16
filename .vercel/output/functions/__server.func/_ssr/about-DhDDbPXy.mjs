import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
const experience = [{
  role: "Technician",
  detail: "Hardware & systems support across small studios."
}, {
  role: "Graphic Designer",
  detail: "Branding, merch and publicity for retail & creator brands."
}, {
  role: "3D Designer & Renderer",
  detail: "Architectural visualisation and product renders in Blender."
}, {
  role: "Video Editor",
  detail: "YouTube long-form, podcasts, TikTok/Reels for multiple channels."
}, {
  role: "Web Designer",
  detail: "Marketing sites and e-commerce storefronts."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 pt-16 md:pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl", children: "Hi, I'm Arturo — designer, editor & engineer-in-training." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-lg text-muted-foreground", children: "I'm a software-engineering student at DASC. For the past four years I've worked as a technician, editor, graphic designer, 3D artist, renderer and video editor for digital media. I care about clarity, restraint and the small details that make a piece feel finished." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl hairline bg-surface/60 p-8 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "What I do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Branding" }),
            " — identity systems, logos, merch."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "3D" }),
            " — architectural and product renders."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Video" }),
            " — long-form, podcasts, short-form social."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Web" }),
            " — marketing sites and e-commerce."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl hairline bg-surface/60 p-8 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Currently" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-foreground", children: "Studying Software Engineering at DASC (Saturdays), 24 years old, based in Puebla. Taking on freelance branding, video and web projects worldwide." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 divide-y divide-hairline border-y border-hairline", children: experience.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: e.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: e.detail })
      ] }, e.role)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background", children: "View Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex h-11 items-center rounded-full hairline bg-surface/60 px-6 text-sm font-medium", children: "Contact" })
    ] })
  ] });
}
export {
  AboutPage as component
};
