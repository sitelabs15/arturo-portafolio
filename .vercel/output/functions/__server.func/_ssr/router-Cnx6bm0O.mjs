import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, a as Mail, I as Instagram, b as MessageCircle, A as ArrowUp, S as Sun, c as Moon } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BaNHYUlW.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function ThemeToggle() {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle color theme",
      className: "inline-flex h-10 w-10 items-center justify-center rounded-full hairline bg-surface/60 text-foreground transition-all ease-out-soft duration-200 hover:bg-surface hover:shadow-soft",
      children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-soft ${scrolled ? "border-b border-hairline bg-background/70 backdrop-blur-xl" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "group flex items-center gap-2 text-sm font-semibold tracking-tight",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-primary shadow-glow transition-transform duration-300 group-hover:scale-125" }),
                "Arturo Urbina"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              activeOptions: { exact: item.to === "/" },
              activeProps: { className: "text-foreground" },
              inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
              className: "rounded-full px-4 py-2 text-sm transition-colors duration-200",
              children: item.label
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "hidden h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-200 ease-out-soft hover:opacity-90 md:inline-flex",
                children: "Email me"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "inline-flex h-10 w-10 items-center justify-center rounded-full hairline md:hidden",
                "aria-label": "Open menu",
                onClick: () => setOpen((v) => !v),
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col px-6 py-4", children: [
          nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: () => setOpen(false),
              className: "rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface",
              children: item.label
            },
            item.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground",
              children: "Email me"
            }
          )
        ] }) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 border-t border-hairline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Let's build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-3xl font-semibold tracking-tight text-balance", children: "Have a project in mind?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90",
            children: "Start a project"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 text-sm md:col-span-2 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Sitemap" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "hover:text-primary", children: "Work" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:arturourbina6161@gmail.com", className: "inline-flex items-center gap-2 hover:text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
              " Email"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/urbina.art", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }),
              " Instagram"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/522212828717", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              " WhatsApp"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Based in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Puebla, Mexico" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Available worldwide" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Carlos Arturo Urbina Reyes"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "inline-flex items-center gap-2 hover:text-foreground",
          children: [
            "Back to top ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold tracking-tight", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full hairline bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arturo Urbina — Designer & Multimedia Creator" },
      {
        name: "description",
        content: "Portfolio of Arturo Urbina — branding, 3D renders, video editing and web projects."
      },
      { name: "author", content: "Carlos Arturo Urbina Reyes" },
      { property: "og:title", content: "Arturo Urbina — Designer & Multimedia Creator" },
      {
        property: "og:description",
        content: "Portfolio of Arturo Urbina — branding, 3D renders, video editing and web projects."
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arturo Urbina" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: "try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$4 = () => import("./work-D3F7LezE.mjs");
const Route$5 = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Work — Arturo Urbina"
    }, {
      name: "description",
      content: "Selected projects by Arturo Urbina: image & logo design, video, 3D render builds and web projects."
    }, {
      property: "og:title",
      content: "Work — Arturo Urbina"
    }, {
      property: "og:description",
      content: "Selected branding, video, 3D and web projects by Arturo Urbina."
    }, {
      property: "og:url",
      content: "/work"
    }],
    links: [{
      rel: "canonical",
      href: "/work"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const p5 = "/assets/p5-BakUJahf.jpg";
const p6 = "/assets/p6-B-ewu2Ai.jpg";
const p7 = "/assets/p7-mCsqsVkX.jpg";
const p8 = "/assets/p8-BLuvWEo1.jpg";
const p9 = "/assets/p9-aa0WBvZ3.jpg";
const p10 = "/assets/p10-Do5f5I04.jpg";
const p11 = "/assets/p11-D6RS38Tw.jpg";
const p12 = "/assets/p12-CclZwitf.jpg";
const p13 = "/assets/p13-BGm2hxHG.jpg";
const p14 = "/assets/p14-BzO2Wj1n.jpg";
const p15 = "/assets/p15-CGBJGGT2.jpg";
const p16 = "/assets/p16-3bJUK97b.jpg";
const p18 = "/assets/p18-C8evSGZJ.jpg";
const p19 = "/assets/p19-Cd-1kuoY.jpg";
const p20 = "/assets/p20-C39P7kpq.jpg";
const p21 = "/assets/p21-DcS3_nrl.jpg";
const p22 = "/assets/p22-C1YlrJ1N.jpg";
const p23 = "/assets/p23-DMroeS0n.jpg";
const p24 = "/assets/p24-BmGd8TlS.jpg";
const p26 = "/assets/p26-CBoJyWPp.jpg";
const p27 = "/assets/p27-D6yK33yA.jpg";
const p29 = "/assets/p29-TKh63IJi.jpg";
const p30 = "/assets/p30-rHsATV1c.jpg";
const p31 = "/assets/p31-4jl0uXhS.jpg";
const projects = [
  {
    id: "provise",
    title: "Rebranding for Provise",
    client: "Provise",
    category: "Image & Logo",
    date: "July – August 2023",
    year: 2023,
    tags: ["Rebranding", "Logo", "Merch"],
    cover: p5,
    gallery: [p5],
    overview: "Complete rebranding for Provise, including a refreshed visual identity, logo system and merchandise applications.",
    scope: ["Brand strategy", "Logo design", "Merch design", "Color & type system"],
    deliverables: ["Isologo", "Brand guidelines", "Merch mockups", "Social templates"],
    role: "Brand & Graphic Designer"
  },
  {
    id: "sliders",
    title: "Slider's — Publicity, Logo & Menu",
    client: "Slider's",
    category: "Image & Logo",
    date: "June 2022",
    year: 2022,
    tags: ["Logo", "Menu", "Publicity"],
    cover: p6,
    gallery: [p6],
    overview: "Visual identity for Slider's: logo, printed menu and publicity pieces designed around a bold, appetising tone.",
    scope: ["Logo design", "Menu layout", "Print publicity"],
    deliverables: ["Logotype", "A4 menu", "Promo flyers"],
    role: "Graphic Designer"
  },
  {
    id: "kwii",
    title: "KWII Store — Branding & Merch",
    client: "KWII Store",
    category: "Image & Logo",
    date: "June 2023",
    year: 2023,
    tags: ["Branding", "Merch", "Publicity"],
    cover: p7,
    gallery: [p7, p8],
    overview: "Identity system for KWII, an import store. Built a flexible logo, packaging and a recurring social-publicity template.",
    scope: ["Branding", "Publicity design", "Merch"],
    deliverables: ["Isotipo", "Catalogue layouts", "Promo posts"],
    role: "Brand Designer"
  },
  {
    id: "blopi",
    title: "BLOPI — Branding & Publicity",
    client: "BLOPI",
    category: "Image & Logo",
    date: "October 2023",
    year: 2023,
    tags: ["Branding", "Publicity", "Merch"],
    cover: p9,
    gallery: [p9],
    overview: "Full visual system for BLOPI, a digital marketplace and delivery app. Posters, recruiting pieces and merch built around a single design language.",
    scope: ["Branding", "Campaign design", "Merch"],
    deliverables: ["Logo system", "Acquisition posters", "App publicity"],
    role: "Brand & Graphic Designer"
  },
  {
    id: "logos-collection",
    title: "Logo Collection",
    category: "Image & Logo",
    date: "2022 – 2024",
    year: 2024,
    tags: ["Logotype", "Isotype", "Isologo"],
    cover: p10,
    gallery: [p10, p11],
    overview: "Selected marks across personal brands, channels and small businesses — including Nfinity, Sad Duck, Gamepals, Shortcut, El Rincon, Spacewings, Reylym and more.",
    scope: ["Logotype", "Isotype", "Imagotype"],
    deliverables: ["10+ logo lockups", "Personal brand marks"],
    role: "Logo Designer"
  },
  {
    id: "lenkabits-products",
    title: "Lenkabits — Product Photography & Design",
    client: "Lenkabits",
    category: "Image & Logo",
    date: "January 2023 – February 2024",
    year: 2024,
    tags: ["Product", "Catalogue"],
    cover: p12,
    gallery: [p12],
    overview: "Ongoing product imagery and catalogue layouts for Lenkabits — a year-long collaboration across multiple drops.",
    scope: ["Product photo composition", "Catalogue design"],
    deliverables: ["Catalogue spreads", "Product cards"],
    role: "Graphic Designer"
  },
  {
    id: "viken",
    title: "Branding for Viken Store",
    client: "Viken Store",
    category: "Image & Logo",
    date: "December 2023",
    year: 2023,
    tags: ["Branding", "PC Builds", "Product"],
    cover: p13,
    gallery: [p13, p14],
    overview: "Branding and product line presentation for Viken Store — naming, badging and catalog visuals for the PC build lineup (Doom, Draco, Ultron, Performance II, Dragonfly, Kioto).",
    scope: ["Brand identity", "Product naming", "Catalogue design"],
    deliverables: ["Logo", "Product badges", "Catalogue"],
    role: "Brand Designer"
  },
  {
    id: "angelflow-thumbnails",
    title: "AngelFlow — YouTube Thumbnails",
    client: "AngelFlow",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Thumbnails", "YouTube"],
    cover: p15,
    gallery: [p15, p16],
    overview: "Series of thumbnails for the AngelFlow YouTube channel — vlogs, travel and lifestyle. Designed for click-through with strong faces, contrast and consistent type.",
    scope: ["Thumbnail design", "Series identity"],
    deliverables: ["20+ thumbnails", "Reusable templates"],
    role: "Graphic Designer"
  },
  {
    id: "shortcut",
    title: "Shortcut — Podcast Editing",
    client: "Shortcut",
    category: "Video",
    date: "2023",
    year: 2023,
    tags: ["Podcast", "YouTube", "Editing"],
    cover: p18,
    gallery: [p18],
    overview: "Long-form podcast editing and packaging for Shortcut — episodes on religion, love and culture. Includes thumbnails, intros and lower-thirds.",
    scope: ["Video editing", "Podcast packaging", "Thumbnails"],
    deliverables: ["Edited episodes", "Episode covers"],
    role: "Video Editor"
  },
  {
    id: "lenkabits-tiktok",
    title: "Lenkabits — TikTok / Reels",
    client: "Lenkabits",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Short-form"],
    cover: p19,
    gallery: [p19, p20],
    overview: "Short-form product videos and publicity for Lenkabits across TikTok and Reels — punchy edits with on-brand motion and captions.",
    scope: ["Video editing", "Motion graphics", "Captions"],
    deliverables: ["20+ short videos", "Recurring publicity drops"],
    role: "Video Editor"
  },
  {
    id: "lavotenis-reels",
    title: "Lavotenis — TikTok / Reels",
    client: "Lavotenis",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Product"],
    cover: p21,
    gallery: [p21],
    overview: "Product videos and brand publicity for Lavotenis — multiple viral hits including a 69.9K-view reel.",
    scope: ["Video editing", "Short-form strategy"],
    deliverables: ["Series of product reels"],
    role: "Video Editor"
  },
  {
    id: "mente-de-juego",
    title: "Mente de Juego — YouTube",
    client: "Mente de Juego",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Editing", "Thumbnails"],
    cover: p22,
    gallery: [p22],
    overview: "Editing and thumbnails for Mente de Juego — essays on video games (Conker, Zelda) with cinematic pacing and bold typographic covers.",
    scope: ["Video editing", "Thumbnail design"],
    deliverables: ["Edited essays", "Episode thumbnails"],
    role: "Video Editor & Designer"
  },
  {
    id: "bela-home-reels",
    title: "Béla Home — TikTok / Reels",
    client: "Béla Home",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Home goods"],
    cover: p23,
    gallery: [p23],
    overview: "Short-form product videos for Béla Home — curtains and home textiles, with editorial pacing and warm color grading.",
    scope: ["Video editing", "Color grading", "Publicity"],
    deliverables: ["Series of product reels"],
    role: "Video Editor"
  },
  {
    id: "detras-del-pixel",
    title: "Detrás del Píxel — YouTube",
    client: "Detrás del Píxel",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Editing"],
    cover: p24,
    gallery: [p24],
    overview: "Editing and thumbnails for Detrás del Píxel — essays on game design and the industry (Stardew Valley, Dark Souls).",
    scope: ["Video editing", "Thumbnail design"],
    deliverables: ["Edited essays", "Episode thumbnails"],
    role: "Video Editor & Designer"
  },
  {
    id: "tabasco-renders",
    title: "Tabasco — Architectural Renders",
    client: "Private",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Architecture"],
    cover: p26,
    gallery: [p26, p27],
    overview: "Architectural visualisation series for a Tabasco residence. Photorealistic interior and exterior renders built in Blender.",
    scope: ["3D modeling", "Lighting", "Render"],
    deliverables: ["Hero exterior", "Interior set", "Detail close-ups"],
    role: "3D Artist & Render"
  },
  {
    id: "bela-home-web",
    title: "Béla Home — Online Store",
    client: "Béla Home",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["E-commerce", "Web Store", "Home goods"],
    cover: p29,
    gallery: [p29],
    overview: "Online store for Béla Home — curtains and home textiles. Catalogue, product cards, checkout and on-brand photography.",
    scope: ["Web design", "E-commerce", "Product photography"],
    deliverables: ["Storefront", "Product pages", "Checkout flow"],
    role: "Web Designer"
  },
  {
    id: "pipirin",
    title: "Taquería El Pipirín — Website",
    client: "Taquería El Pipirín",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Restaurant", "Web", "Menu"],
    cover: p30,
    gallery: [p30],
    overview: "Website for Taquería El Pipirín — a Poblano classic with over 50 years of tradition. Warm, family-feeling design built around the menu.",
    scope: ["Web design", "Menu layout", "Photography direction"],
    deliverables: ["Landing", "Menu page", "Contact"],
    role: "Web Designer"
  },
  {
    id: "lavotenis-web",
    title: "Lavotenis — Website",
    client: "Lavotenis",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Web", "Services", "Training"],
    cover: p31,
    gallery: [p31],
    overview: "Marketing website for Lavotenis — training, products and services for sneaker-care businesses across Latin America.",
    scope: ["Web design", "Information architecture"],
    deliverables: ["Home", "Services", "Contact"],
    role: "Web Designer"
  }
];
const categories = [
  { key: "All", label: "All" },
  { key: "Image & Logo", label: "Image & Logo" },
  { key: "Video", label: "Video" },
  { key: "Render Builds", label: "Render Builds" },
  { key: "Web", label: "Web" }
];
const featured = ["provise", "viken", "tabasco-renders", "bela-home-web"].map((id) => projects.find((p) => p.id === id)).filter(Boolean);
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/work", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
          ...projects.map((p) => ({ path: `/work/${p.id}`, priority: "0.6" }))
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./contact-CDHMaEMM.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Arturo Urbina"
    }, {
      name: "description",
      content: "Get in touch with Arturo Urbina for branding, video, 3D or web projects. Fast reply within 24–48h."
    }, {
      property: "og:title",
      content: "Contact — Arturo Urbina"
    }, {
      property: "og:description",
      content: "Get in touch with Arturo Urbina. Fast reply within 24–48h."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DhDDbPXy.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Arturo Urbina"
    }, {
      name: "description",
      content: "About Arturo Urbina — software-engineering student at DASC and multidisciplinary designer working on brand, video, 3D and web."
    }, {
      property: "og:title",
      content: "About — Arturo Urbina"
    }, {
      property: "og:description",
      content: "Software-engineering student at DASC and multidisciplinary designer."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-Bg8OSEiD.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Arturo Urbina — Designer & Multimedia Creator"
    }, {
      name: "description",
      content: "Branding, 3D renders, video editing and web projects by Arturo Urbina, software-engineering student and multimedia designer from Puebla, Mexico."
    }, {
      property: "og:title",
      content: "Arturo Urbina — Designer & Multimedia Creator"
    }, {
      property: "og:description",
      content: "Branding, 3D renders, video editing and web projects by Arturo Urbina."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./work._id-s50RELua.mjs");
const $$splitNotFoundComponentImporter = () => import("./work._id-DcF8OwIA.mjs");
const Route = createFileRoute("/work/$id")({
  loader: ({
    params
  }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Arturo Urbina` : "Project — Arturo Urbina";
    const desc = p?.overview ?? "Project case study by Arturo Urbina.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, ...p ? [{
        property: "og:image",
        content: p.cover
      }] : []],
      links: p ? [{
        rel: "canonical",
        href: `/work/${p.id}`
      }] : []
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$5.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$6
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const WorkIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => WorkRoute
});
const WorkRouteChildren = {
  WorkIdRoute
};
const WorkRouteWithChildren = WorkRoute._addFileChildren(WorkRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  SitemapDotxmlRoute,
  WorkRoute: WorkRouteWithChildren
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  categories as c,
  featured as f,
  projects as p,
  router as r
};
