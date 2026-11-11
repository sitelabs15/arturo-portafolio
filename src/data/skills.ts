export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    note?: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "design-branding",
    title: "Diseño Gráfico y Branding",
    description:
      "Creación de identidades visuales, logotipos, piezas publicitarias y materiales corporativos para todo tipo de formatos.",
    skills: [
      { name: "Diseño de logotipos" },
      { name: "Identidad visual" },
      { name: "Diseño publicitario" },
      { name: "Diseño para redes sociales" },
      { name: "Lonas, vinilos y folletos" },
      { name: "Tarjetas y uniformes" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "Adobe InDesign" },
      { name: "Affinity" },
      { name: "Adobe Acrobat" },
      { name: "Canva" },
    ],
  },
  {
    id: "marketing-content",
    title: "Marketing Digital y Redes Sociales",
    description:
      "Estrategias visuales de venta, gestión de cuentas, fotografía de producto y contenido comercial para canales digitales.",
    skills: [
      { name: "Gestión de redes sociales" },
      { name: "Creación de contenido visual" },
      { name: "Publicaciones comerciales" },
      { name: "Reels y videos promocionales" },
      { name: "Branding para negocios" },
      { name: "Estrategias visuales de venta" },
      { name: "Fotografía de producto" },
      { name: "Ventas y marketing digital" },
    ],
  },
  {
    id: "web-development",
    title: "Desarrollo Web",
    description:
      "Construcción y administración de sitios web orientados a objetivos comerciales, con enfoque en claridad y usabilidad.",
    skills: [
      { name: "WordPress" },
      { name: "HTML" },
      { name: "Estructura de páginas web" },
      { name: "Diseño web para negocios" },
      { name: "Diseño responsive" },
      { name: "SEO básico y metadatos" },
      { name: "Google Workspace" },
      { name: "Desarrollo web junior" },
    ],
  },
  {
    id: "video-audiovisual",
    title: "Edición de Video",
    description:
      "Montaje, edición y posproducción de contenido audiovisual para redes sociales, publicidad y proyectos digitales.",
    skills: [
      { name: "DaVinci Resolve" },
      { name: "Adobe Premiere" },
      { name: "CapCut" },
      { name: "Filmora" },
      { name: "Adobe Animate" },
      { name: "Videos para redes sociales" },
      { name: "Edición de contenido promocional" },
    ],
  },
  {
    id: "technical-support",
    title: "Soporte Técnico y Tecnología",
    description:
      "Diagnóstico, mantenimiento y armado de equipos, además de redes, cámaras de seguridad y atención técnica especializada.",
    skills: [
      { name: "Reparación de computadoras" },
      { name: "Armado de PC" },
      { name: "Impresoras y terminales de compra" },
      { name: "Instalación y mantenimiento de redes" },
      { name: "Cámaras de seguridad" },
      { name: "Servicio técnico remoto y presencial" },
      { name: "Instalación de servidores" },
      { name: "Ponchado de cable RJ45" },
    ],
  },
  {
    id: "productivity-data",
    title: "Ofimática y Administración",
    description:
      "Gestión administrativa, resumen de datos, reportería y presentaciones profesionales para la operación diaria.",
    skills: [
      { name: "Microsoft Office" },
      { name: "Excel profesional" },
      { name: "Presentaciones profesionales" },
      { name: "Resumen y presentación de datos" },
      { name: "Administración de empresas" },
      { name: "Organización de información" },
      { name: "Elaboración de reportes" },
    ],
  },
  {
    id: "ai-assisted-dev",
    title: "Inteligencia Artificial y Desarrollo Asistido",
    description:
      "Uso de modelos y entornos de IA para acelerar flujos creativos, de marketing y de desarrollo web.",
    skills: [
      { name: "Claude" },
      { name: "Codex" },
      { name: "Antigravity" },
      { name: "Google Flow" },
      { name: "Google AI Studio" },
      { name: "Lovable" },
      { name: "Cursor" },
      { name: "Windsurf" },
      { name: "VibeCoding" },
      { name: "IA aplicada a diseño y marketing" },
    ],
  },
  {
    id: "soft-skills",
    title: "Habilidades Blandas",
    description:
      "Competencias humanas y profesionales que facilitan la comunicación, la organización y el trabajo colaborativo.",
    skills: [
      { name: "Atención al cliente" },
      { name: "Resolución de problemas" },
      { name: "Creatividad" },
      { name: "Adaptabilidad" },
      { name: "Comunicación asertiva" },
      { name: "Pensamiento estratégico" },
      { name: "Aprendizaje rápido" },
      { name: "Trabajo en equipo" },
      { name: "Organización" },
      { name: "Atención al detalle" },
      { name: "Enfoque comercial" },
      { name: "Responsabilidad" },
      { name: "Liderazgo" },
      { name: "Iniciativa" },
      { name: "Honestidad" },
    ],
  },
];
