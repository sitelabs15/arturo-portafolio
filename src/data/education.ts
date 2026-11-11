export type EducationCategory =
  | "Formación Académica"
  | "Diseño y Branding"
  | "Marketing Digital"
  | "Desarrollo Web"
  | "Producción Audiovisual"
  | "Inteligencia Artificial";

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  category: EducationCategory;
  type: "academic" | "course";
  status: string;
  description: string;
  documentStatus: "pending_official" | "in_digitalization";
  documentNote: string;
}

export const educationList: EducationItem[] = [
  {
    id: "dasc-software",
    title: "Ingeniería en Software Web y Diseño",
    institution: "DASC Instituto Tecnológico Universitario",
    category: "Formación Académica",
    type: "academic",
    status: "Estudios concluidos",
    description:
      "Formación integral en arquitectura de software, metodologías de desarrollo, interfaces web y diseño de sistemas interactivos.",
    documentStatus: "pending_official",
    documentNote: "Estudios concluidos; documentación en trámite de expedición.",
  },
  {
    id: "iavep-diseno",
    title: "Técnico Profesional en Diseño Gráfico",
    institution: "Instituto de Artes Visuales del Estado de Puebla",
    category: "Formación Académica",
    type: "academic",
    status: "Estudios concluidos",
    description:
      "Fundamentos formales de composición, teoría del color, tipografía, identidad visual, preprensa y comunicación visual.",
    documentStatus: "pending_official",
    documentNote: "Estudios concluidos; documentación en trámite de expedición.",
  },
  {
    id: "negociacion-ventas",
    title: "Técnicas de Negociación y Venta para Creativos",
    institution: "Capacitación Profesional",
    category: "Marketing Digital",
    type: "course",
    status: "Completado",
    description:
      "Estrategias de comunicación comercial, presentación de propuestas de valor y cierre de proyectos creativos.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "growth-marketing",
    title: "Estrategias de Growth Marketing",
    institution: "Formación Especializada",
    category: "Marketing Digital",
    type: "course",
    status: "Completado",
    description:
      "Experimentación rápida, embudos de conversión y optimización de canales digitales para atracción y retención.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "smma-go",
    title: "Especialización en Gestión de Marketing SMMA GO",
    institution: "SMMA GO",
    category: "Marketing Digital",
    type: "course",
    status: "Completado",
    description:
      "Estructuración de servicios digitales, gestión de campañas comerciales y adquisición de clientes.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "photoshop-mastery",
    title: "Especialización en Adobe Photoshop y Retoque Digital",
    institution: "Formación en Diseño",
    category: "Diseño y Branding",
    type: "course",
    status: "Completado",
    description:
      "Técnicas avanzadas de fotomontaje, máscaras, corrección de color y preparación de piezas publicitarias de alto impacto.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "membership-wordpress",
    title: "Membership Sites y Comercio Electrónico con WordPress",
    institution: "Especialización Web",
    category: "Desarrollo Web",
    type: "course",
    status: "Completado",
    description:
      "Arquitectura de sitios comerciales, pasarelas de pago, gestión de usuarios e integración de WooCommerce.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "premiere-pro",
    title: "Edición Audiovisual con Adobe Premiere Pro",
    institution: "Formación Audiovisual",
    category: "Producción Audiovisual",
    type: "course",
    status: "Completado",
    description:
      "Montaje no lineal, ritmo narrativo, mezcla de audio y optimización de exportación para formatos comerciales.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "davinci-resolve",
    title: "Edición y Postproducción con DaVinci Resolve",
    institution: "Formación Audiovisual",
    category: "Producción Audiovisual",
    type: "course",
    status: "Completado",
    description:
      "Corrección de color profesional mediante nodos, gradación tonal, etalonaje y acabado cinematográfico.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
  {
    id: "ai-prompting",
    title: "Prompting Efectivo e Inteligencia Artificial Aplicada",
    institution: "Innovación Tecnológica",
    category: "Inteligencia Artificial",
    type: "course",
    status: "Completado",
    description:
      "Ingeniería de prompts, flujos de trabajo con LLMs y herramientas generativas para diseño, código y marketing.",
    documentStatus: "in_digitalization",
    documentNote: "Constancia en proceso de digitalización y archivo.",
  },
];

export const educationCategories = [
  "Todos",
  "Formación Académica",
  "Diseño y Branding",
  "Marketing Digital",
  "Desarrollo Web",
  "Producción Audiovisual",
  "Inteligencia Artificial",
] as const;
