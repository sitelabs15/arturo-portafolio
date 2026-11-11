import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative py-20 px-4 sm:px-6 scroll-mt-8"
      aria-label="Contacto directo"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Hablemos"
          title="¿Tienes un proyecto en mente?"
          subtitle="Cuéntame qué necesitas y exploremos cómo convertirlo en una solución visual o digital adaptada a tu negocio."
        />

        <div data-reveal className="rounded-3xl hairline bg-surface/70 p-6 sm:p-8 md:p-10 backdrop-blur-md space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Canales de comunicación directa
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Elige el canal que prefieras para conversar sobre presupuestos, colaboraciones o
              requerimientos específicos.
            </p>
          </div>

          <div data-reveal-group className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl hairline bg-surface-2/60 p-4 transition-all duration-200 hover:bg-surface-2 hover:border-primary/40 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase font-bold tracking-wider text-muted-foreground">
                  Correo Electrónico
                </p>
                <p className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl hairline bg-surface-2/60 p-4 transition-all duration-200 hover:bg-surface-2 hover:border-emerald-500/40 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase font-bold tracking-wider text-muted-foreground">
                  WhatsApp Directo
                </p>
                <p className="truncate text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>

            {/* Phone call */}
            <a
              href={profile.phoneHref}
              className="flex items-center gap-4 rounded-2xl hairline bg-surface-2/60 p-4 transition-all duration-200 hover:bg-surface-2 hover:border-cyan/40 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase font-bold tracking-wider text-muted-foreground">
                  Llamada Telefónica
                </p>
                <p className="truncate text-sm font-semibold text-foreground group-hover:text-cyan transition-colors">
                  {profile.phone}
                </p>
                <p className="text-[10px] text-auxiliary">Toca para llamar</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl hairline bg-surface-2/40 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-muted-foreground">
                  Ubicación
                </p>
                <p className="text-sm font-semibold text-foreground">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Direct call banner */}
          <div data-reveal className="flex flex-col items-center justify-between gap-4 rounded-2xl hairline bg-gradient-to-r from-primary/10 via-surface-2/40 to-cyan/10 p-5 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-foreground">¿Prefieres hablar directamente?</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Llámame y con gusto resolvemos tus dudas.
              </p>
            </div>
            <a
              href={profile.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-xs font-semibold text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
