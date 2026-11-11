import { ArrowRight, Send, Plus } from "lucide-react";
import { profile } from "@/data/profile";
import type { SectionId } from "@/hooks/useActiveSection";

const FEATURED_BRANDS = [
  "BELAHOME",
  "LENKABITS",
  "PROVISE",
  "JLJ TECHNICAL SUPPORT",
  "LUMINA LEARNING",
  "BLOPI",
  "KWII",
  "SITELABS",
  "VIKEN",
  "REYLIM",
  "LAVOTENIS",
  "GAC MOTORS",
  "PAT ARQUITECTURA",
  "TAQUERÍA EL PIPIRÍN",
  "M3M6 AMBIENTAL",
  "SKY BROTHERS",
  "MERAKI STUDIO",
  "MATISSA33",
  "ALIANZA INMOBILIARIA",
  "SLIDERS",
  "MUNDO BURGER",
];

export function HeroSection({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 scroll-mt-8"
      aria-label="Presentación principal"
    >
      {/* Background ambient lighting */}
      <div
        data-parallax="0.06"
        className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-violet/15 blur-[130px] -z-10 animate-pulse-glow"
      />
      <div
        data-parallax="-0.045"
        className="pointer-events-none absolute top-40 right-10 h-[460px] w-[460px] rounded-full bg-cyan/15 blur-[140px] -z-10 animate-pulse-glow"
      />
      <div
        data-parallax="0.035"
        className="pointer-events-none absolute bottom-0 left-10 h-[360px] w-[360px] rounded-full bg-magenta/15 blur-[120px] -z-10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker exactly like HELLO, I'M in reference */}
            <div className="animate-rise" style={{ animationDelay: "40ms" }}>
              <span className="text-[#D94DA8] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase font-mono">
                HELLO, I&apos;M
              </span>
            </div>

            {/* Big Name: Arturo Urbina */}
            <h1
              className="animate-rise text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.03em] text-white leading-none"
              style={{ animationDelay: "110ms" }}
            >
              Arturo Urbina
            </h1>

            {/* Headline with gradient word: Diseño experiencias que generan impacto */}
            <h2
              className="animate-rise text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug"
              style={{ animationDelay: "190ms" }}
            >
              Transformo ideas en experiencias digitales que generan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9857F5] via-[#D94DA8] to-[#59C7FF]">
                impacto.
              </span>
            </h2>

            {/* Subtitle / Bio */}
            <p
              className="animate-rise max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "270ms" }}
            >
              Diseñador digital, especialista en marketing y creador multimedia en Puebla, México.
              Más de seis años combinando branding, contenido audiovisual, soporte técnico y
              soluciones web para crear valor real.
            </p>

            {/* Action Buttons matching reference */}
            <div
              className="animate-rise flex flex-wrap items-center gap-4 pt-2"
              style={{ animationDelay: "350ms" }}
            >
              {/* Primary Pill Button: Ver Proyectos -> */}
              <button
                type="button"
                onClick={() => onNavigate("portafolio")}
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(152,87,245,0.45)] hover:shadow-[0_0_35px_rgba(217,77,168,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                style={{
                  background: "linear-gradient(120deg, #D94DA8 0%, #9857F5 48%, #4667FF 100%)",
                }}
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Pill Button with circular icon: Hablemos */}
              <button
                type="button"
                onClick={() => onNavigate("contacto")}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#121529]/80 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md hover:bg-surface-2 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                  <Send className="h-3.5 w-3.5" />
                </div>
                <span>Hablemos</span>
              </button>
            </div>

            {/* Trusted Brands Row matching reference */}
            <div
              className="animate-rise pt-6 border-t border-hairline/60"
              style={{ animationDelay: "430ms" }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono text-auxiliary font-semibold mb-3">
                Colaboraciones y marcas destacadas
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold tracking-wider text-muted-foreground/60">
                {FEATURED_BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="hover:text-foreground transition-colors cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Glowing Gradient Circle + Portrait + Floating Card */}
          <div
            className="animate-rise lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0"
            style={{ animationDelay: "180ms" }}
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] flex items-center justify-center">
              {/* Decorative Geometric Crosses matching reference */}
              <div className="hero-float absolute top-4 right-10 text-[#D94DA8] opacity-70 z-10">
                <Plus className="h-4 w-4" />
              </div>
              <div
                className="hero-float absolute top-28 left-0 text-[#59C7FF] opacity-60 z-10"
                style={{ animationDelay: "1200ms" }}
              >
                <Plus className="h-3 w-3" />
              </div>

              {/* Decorative curved SVG arc */}
              <svg
                className="absolute -top-4 -right-4 w-32 h-32 opacity-25 pointer-events-none -z-5"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10 90 A 40 40 0 0 1 90 10"
                  stroke="url(#arc-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D94DA8" />
                    <stop offset="100%" stopColor="#4667FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* THE GIANT GLOWING GRADIENT CIRCLE */}
              <div
                data-parallax="0.02"
                className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] rounded-full -z-10 shadow-[0_0_60px_rgba(152,87,245,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #6366F1 35%, #9857F5 65%, #D94DA8 100%)",
                }}
              />

              {/* Ambient Glow behind the circle */}
              <div
                data-parallax="-0.02"
                className="absolute w-[330px] h-[330px] sm:w-[390px] sm:h-[390px] rounded-full blur-2xl opacity-60 -z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #D94DA8 100%)",
                }}
              />

              {/* Arturo Urbina Cutout Portrait */}
              <div className="relative w-full aspect-[3/4] max-h-[500px] flex items-end justify-center overflow-hidden">
                <img
                  src="/arturo-cutout.png"
                  alt={profile.fullName}
                  className="h-full w-auto max-w-full object-contain object-bottom select-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  loading="eager"
                />

                {/* Soft gradient fade at bottom of sweater into #080914 */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080914] via-[#080914]/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating Dark Card: 6+ Years of Experience matching reference */}
              <div
                className="absolute -bottom-2 -right-2 sm:right-2 sm:bottom-6 z-20 rounded-2xl border border-white/10 bg-[#121529]/90 px-4 py-3.5 backdrop-blur-xl shadow-2xl animate-rise"
                style={{ animationDelay: "260ms" }}
              >
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    +6
                  </span>
                  <span className="mt-1 text-[11px] text-muted-foreground leading-tight">
                    Años de
                  </span>
                  <span className="text-[11px] font-semibold text-foreground leading-tight">
                    Experiencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Documented Metrics Row */}
        <div
          className="animate-rise mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-3xl hairline bg-surface/60 p-6 md:p-8 backdrop-blur-xl"
          style={{ animationDelay: "520ms" }}
        >
          {profile.metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-4 rounded-2xl hairline bg-surface-2/40"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
                {metric.value}
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold text-foreground">{metric.label}</p>
                {metric.sublabel && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{metric.sublabel}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
