import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  MessageSquareQuote,
  Send,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import type { SectionId } from "@/hooks/useActiveSection";
import { profile } from "@/data/profile";

interface NavItem {
  id: SectionId;
  label: string;
  icon: typeof Home;
}

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "sobre-mi", label: "Sobre mí", icon: User },
  { id: "servicios", label: "Servicios", icon: Briefcase },
  { id: "portafolio", label: "Portafolio", icon: FolderGit2 },
  { id: "habilidades", label: "Habilidades", icon: Cpu },
  { id: "certificados", label: "Certificados", icon: GraduationCap },
  { id: "cartas-de-recomendacion", label: "Cartas de recomendación", icon: MessageSquareQuote },
  { id: "contacto", label: "Contacto", icon: Send },
];

export function DesktopSidebar({
  activeSection,
  onNavigate,
}: {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-[250px] flex-col justify-between border-r border-hairline bg-[#080914]/95 px-4 py-6 backdrop-blur-xl lg:flex"
      aria-label="Navegación principal de escritorio"
    >
      {/* Top: Identity / Monogram */}
      <div className="space-y-6">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("inicio");
          }}
          className="group flex items-center gap-3 px-2 py-1 text-left transition-opacity hover:opacity-95"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl gradient-brand text-xs font-black tracking-wider text-white shadow-glow">
            <img
              src={profile.avatar}
              alt={profile.shortName}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {profile.shortName}
            </p>
            <p className="truncate text-[11px] font-medium text-muted-foreground">
              Diseño Digital · Web
            </p>
          </div>
        </a>

        {/* Navigation links */}
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[11px] font-medium transition-all duration-200 text-left ${
                  isActive
                    ? "bg-surface-2 text-foreground font-semibold shadow-soft border border-white/10"
                    : "text-muted-foreground hover:bg-surface/50 hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-auxiliary group-hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <span className="nav-dot ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Availability, Action & Contact Links */}
      <div className="space-y-4 pt-4">
        {/* Availability Card */}
        <div className="relative overflow-hidden rounded-2xl hairline bg-surface/70 p-3.5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-foreground">
              Disponible para proyectos
            </span>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
            Hablemos sobre diseño, web o contenido para tu negocio.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contacto");
            }}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl gradient-brand px-3 py-2 text-xs font-semibold text-white shadow-glow transition-all hover:opacity-95"
          >
            Hablemos
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Contact direct channels: ONLY email and WhatsApp */}
        <div className="flex items-center justify-between border-t border-hairline pt-3 px-1">
          <span className="text-[10px] uppercase tracking-wider text-auxiliary font-medium">
            Contacto
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg hairline bg-surface text-muted-foreground transition-colors hover:bg-surface-2 hover:text-primary"
              aria-label="Enviar correo electrónico a Arturo Urbina"
              title="arturourbina6161@gmail.com"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg hairline bg-surface text-muted-foreground transition-colors hover:bg-surface-2 hover:text-emerald-400"
              aria-label="Contactar por WhatsApp a Arturo Urbina"
              title="+52 222 171 1844"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Decorative subtle tech lines */}
        <div
          className="h-2 w-full opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}
