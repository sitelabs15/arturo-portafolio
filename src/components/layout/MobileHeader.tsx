import { useState, useEffect } from "react";
import {
  Menu,
  X,
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

export function MobileHeader({
  activeSection,
  onNavigate,
}: {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = (id: SectionId) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-hairline bg-[#080914]/90 px-4 backdrop-blur-xl lg:hidden"
        aria-label="Navegación móvil"
      >
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleSelect("inicio");
          }}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl gradient-brand text-xs font-black text-white shadow-glow">
            <img
              src={profile.avatar}
              alt={profile.shortName}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight text-foreground">
              {profile.shortName}
            </span>
            <span className="block text-[10px] text-muted-foreground">Diseño & Web</span>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl hairline bg-surface text-muted-foreground hover:text-emerald-400"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl hairline bg-surface text-foreground hover:bg-surface-2 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="fixed inset-y-0 right-0 w-[280px] max-w-[85vw] bg-[#0D1020] border-l border-hairline p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menú de navegación móvil desplegado"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-hairline">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg gradient-brand text-xs font-black text-white">
                    <img
                      src={profile.avatar}
                      alt={profile.shortName}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <span className="text-sm font-bold">{profile.shortName}</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground"
                  aria-label="Cerrar navegación"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelect(item.id);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-colors text-left ${
                        isActive
                          ? "bg-surface-2 text-foreground font-semibold border border-white/10"
                          : "text-muted-foreground hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-auxiliary"}`} />
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="nav-dot ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact in Mobile Drawer */}
            <div className="pt-6 border-t border-hairline space-y-3">
              <button
                onClick={() => handleSelect("contacto")}
                className="w-full flex items-center justify-center gap-2 rounded-xl gradient-brand py-2.5 text-xs font-semibold text-white shadow-glow"
              >
                <Send className="h-3.5 w-3.5" />
                Contactar a Arturo Urbina
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <span className="text-auxiliary">•</span>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
