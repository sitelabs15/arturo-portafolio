export type ProjectCategory =
  "Diseño y branding" | "Desarrollo web" | "Audiovisual" | "Marketing y contenido";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  date: string;
  year: number;
  tags: string[];
  cover: string;
  gallery: string[];
  overview: string;
  scope: string[];
  deliverables: string[];
  role: string;
  tools?: string[];
  results?: string[];
  featured?: boolean;
}

// Automatically import all images from the "Imagenes proyectos" folder
const imageModules = import.meta.glob<{ default: string }>(
  "@/assets/projects/Imagenes proyectos/**/*.{png,jpg,jpeg,JPG,PNG,JPEG}",
  { eager: true },
);

function getImages(folderName: string): string[] {
  return Object.keys(imageModules)
    .filter((path) => path.includes(`/Imagenes proyectos/${folderName}/`))
    .sort()
    .map((path) => imageModules[path].default);
}

function getCover(images: string[], preferKeyword = "logo"): string {
  if (!images || images.length === 0) return "";
  const match = images.find((img) => img.toLowerCase().includes(preferKeyword.toLowerCase()));
  return match || images[0];
}

// Galleries for each documented project
const luminaLearningImages = getImages("Lumina Learning");
const belaHomeImages = getImages("Bela Home");
const lavotenisImages = getImages("Lavotenis");
const pipirinImages = getImages("Taqueria El pipirin");
const sitelabsImages = getImages("Sitelabs");
const sitelabsWebImages = getImages("Sitelabs Web");
const proviseImages = getImages("Provise");
const vikenImages = getImages("Viken Store");
const blopiImages = getImages("Blopi");
const kwiiImages = getImages("Kwii");
const lenkabitsImages = getImages("Lenkabits");
const slidersImages = getImages("Sliders");
const reylimImages = getImages("Reylim");
const logosImages = getImages("Varios logos");
const m3m6Images = getImages("M3M6 Ambiental");
const gacMotorsImages = getImages("Render GAC MOTORS");
const render1Images = getImages("Render 1");
const render2Images = getImages("Render 2");
const render3Images = getImages("Render 3");
const angelFlowImages = getImages("AngelFlow");
const shortcutImages = getImages("Shortcut");
const menteDeJuegoImages = getImages("Mente de juego");
const detrasDelPixelImages = getImages("Detras del pixel");

const rawProjects: Project[] = [
  {
    id: "lumina-learning",
    title: "Lumina Learning — Identidad Visual",
    client: "Lumina Learning",
    category: "Diseño y branding",
    date: "2024",
    year: 2024,
    tags: ["Identidad Visual", "Manual de Marca", "Papelería Corporativa"],
    cover: getCover(luminaLearningImages),
    gallery: luminaLearningImages,
    overview:
      "Desarrollo de una identidad visual integral para consultora profesional, incluyendo el diseño de logotipo, definición de paleta cromática, selección tipográfica, manual de identidad de 10 páginas, papelería y aplicaciones corporativas.",
    scope: [
      "Diseño de marca",
      "Manual de identidad",
      "Papelería corporativa",
      "Composición visual",
    ],
    deliverables: [
      "Logotipo e isotipo",
      "Manual de identidad de 10 páginas",
      "Papelería ejecutiva",
      "Formatos digitales",
    ],
    role: "Diseñador de Identidad Visual",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    results: ["Manual de identidad de 10 páginas implementado con éxito"],
    featured: true,
  },
  {
    id: "lavotenis",
    title: "Lavotenis — Producción Audiovisual y Web",
    client: "Lavotenis",
    category: "Audiovisual",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Reels", "TikTok", "Edición de Video", "Sitio Web"],
    cover: getCover(lavotenisImages, "diseño-1"),
    gallery: lavotenisImages,
    overview:
      "Participación en la escritura, grabación y edición de más de 100 reels para la cuenta oficial de Lavotenis, logrando un impacto masivo de visualizaciones públicas acumuladas en TikTok y apoyo en presencia web.",
    scope: [
      "Escritura de guiones",
      "Grabación y rodaje",
      "Edición y montaje dinámico",
      "Postproducción y subtitulado",
      "Apoyo en sitio web",
    ],
    deliverables: [
      "Serie de más de 100 reels de producto",
      "Piezas publicitarias para TikTok",
      "Estructura web de soporte",
    ],
    role: "Creador y Editor Audiovisual",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "CapCut", "WordPress"],
    results: ["+100 reels producidos", "+10 millones de visualizaciones acumuladas en TikTok"],
    featured: true,
  },
  {
    id: "bela-home",
    title: "Béla Home — Gran Formato, Audiovisual y Web",
    client: "Béla Home",
    category: "Marketing y contenido",
    date: "2024 – 2026",
    year: 2026,
    tags: ["Plotter Industrial", "Diseño Textil", "Reels", "Web"],
    cover: getCover(belaHomeImages, "logo"),
    gallery: belaHomeImages,
    overview:
      "Diseño de productos textiles personalizados como manteles, cojines, cortinas y cuadros para impresión en plotter industrial de gran formato. Producción de reels comerciales de producto y soporte a la administración del sitio web.",
    scope: [
      "Diseño para impresión industrial",
      "Operación de plotter",
      "Producción de video publicitario",
      "Mantenimiento web",
    ],
    deliverables: [
      "Patrones y archivos listos para plotter",
      "Serie de reels promocionales",
      "Actualizaciones de catálogo web",
    ],
    role: "Diseñador Gráfico / Contenido / Soporte Técnico",
    tools: ["Photoshop", "Illustrator", "Plotter Industrial", "CapCut", "WordPress"],
    featured: true,
  },
  {
    id: "taqueria-pipirin",
    title: "Taquería El Pipirín — Sitio Web y Menú",
    client: "Taquería El Pipirín",
    category: "Desarrollo web",
    date: "2024",
    year: 2024,
    tags: ["WordPress", "Diseño Responsive", "SEO Local", "Menú Digital"],
    cover: getCover(pipirinImages, "web-1"),
    gallery: pipirinImages,
    overview:
      "Diseño y desarrollo del sitio web para Taquería El Pipirín, un clásico restaurante poblano con más de 50 años de tradición. Maquetación del menú gastronómico, presencia digital orientada a clientes y optimización SEO.",
    scope: [
      "Arquitectura de páginas web",
      "Diseño responsive para móviles",
      "Catálogo/menú digital",
      "Optimización SEO",
    ],
    deliverables: [
      "Sitio web optimizado",
      "Sección interactiva de menú",
      "Integración de ubicación y contacto",
    ],
    role: "Diseñador y Desarrollador Web",
    tools: ["WordPress", "Elementor", "HTML", "CSS"],
    featured: true,
  },
  {
    id: "sitelabs-web",
    title: "Sitelabs — Plataforma y Presencia Web",
    client: "Sitelabs",
    category: "Desarrollo web",
    date: "2024",
    year: 2024,
    tags: ["Desarrollo Web", "Ventas", "UI/UX"],
    cover: getCover(sitelabsWebImages, "sitelabs"),
    gallery: sitelabsWebImages.length > 0 ? sitelabsWebImages : sitelabsImages,
    overview:
      "Desarrollo de sitio web comercial para Sitelabs enfocado en la presentación clara de servicios tecnológicos, captación de prospectos y adaptabilidad en todos los dispositivos.",
    scope: ["Diseño de interfaz", "Maquetación responsive", "Formularios de contacto comercial"],
    deliverables: ["Sitio web corporativo", "Formularios de captación"],
    role: "Desarrollador Web y Diseñador",
    tools: ["WordPress", "HTML", "CSS"],
  },
  {
    id: "provise",
    title: "Provise — Rebranding e Impresión de Gran Formato",
    client: "Provise",
    category: "Diseño y branding",
    date: "2021 – 2023",
    year: 2023,
    tags: ["Rebranding", "Isologo", "Lonas y Vinilos", "Publicidad"],
    cover: getCover(proviseImages, "logo"),
    gallery: proviseImages,
    overview:
      "Desarrollo del rebranding integral de Provise, renovando su isologo, manual de marca, diseño de materiales corporativos, lonas, vinilos decorativos de gran formato y piezas comerciales para redes.",
    scope: [
      "Estrategia visual",
      "Diseño de isologo",
      "Diseño de lonas y vinilos",
      "Materiales publicitarios",
    ],
    deliverables: [
      "Isologo renovado",
      "Manual básico de marca",
      "Archivos de corte e impresión en vinilo",
    ],
    role: "Diseñador de Contenido y Comunicación Visual",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Gran formato"],
  },
  {
    id: "viken-store",
    title: "Viken Store — Branding y Catálogo de Ensambles PC",
    client: "Viken Store",
    category: "Marketing y contenido",
    date: "2023 – 2024",
    year: 2023,
    tags: ["Branding", "PC Gamer", "Fotografía de Producto", "Tienda Digital"],
    cover: getCover(vikenImages, "viken logotipo blanco"),
    gallery: vikenImages,
    overview:
      "Branding y presentación visual para el catálogo de computadoras ensambladas de Viken Store (Doom, Draco, Ultron, Performance II, Dragonfly, Kioto). Creación de insignias de producto, piezas para Tienda Nube y publicaciones comerciales.",
    scope: [
      "Identidad visual de líneas de producto",
      "Insignias y elementos de catálogo",
      "Diseño para tienda virtual",
    ],
    deliverables: [
      "Sistema de marcas por equipo",
      "Banners para tienda digital",
      "Fichas técnicas comerciales",
    ],
    role: "Diseñador Gráfico y de Marca",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Tienda Nube"],
  },
  {
    id: "blopi",
    title: "BLOPI — Sistema Visual de Marca y Publicidad",
    client: "BLOPI",
    category: "Diseño y branding",
    date: "2023",
    year: 2023,
    tags: ["Branding", "Publicidad", "Merchandising"],
    cover: getCover(blopiImages, "logo"),
    gallery: blopiImages,
    overview:
      "Construcción del sistema visual para BLOPI, aplicación de entregas y mercado digital. Diseño de posters comerciales, campañas de adquisición y piezas promocionales.",
    scope: ["Identidad visual", "Diseño de posters publicitarios", "Merchandising promocional"],
    deliverables: ["Sistema de logotipos", "Posters de campaña", "Piezas gráficas para promoción"],
    role: "Diseñador de Marca",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "kwii-store",
    title: "KWII Store — Identidad y Packaging Promocional",
    client: "KWII Store",
    category: "Diseño y branding",
    date: "2023",
    year: 2023,
    tags: ["Logotipo", "Packaging", "Material Promocional"],
    cover: getCover(kwiiImages, "logo"),
    gallery: kwiiImages,
    overview:
      "Desarrollo de identidad para tienda de importación, incluyendo creación de isotipo flexible, plantillas publicitarias para redes y diseño de materiales de entrega.",
    scope: ["Diseño de isotipo", "Plantillas promocionales", "Packaging"],
    deliverables: ["Isotipo oficial", "Manual de uso básico", "Plantillas gráficas"],
    role: "Diseñador de Marca",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: "lenkabits",
    title: "Lenkabits — Fotografía de Producto y Video Corto",
    client: "Lenkabits",
    category: "Marketing y contenido",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Fotografía de Producto", "Reels", "Catálogo"],
    cover: getCover(lenkabitsImages, "lenkabits"),
    gallery: lenkabitsImages,
    overview:
      "Producción fotográfica de productos tecnológicos, maquetación de catálogos y edición de videos cortos dinámicos para redes sociales orientados a ventas.",
    scope: ["Fotografía de producto", "Retoque digital", "Edición de reels y videos cortos"],
    deliverables: ["Catálogo fotográfico de producto", "Serie de videos promocionales"],
    role: "Fotógrafo de Producto y Editor",
    tools: ["Adobe Photoshop", "Adobe Premiere Pro", "CapCut"],
  },
  {
    id: "sliders",
    title: "Slider's — Identidad Visual y Menú Gastronómico",
    client: "Slider's",
    category: "Diseño y branding",
    date: "2022",
    year: 2022,
    tags: ["Logotipo", "Menú Impreso", "Publicidad"],
    cover: getCover(slidersImages, "logo"),
    gallery: slidersImages,
    overview:
      "Diseño integral de marca para negocio gastronómico, abarcando desarrollo de logotipo, maquetación de menú impreso y diseño de volantes comerciales.",
    scope: ["Diseño de logotipo", "Maquetación editorial de menú", "Material publicitario impreso"],
    deliverables: ["Logotipo institucional", "Menú A4 de alta resolución", "Volantes y carteles"],
    role: "Diseñador Gráfico",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "coleccion-logos",
    title: "Colección de Logotipos Seleccionados",
    client: "Diversos Proyectos",
    category: "Diseño y branding",
    date: "2021 – 2024",
    year: 2024,
    tags: ["Logotipos", "Isotipos", "Imagotipos"],
    cover: getCover(logosImages, "varioslogos"),
    gallery: logosImages,
    overview:
      "Muestra selecta de identidades y logotipos desarrollados para diversos emprendimientos, proyectos comerciales y marcas independientes.",
    scope: [
      "Conceptualización de marca",
      "Construcción vectorial",
      "Aplicación monocromática y a color",
    ],
    deliverables: ["Colección de marcas gráficas", "Variaciones en positivo y negativo"],
    role: "Diseñador de Logotipos",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "reylim",
    title: "Reylim — Marca e Identidad",
    client: "Reylim",
    category: "Diseño y branding",
    date: "2024",
    year: 2024,
    tags: ["Identidad Visual", "Moda y Marca"],
    cover: getCover(reylimImages, "logo"),
    gallery: reylimImages,
    overview:
      "Diseño de identidad visual para marca de moda y productos, con enfoque en síntesis formal y elegancia contemporánea.",
    scope: ["Diseño de marca", "Aplicaciones de logotipo"],
    deliverables: ["Logotipo principal", "Manual de color"],
    role: "Diseñador de Marca",
    tools: ["Adobe Illustrator"],
  },
  {
    id: "gac-motors",
    title: "GAC MOTORS — Renders Espaciales 3D",
    client: "GAC MOTORS",
    category: "Marketing y contenido",
    date: "2024",
    year: 2024,
    tags: ["Render 3D", "Espacios Comerciales", "Automotriz"],
    cover: getCover(gacMotorsImages),
    gallery: gacMotorsImages,
    overview:
      "Modelado y renderizado tridimensional para visualización de espacios comerciales automotrices en Atlixco, Puebla.",
    scope: ["Modelado de espacios 3D", "Iluminación y materiales", "Renderizado fotorealista"],
    deliverables: ["Vistas de render espacial en alta definición"],
    role: "Artista 3D y Renderista",
    tools: ["Blender", "Photoshop"],
  },
  {
    id: "renders-arquitectura",
    title: "PAT Proyectos Arquitectónicos — Visualización 3D",
    client: "Proyectos Arquitectónicos Tabasco",
    category: "Marketing y contenido",
    date: "2024",
    year: 2024,
    tags: ["Visualización Arquitectónica", "Renders 3D", "Interiores"],
    cover: getCover(render1Images),
    gallery: [...render1Images, ...render2Images, ...render3Images].filter(Boolean),
    overview:
      "Serie de visualización 3D para proyectos arquitectónicos residenciales. Generación de perspectivas exteriores e interiores con iluminación ambiental cuidada.",
    scope: ["Texturizado y materiales", "Iluminación diurna y nocturna", "Postproducción visual"],
    deliverables: ["Vistas arquitectónicas en alta resolución"],
    role: "Artista 3D",
    tools: ["Blender", "Photoshop"],
  },
  {
    id: "angelflow-miniaturas",
    title: "AngelFlow — Miniaturas y Gráficos para YouTube",
    client: "AngelFlow",
    category: "Audiovisual",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Miniaturas", "YouTube", "Alto Contraste"],
    cover: getCover(angelFlowImages),
    gallery: angelFlowImages,
    overview:
      "Diseño de miniaturas de alto impacto visual para canal de YouTube, optimizadas para tasa de clics mediante composición expresiva y tipografía de alto contraste.",
    scope: ["Diseño de miniaturas", "Composición y recorte fotográfico", "Diseño tipográfico"],
    deliverables: ["Plantillas reutilizables y serie de portadas"],
    role: "Diseñador Gráfico",
    tools: ["Adobe Photoshop"],
  },
  {
    id: "shortcut-podcast",
    title: "Shortcut — Edición y Empaque Audiovisual",
    client: "Shortcut",
    category: "Audiovisual",
    date: "2023",
    year: 2023,
    tags: ["Edición de Video", "Podcast", "Miniaturas"],
    cover: getCover(shortcutImages),
    gallery: shortcutImages,
    overview:
      "Edición integral de episodios en video de podcast de formato largo, incluyendo diseño de miniaturas, títulos y tercios inferiores.",
    scope: ["Montaje no lineal", "Corrección de color", "Diseño de gráficos en pantalla"],
    deliverables: ["Episodios terminados para YouTube", "Portadas de episodios"],
    role: "Editor Audiovisual",
    tools: ["Adobe Premiere Pro", "Adobe Photoshop"],
  },
  {
    id: "ensayos-audiovisuales",
    title: "Mente de Juego y Detrás del Píxel — Video Ensayos",
    client: "Canales de Video",
    category: "Audiovisual",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Edición de Video", "Narrativa"],
    cover: getCover(menteDeJuegoImages),
    gallery: [...menteDeJuegoImages, ...detrasDelPixelImages].filter(Boolean),
    overview:
      "Edición de video ensayos temáticos sobre narrativa y diseño de videojuegos, con ritmo cinematográfico y diseño de miniaturas tipográficas.",
    scope: ["Montaje narrativo", "Búsqueda y sincronización musical", "Diseño de portadas"],
    deliverables: ["Video ensayos editados", "Miniaturas promocionales"],
    role: "Editor y Diseñador",
    tools: ["Adobe Premiere Pro", "Photoshop"],
  },
];

export const projects: Project[] = rawProjects.filter(
  (p) => p.gallery.length > 0 || Boolean(p.cover),
);

export const projectCategories: { key: ProjectCategory | "Todos"; label: string }[] = [
  { key: "Todos", label: "Todos" },
  { key: "Diseño y branding", label: "Diseño y Branding" },
  { key: "Desarrollo web", label: "Desarrollo Web" },
  { key: "Audiovisual", label: "Audiovisual" },
  { key: "Marketing y contenido", label: "Marketing y Contenido" },
];
