import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

export function CompanyModal({
  client,
  projects,
  onClose,
}: {
  client: string;
  projects: Project[];
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Remove duplicate images if they exist across projects
  const allImages = Array.from(new Set(projects.flatMap((p) => p.gallery)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl hairline bg-surface shadow-2xl md:flex-row">
        {/* Left side: Gallery */}
        <div className="flex-1 overflow-y-auto bg-surface-2 p-4 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {allImages.map((src, i) => (
              <div 
                key={i} 
                className="relative group cursor-pointer overflow-hidden rounded-2xl" 
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`${client} project image ${i + 1}`}
                  className="h-auto w-full object-cover shadow-soft transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/80 p-3 rounded-full hairline backdrop-blur-md text-foreground shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Info */}
        <div className="w-full shrink-0 overflow-y-auto border-t border-hairline bg-surface p-6 md:w-[400px] md:border-l md:border-t-0 md:p-10 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full hairline bg-background/50 hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>
          
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Cliente / Proyecto
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{client}</h2>
          
          <div className="mt-8 space-y-8">
            {projects.map((p) => (
              <div key={p.id}>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-primary/10 px-2 py-1 text-[10px] uppercase text-primary">
                    {p.category}
                  </span>
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex rounded-full hairline px-2 py-1 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.overview}</p>
                
                {p.scope.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Alcance</p>
                    <ul className="mt-1 text-xs text-foreground/80">
                      {p.scope.map(s => <li key={s}>• {s}</li>)}
                    </ul>
                  </div>
                )}
                
                <hr className="mt-6 border-hairline" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={() => { setSelectedImage(null); setIsZoomed(false); }}
            className="absolute right-6 top-6 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full hairline bg-surface hover:bg-surface-2 shadow-xl"
          >
            <X className="h-6 w-6" />
          </button>
          <div 
            className={`relative w-full h-full overflow-auto ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in flex items-center justify-center'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <div className={`min-h-full min-w-full flex items-center justify-center transition-all duration-300 ${isZoomed ? 'p-10' : 'p-0'}`}>
              <img
                src={selectedImage}
                alt="Zoomed view"
                className={`transition-all duration-300 ease-out shadow-2xl ${
                  isZoomed 
                    ? 'w-[120vw] max-w-none h-auto object-contain' 
                    : 'w-full h-full max-h-[90vh] object-contain'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
