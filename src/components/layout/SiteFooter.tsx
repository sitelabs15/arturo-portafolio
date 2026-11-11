import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-hairline bg-[#06070E] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg gradient-brand text-xs font-black text-white">
                <img
                  src={profile.avatar}
                  alt={profile.shortName}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-base font-bold text-foreground">{profile.fullName}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground max-w-md">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-xs text-auxiliary sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-auxiliary">{profile.location}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
