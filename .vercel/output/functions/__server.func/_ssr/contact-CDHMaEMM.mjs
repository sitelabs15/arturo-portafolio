import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as Mail, I as Instagram, b as MessageCircle, L as Linkedin, d as ArrowUpRight, C as Check } from "../_libs/lucide-react.mjs";
const channels = [{
  icon: Mail,
  label: "Email",
  value: "arturourbina6161@gmail.com",
  href: "mailto:arturourbina6161@gmail.com"
}, {
  icon: Instagram,
  label: "Instagram",
  value: "@urbina.art",
  href: "https://instagram.com/urbina.art"
}, {
  icon: MessageCircle,
  label: "WhatsApp",
  value: "+52 221 282 8717",
  href: "https://wa.me/522212828717"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "Arturo Urbina",
  href: "#"
}];
function ContactPage() {
  const [state, setState] = reactExports.useState("idle");
  const submit = (e) => {
    e.preventDefault();
    setState("loading");
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(`From: ${data.get("name")} <${data.get("email")}>

${data.get("message")}`);
    setTimeout(() => {
      window.location.href = `mailto:arturourbina6161@gmail.com?subject=Project%20inquiry&body=${body}`;
      setState("success");
    }, 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-16 md:pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl", children: "Let's start something." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-muted-foreground", children: "Drop a line about your brand, video, 3D or web project. Fast reply within 24–48h." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2", children: channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group flex items-center justify-between gap-6 rounded-2xl hairline bg-surface/60 p-6 backdrop-blur transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:bg-surface hover:shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-base font-medium", children: c.value })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-16 grid gap-5 rounded-3xl hairline bg-surface/60 p-8 backdrop-blur md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true, placeholder: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, placeholder: "you@email.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", name: "message", required: true, placeholder: "Tell me about the project, timeline and goals…", textarea: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "By submitting you'll open your email client." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: state !== "idle", className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-glow transition-opacity disabled:opacity-60", children: state === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Sent"
        ] }) : state === "loading" ? "Opening email…" : "Send message" })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea
}) {
  const cls = "w-full rounded-2xl hairline bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-primary focus:bg-background";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: label }),
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, required, placeholder, rows: 6, className: cls }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, className: cls })
  ] });
}
export {
  ContactPage as component
};
