export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  highlight: string;
  details: string[];
}

export interface SecondaryProject {
  company: string;
  role: string;
}

export const careerTimeline: TimelineItem[] = [
  {
    company: "BELAHOME",
    role: "Diseñador Gráfico / Operador de Plotter / Técnico de Sistemas / Desarrollo Web",
    period: "Mayo 2023 – Julio 2026",
    highlight:
      "Diseño textil para plotter industrial, contenido para redes, soporte técnico y apoyo en la administración web.",
    details: [
      "Diseño de productos textiles personalizados (manteles, cojines, cortinas, cuadros, frazadas y sábanas).",
      "Operación de plotter industrial para impresión de lonas, textiles y materiales de gran formato.",
      "Creación de contenido visual para campañas digitales, reels y videos promocionales.",
      "Armado, mantenimiento y soporte básico de equipos de cómputo.",
    ],
  },
  {
    company: "LENKABITS",
    role: "Fotógrafo de Producto / Producción de Video / Diseñador Gráfico / Gestión de Tiendas",
    period: "Abril 2021 – Enero 2023",
    highlight:
      "Fotografía y video de producto, gestión de catálogo para comercio digital y ensamble personalizado de computadoras.",
    details: [
      "Diseño gráfico para publicaciones comerciales, promociones y contenido de redes sociales.",
      "Fotografía, edición y publicación de productos para venta digital.",
      "Creación de reels promocionales y contenido audiovisual dinámico.",
      "Armado de computadoras personalizadas y atención al cliente presencial y digital.",
    ],
  },
  {
    company: "JLJ TECHNICAL SUPPORT",
    role: "Diseñador Gráfico / Técnico de Redes / Técnico de Hardware y Software",
    period: "Enero 2019 – Enero 2021",
    highlight:
      "Servicio técnico en hardware, redes y terminales; diseño corporativo, membretes, folletos y uniformes.",
    details: [
      "Reparación de dispositivos Blackview, impresoras, terminales de compra y computadoras.",
      "Instalación, configuración y mantenimiento de redes y cámaras de seguridad.",
      "Diseño gráfico para branding corporativo: wallpapers, folletos, lonas, tarjetas y uniformes.",
      "Elaboración de reportes, análisis de ventas y atención técnica presencial y remota.",
    ],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    company: "Provise",
    role: "Diseño gráfico, branding y desarrollo web",
  },
  {
    company: "Blopi",
    role: "Branding, publicidad y desarrollo web",
  },
  {
    company: "Lumina Learning",
    role: "Rebranding",
  },
  {
    company: "Sitelabs",
    role: "Diseño gráfico, ventas y desarrollo web",
  },
  {
    company: "Viken",
    role: "Diseño gráfico, publicidad y gestión de tiendas digitales",
  },
  {
    company: "Kwii",
    role: "Diseño gráfico y branding",
  },
  {
    company: "Reylim",
    role: "Diseño gráfico, branding y desarrollo web",
  },
  {
    company: "Lavotenis",
    role: "Diseño gráfico, grabación y edición de video, y desarrollo web",
  },
  {
    company: "GAC Motors",
    role: "Render 3D de planta en Atlixco",
  },
  {
    company: "PAT Arquitectura",
    role: "Renders para proyectos arquitectónicos",
  },
  {
    company: "Taquería El Pipirín",
    role: "Desarrollo web y SEO",
  },
  {
    company: "M3M6 Ambiental",
    role: "Desarrollo web y SEO",
  },
  {
    company: "Sky Brothers",
    role: "Desarrollo web y SEO",
  },
  {
    company: "Meraki Studio",
    role: "Desarrollo web y SEO",
  },
  {
    company: "Matissa33",
    role: "Desarrollo web y SEO",
  },
  {
    company: "Alianza Inmobiliaria",
    role: "Desarrollo web y SEO",
  },
  {
    company: "Sliders",
    role: "Diseño gráfico, fotografía y branding",
  },
  {
    company: "Mundo Burger",
    role: "Diseño gráfico, fotografía y branding",
  },
];
