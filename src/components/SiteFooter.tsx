import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-hairline">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Construyamos
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
            ¿Tienes un proyecto en mente?
          </h3>
          <Link
            to="/contact"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Iniciar un proyecto
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm md:col-span-2 md:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Mapa del sitio
            </p>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
              <li><Link to="/work" className="hover:text-primary">Trabajo</Link></li>
              <li><Link to="/about" className="hover:text-primary">Sobre mí</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contacto
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:arturourbina6161@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              <li>
                <a href="https://instagram.com/urbina.art" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/522212828717" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Basado en
            </p>
            <p className="text-foreground">Puebla, México</p>
            <p className="mt-1 text-muted-foreground">Disponible en todo el mundo</p>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Carlos Arturo Urbina Reyes</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            Volver arriba <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
