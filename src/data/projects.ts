export type Category = "Image & Logo" | "Video" | "Render Builds" | "Web";

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: Category;
  date: string;
  year: number;
  tags: string[];
  cover: string;
  gallery: string[];
  overview: string;
  scope: string[];
  deliverables: string[];
  role: string;
  link?: string;
}

// Automatically import all images from the "Imagenes proyectos" folder
const imageModules = import.meta.glob<{ default: string }>('@/assets/projects/Imagenes proyectos/**/*.{png,jpg,jpeg}', { eager: true });

// Helper to get all images for a specific folder
function getImages(folderName: string): string[] {
  return Object.keys(imageModules)
    .filter(path => path.includes(`/Imagenes proyectos/${folderName}/`))
    .sort() // Sort alphabetically to maintain consistent order
    .map(path => imageModules[path].default);
}

// Helper to prioritize logo as cover
function getCover(images: string[]): string {
  if (images.length === 0) return "";
  const logo = images.find(img => img.toLowerCase().includes('logo'));
  return logo || images[0];
}

// Individual galleries
const proviseImages = getImages('Provise');
const slidersImages = getImages('Sliders');
const kwiiImages = getImages('Kwii');
const blopiImages = getImages('Blopi');
const logosImages = getImages('Varios logos');
const lenkabitsImages = getImages('Lenkabits');
const vikenImages = getImages('Viken Store');
const angelFlowImages = getImages('AngelFlow');
const shortcutImages = getImages('Shortcut');
const lavotenisImages = getImages('Lavotenis');
const menteDeJuegoImages = getImages('Mente de juego');
const belaHomeImages = getImages('Bela Home');
const detrasDelPixelImages = getImages('Detras del pixel');
const render1Images = getImages('Render 1');
const render2Images = getImages('Render 2');
const render3Images = getImages('Render 3');
const m3m6Images = getImages('M3M6 Ambiental');
const pipirinImages = getImages('Taqueria El pipirin');
const gacMotorsImages = getImages('Render GAC MOTORS');
const sitelabsImages = getImages('Sitelabs');
const sitelabsWebImages = getImages('Sitelabs Web');
const reylimImages = getImages('Reylim');

export const projects: Project[] = [
  {
    id: "bela-home-reels",
    title: "Béla Home — TikTok / Reels",
    client: "Béla Home",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Artículos para el hogar"],
    cover: getCover(belaHomeImages),
    gallery: belaHomeImages,
    overview: "Videos cortos de productos para Béla Home — cortinas y textiles para el hogar, con un ritmo editorial y corrección de color cálida.",
    scope: ["Edición de video", "Corrección de color", "Publicidad"],
    deliverables: ["Serie de reels de producto"],
    role: "Editor de Video",
  },
  {
    id: "blopi",
    title: "BLOPI — Branding y Publicidad",
    client: "BLOPI",
    category: "Image & Logo",
    date: "Octubre 2023",
    year: 2023,
    tags: ["Branding", "Publicidad", "Merch"],
    cover: getCover(blopiImages),
    gallery: blopiImages,
    overview: "Sistema visual completo para BLOPI, un mercado digital y aplicación de entregas. Posters, piezas de reclutamiento y merch construidos bajo un solo lenguaje de diseño.",
    scope: ["Branding", "Diseño de campaña", "Merch"],
    deliverables: ["Sistema de logos", "Posters de adquisición", "Publicidad de la app"],
    role: "Diseñador Gráfico y de Marca",
  },
  {
    id: "provise",
    title: "Rebranding para Provise",
    client: "Provise",
    category: "Image & Logo",
    date: "Julio – Agosto 2023",
    year: 2023,
    tags: ["Rebranding", "Logo", "Merch"],
    cover: getCover(proviseImages),
    gallery: proviseImages,
    overview: "Rebranding completo para Provise, incluyendo una identidad visual renovada, sistema de logo y aplicaciones en merchandising.",
    scope: ["Estrategia de marca", "Diseño de logo", "Diseño de merch", "Sistema de color y tipografía"],
    deliverables: ["Isologo", "Manual de marca", "Mockups de merch", "Plantillas sociales"],
    role: "Diseñador Gráfico y de Marca",
  },
  {
    id: "sitelabs",
    title: "Sitelabs — Identidad Web",
    client: "Sitelabs",
    category: "Image & Logo",
    date: "2024",
    year: 2024,
    tags: ["Branding", "Web"],
    cover: getCover(sitelabsImages),
    gallery: sitelabsImages,
    overview: "Diseño de identidad visual para Sitelabs, enfocado en el entorno digital.",
    scope: ["Diseño de marca"],
    deliverables: ["Logotipo", "Paleta de colores"],
    role: "Diseñador",
  },
  {
    id: "sitelabs-web",
    title: "Sitelabs — Sitio Web",
    client: "Sitelabs",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Web", "Sitio Web", "Tecnología"],
    cover: getCover(sitelabsWebImages),
    gallery: sitelabsWebImages,
    overview: "Diseño de sitio web para Sitelabs.",
    scope: ["Diseño web"],
    deliverables: ["Sitio web"],
    role: "Diseñador Web",
  },
  {
    id: "viken",
    title: "Branding para Viken Store",
    client: "Viken Store",
    category: "Image & Logo",
    date: "Diciembre 2023",
    year: 2023,
    tags: ["Branding", "Ensambles PC", "Producto"],
    cover: getCover(vikenImages),
    gallery: vikenImages,
    overview: "Branding y presentación de la línea de productos para Viken Store — nomenclatura, insignias y elementos visuales para el catálogo de ensambles de PC (Doom, Draco, Ultron, Performance II, Dragonfly, Kioto).",
    scope: ["Identidad de marca", "Nomenclatura de productos", "Diseño de catálogos"],
    deliverables: ["Logo", "Insignias de producto", "Catálogo"],
    role: "Diseñador de Marca",
  },
  {
    id: "kwii",
    title: "KWII Store — Branding y Merch",
    client: "KWII Store",
    category: "Image & Logo",
    date: "Junio 2023",
    year: 2023,
    tags: ["Branding", "Merch", "Publicidad"],
    cover: getCover(kwiiImages),
    gallery: kwiiImages,
    overview: "Sistema de identidad para KWII, una tienda de importación. Creación de un logo flexible, packaging y una plantilla de publicidad recurrente.",
    scope: ["Branding", "Diseño publicitario", "Merch"],
    deliverables: ["Isotipo", "Maquetación de catálogos", "Posts promocionales"],
    role: "Diseñador de Marca",
  },
  {
    id: "lenkabits-products",
    title: "Lenkabits — Fotografía de Producto y Diseño",
    client: "Lenkabits",
    category: "Image & Logo",
    date: "Enero 2023 – Febrero 2024",
    year: 2024,
    tags: ["Producto", "Catálogo"],
    cover: getCover(lenkabitsImages),
    gallery: lenkabitsImages,
    overview: "Imágenes de producto continuas y maquetación de catálogos para Lenkabits — una colaboración de un año a lo largo de múltiples lanzamientos.",
    scope: ["Composición fotográfica de productos", "Diseño de catálogos"],
    deliverables: ["Páginas de catálogos", "Tarjetas de producto"],
    role: "Diseñador Gráfico",
  },
  {
    id: "lenkabits-tiktok",
    title: "Lenkabits — TikTok / Reels",
    client: "Lenkabits",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Formato corto"],
    cover: lenkabitsImages[1] || lenkabitsImages[0] || "",
    gallery: lenkabitsImages,
    overview: "Videos cortos de producto y publicidad para Lenkabits en TikTok y Reels — ediciones dinámicas con gráficos en movimiento y subtítulos alineados con la marca.",
    scope: ["Edición de video", "Gráficos en movimiento", "Subtítulos"],
    deliverables: ["20+ videos cortos", "Publicidad recurrente"],
    role: "Editor de Video",
  },
  {
    id: "sliders",
    title: "Slider's — Publicidad, Logo y Menú",
    client: "Slider's",
    category: "Image & Logo",
    date: "Junio 2022",
    year: 2022,
    tags: ["Logo", "Menú", "Publicidad"],
    cover: getCover(slidersImages),
    gallery: slidersImages,
    overview: "Identidad visual para Slider's: logo, menú impreso y piezas publicitarias diseñadas en torno a un tono audaz y apetitoso.",
    scope: ["Diseño de logo", "Maquetación de menú", "Publicidad impresa"],
    deliverables: ["Logotipo", "Menú A4", "Volantes promocionales"],
    role: "Diseñador Gráfico",
  },
  {
    id: "reylim",
    title: "Reylim — Marca",
    client: "Reylim",
    category: "Image & Logo",
    date: "2024",
    year: 2024,
    tags: ["Branding", "Moda"],
    cover: getCover(reylimImages),
    gallery: reylimImages,
    overview: "Diseño de identidad para Reylim.",
    scope: ["Diseño de marca"],
    deliverables: ["Logotipo"],
    role: "Diseñador",
  },
  {
    id: "angelflow-thumbnails",
    title: "AngelFlow — Miniaturas para YouTube",
    client: "AngelFlow",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Miniaturas", "YouTube"],
    cover: getCover(angelFlowImages),
    gallery: angelFlowImages,
    overview: "Serie de miniaturas para el canal de YouTube AngelFlow — vlogs, viajes y estilo de vida. Diseñadas para alta tasa de clics con rostros expresivos, alto contraste y tipografía consistente.",
    scope: ["Diseño de miniaturas", "Identidad de series"],
    deliverables: ["20+ miniaturas", "Plantillas reutilizables"],
    role: "Diseñador Gráfico",
  },
  {
    id: "shortcut",
    title: "Shortcut — Edición de Podcast",
    client: "Shortcut",
    category: "Video",
    date: "2023",
    year: 2023,
    tags: ["Podcast", "YouTube", "Edición"],
    cover: getCover(shortcutImages),
    gallery: shortcutImages,
    overview: "Edición de podcast largo y empaquetado para Shortcut — episodios sobre religión, amor y cultura. Incluye miniaturas, intros y tercios inferiores.",
    scope: ["Edición de video", "Empaquetado de podcast", "Miniaturas"],
    deliverables: ["Episodios editados", "Portadas de episodios"],
    role: "Editor de Video",
  },
  {
    id: "lavotenis-reels",
    title: "Lavotenis — Redes y Web",
    client: "Lavotenis",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Producto", "Web"],
    cover: getCover(lavotenisImages),
    gallery: lavotenisImages,
    overview: "Videos de productos, publicidad de marca y sitio web para Lavotenis — múltiples éxitos virales incluyendo un reel con 69.9K vistas.",
    scope: ["Edición de video", "Estrategia para formato corto", "Diseño web"],
    deliverables: ["Serie de reels de producto", "Sitio Web"],
    role: "Diseñador y Editor",
  },
  {
    id: "mente-de-juego",
    title: "Mente de Juego — YouTube",
    client: "Mente de Juego",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Edición", "Miniaturas"],
    cover: getCover(menteDeJuegoImages),
    gallery: menteDeJuegoImages,
    overview: "Edición y miniaturas para Mente de Juego — ensayos sobre videojuegos (Conker, Zelda) con un ritmo cinematográfico y portadas tipográficas audaces.",
    scope: ["Edición de video", "Diseño de miniaturas"],
    deliverables: ["Ensayos editados", "Miniaturas de episodios"],
    role: "Editor de Video y Diseñador",
  },
  {
    id: "detras-del-pixel",
    title: "Detrás del Píxel — YouTube",
    client: "Detrás del Píxel",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Edición"],
    cover: getCover(detrasDelPixelImages),
    gallery: detrasDelPixelImages,
    overview: "Edición y miniaturas para Detrás del Píxel — ensayos sobre diseño de juegos y la industria (Stardew Valley, Dark Souls).",
    scope: ["Edición de video", "Diseño de miniaturas"],
    deliverables: ["Ensayos editados", "Miniaturas de episodios"],
    role: "Editor de Video y Diseñador",
  },
  {
    id: "render-1",
    title: "Proyecto Render 1",
    client: "Render 1",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Arquitectura"],
    cover: getCover(render1Images),
    gallery: render1Images,
    overview: "Serie de visualización arquitectónica para residencias. Renders fotorrealistas de interiores y exteriores hechos en Blender.",
    scope: ["Modelado 3D", "Iluminación", "Renderizado"],
    deliverables: ["Vista principal exterior", "Conjunto de interiores", "Acercamientos de detalles"],
    role: "Artista 3D y Renderista",
  },
  {
    id: "render-2",
    title: "Proyecto Render 2",
    client: "Render 2",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Arquitectura"],
    cover: getCover(render2Images),
    gallery: render2Images,
    overview: "Serie de visualización arquitectónica para residencias. Renders fotorrealistas de interiores y exteriores hechos en Blender.",
    scope: ["Modelado 3D", "Iluminación", "Renderizado"],
    deliverables: ["Vista principal exterior", "Conjunto de interiores", "Acercamientos de detalles"],
    role: "Artista 3D y Renderista",
  },
  {
    id: "render-3",
    title: "Proyecto Render 3",
    client: "Render 3",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Arquitectura"],
    cover: getCover(render3Images),
    gallery: render3Images,
    overview: "Serie de visualización arquitectónica para residencias. Renders fotorrealistas de interiores y exteriores hechos en Blender.",
    scope: ["Modelado 3D", "Iluminación", "Renderizado"],
    deliverables: ["Vista principal exterior", "Conjunto de interiores", "Acercamientos de detalles"],
    role: "Artista 3D y Renderista",
  },
  {
    id: "gac-motors",
    title: "GAC MOTORS — Renders",
    client: "GAC MOTORS",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Automotriz"],
    cover: getCover(gacMotorsImages),
    gallery: gacMotorsImages,
    overview: "Renders de espacios y vehículos para GAC MOTORS.",
    scope: ["Modelado 3D", "Renderizado"],
    deliverables: ["Vistas de render"],
    role: "Artista 3D",
  },
  {
    id: "m3m6-ambiental",
    title: "M3M6 Ambiental — Sitio Web",
    client: "M3M6",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Web", "Ambiental"],
    cover: getCover(m3m6Images),
    gallery: m3m6Images,
    overview: "Sitio web para M3M6 Ambiental.",
    scope: ["Diseño web"],
    deliverables: ["Sitio web", "Vistas"],
    role: "Diseñador Web",
  },
  {
    id: "pipirin",
    title: "Taquería El Pipirín — Sitio Web",
    client: "Taquería El Pipirín",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Restaurante", "Web", "Menú"],
    cover: getCover(pipirinImages),
    gallery: pipirinImages,
    overview: "Sitio web para Taquería El Pipirín — un clásico poblano con más de 50 años de tradición. Diseño cálido y familiar construido alrededor del menú.",
    scope: ["Diseño web", "Maquetación de menú", "Dirección de fotografía"],
    deliverables: ["Página principal", "Página de menú", "Contacto"],
    role: "Diseñador Web",
  },
  {
    id: "logos-collection",
    title: "Colección de Logos",
    category: "Image & Logo",
    date: "2022 – 2024",
    year: 2024,
    tags: ["Logotipo", "Isotipo", "Isologo"],
    cover: getCover(logosImages),
    gallery: logosImages,
    overview: "Marcas seleccionadas a través de marcas personales, canales y pequeñas empresas — incluyendo Nfinity, Sad Duck, Gamepals, Shortcut, El Rincon, Spacewings, Reylym y más.",
    scope: ["Logotipo", "Isotipo", "Imagotipo"],
    deliverables: ["10+ variaciones de logos", "Marcas personales"],
    role: "Diseñador de Logos",
  }
].filter(p => p.gallery.length > 0 || p.cover !== "");

export const categories: { key: Category | "All"; label: string }[] = [
  { key: "All", label: "Todos" },
  { key: "Image & Logo", label: "Imagen & Logo" },
  { key: "Video", label: "Video" },
  { key: "Render Builds", label: "Renders" },
  { key: "Web", label: "Web" },
];

export const featured = ["bela-home-reels", "provise", "sitelabs", "render-1"]
  .map((id) => projects.find((p) => p.id === id)!)
  .filter(Boolean);
