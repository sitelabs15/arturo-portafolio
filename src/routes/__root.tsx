import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold tracking-tight text-gradient">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La sección o ruta solicitada no existe o ha sido reubicada.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-brand px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-95 shadow-glow"
          >
            Volver al portafolio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Ocurrió un error inesperado</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          No se pudo procesar la solicitud. Puedes intentar nuevamente o regresar al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full gradient-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full hairline bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2 transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arturo Urbina Reyes | Diseño Digital, Branding y Web" },
      {
        name: "description",
        content:
          "Portafolio profesional de Arturo Urbina Reyes, diseñador digital en Puebla, México. Diseño gráfico, identidad visual, desarrollo web y contenido audiovisual.",
      },
      { name: "author", content: "Arturo Urbina Reyes" },
      {
        property: "og:title",
        content: "Arturo Urbina Reyes | Diseño Digital, Branding y Web",
      },
      {
        property: "og:description",
        content:
          "Diseño digital, branding y experiencias web por Arturo Urbina Reyes en Puebla, México.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arturo Urbina Reyes" },
      { name: "theme-color", content: "#080914" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        {children}
        <Toaster richColors position="bottom-right" theme="dark" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
