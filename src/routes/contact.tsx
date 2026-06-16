import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MessageCircle, Linkedin, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Arturo Urbina" },
      {
        name: "description",
        content:
          "Ponte en contacto con Arturo Urbina para proyectos de branding, video, 3D o web. Respuesta rápida dentro de 24–48h.",
      },
      { property: "og:title", content: "Contacto — Arturo Urbina" },
      {
        property: "og:description",
        content: "Ponte en contacto con Arturo Urbina. Respuesta rápida dentro de 24–48h.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "arturourbina6161@gmail.com",
    href: "mailto:arturourbina6161@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@urbina.art",
    href: "https://instagram.com/urbina.art",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 221 282 8717",
    href: "https://wa.me/522212828717",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Arturo Urbina",
    href: "#",
  },
];

function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`,
    );
    setTimeout(() => {
      window.location.href = `mailto:arturourbina6161@gmail.com?subject=Project%20inquiry&body=${body}`;
      setState("success");
    }, 600);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Contacto
      </p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
        Empecemos algo.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Escríbeme sobre tu proyecto de marca, video, 3D o web. Respuesta rápida dentro de 24–48h.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 rounded-2xl hairline bg-surface/60 p-6 backdrop-blur transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:bg-surface hover:shadow-soft"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-0.5 text-base font-medium">{c.value}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </a>
        ))}
      </div>

      <form
        onSubmit={submit}
        className="mt-16 grid gap-5 rounded-3xl hairline bg-surface/60 p-8 backdrop-blur md:p-10"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nombre" name="name" required placeholder="Tu nombre" />
          <Field label="Correo" name="email" type="email" required placeholder="tu@correo.com" />
        </div>
        <Field
          label="Mensaje"
          name="message"
          required
          placeholder="Cuéntame sobre el proyecto, cronograma y objetivos…"
          textarea
        />
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Al enviar, se abrirá tu cliente de correo.
          </p>
          <button
            type="submit"
            disabled={state !== "idle"}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-glow transition-opacity disabled:opacity-60"
          >
            {state === "success" ? (
              <><Check className="h-4 w-4" /> Enviado</>
            ) : state === "loading" ? (
              "Abriendo correo…"
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-2xl hairline bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-primary focus:bg-background";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={6}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}
