export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  tools?: string[];
  isComplementary?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "branding",
    number: "01",
    title: "Diseño Gráfico y Branding",
    description:
      "Desarrollo de piezas visuales e identidades gráficas para comunicar la personalidad de una marca de forma coherente y profesional.",
    capabilities: [
      "Identidad visual y manuales",
      "Diseño de logotipos e isotipos",
      "Diseño publicitario comercial",
      "Material corporativo y papelería",
      "Folletos, volantes y tarjetas",
      "Lonas, vinilos y gran formato",
      "Material gráfico para impresión",
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva"],
  },
  {
    id: "web",
    number: "02",
    title: "Diseño y Desarrollo Web",
    description:
      "Diseño de páginas web orientadas a presentar negocios, servicios y productos mediante experiencias claras, atractivas y adaptables.",
    capabilities: [
      "WordPress y Elementor",
      "Tiendas y catálogos en WooCommerce",
      "HTML5 y CSS3 semántico",
      "Diseño 100% responsive",
      "Formularios de contacto y reservas",
      "Integraciones comerciales",
      "Optimización SEO básica y estructurada",
    ],
    tools: ["WordPress", "WooCommerce", "HTML/CSS", "Elementor"],
  },
  {
    id: "marketing",
    number: "03",
    title: "Marketing Digital y Contenido",
    description:
      "Creación de recursos visuales y contenido digital para comunicar ofertas, presentar productos y apoyar objetivos comerciales.",
    capabilities: [
      "Contenido visual para redes sociales",
      "Piezas y banners promocionales",
      "Publicaciones comerciales de venta",
      "Fotografía y retoque de producto",
      "Recursos visuales para campañas",
      "Apoyo a comunicación estratégica",
    ],
    tools: ["Photoshop", "Canva", "AI Tools"],
  },
  {
    id: "video",
    number: "04",
    title: "Edición y Producción Audiovisual",
    description:
      "Producción y edición de videos promocionales y piezas audiovisuales adaptadas a diferentes necesidades de comunicación.",
    capabilities: [
      "Edición de video en alta definición",
      "Producción de reels y shorts virales",
      "Videos promocionales de marca",
      "Montaje y sincronización de audio",
      "Postproducción y corrección de color",
      "Adaptación a formatos verticales y horizontales",
    ],
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "CapCut"],
  },
  {
    id: "print",
    number: "05",
    title: "Diseño para Impresión y Gran Formato",
    description:
      "Preparación y desarrollo de materiales gráficos para su aplicación en productos, soportes publicitarios y medios impresos.",
    capabilities: [
      "Lonas publicitarias y anuncios",
      "Vinilos decorativos y rotulación",
      "Diseño para textiles y sublimación",
      "Material promocional físico",
      "Preparación técnica de archivos para plotter",
      "Control de producción gráfica industrial",
    ],
    tools: ["Plotter Industrial", "Illustrator", "Photoshop"],
  },
  {
    id: "tech",
    number: "06",
    title: "Soluciones Técnicas y Digitales",
    description:
      "Experiencia complementaria en soporte técnico, mantenimiento de equipos y resolución de incidencias tecnológicas.",
    capabilities: [
      "Armado de computadoras personalizadas",
      "Mantenimiento preventivo y correctivo",
      "Diagnóstico de fallas en hardware/software",
      "Instalación y configuración de redes",
      "Instalación de cámaras de seguridad",
      "Soporte técnico presencial y remoto",
    ],
    isComplementary: true,
  },
];
