export interface ProfileData {
  fullName: string;
  shortName: string;
  avatar: string;
  headline: string;
  tagline: string;
  heroBadge: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsappUrl: string;
  portrait: string;
  languages: { language: string; level: string }[];
  metrics: {
    value: string;
    label: string;
    sublabel?: string;
  }[];
}

export const profile: ProfileData = {
  fullName: "ARTURO URBINA REYES",
  shortName: "Arturo Urbina",
  avatar: "/perfil.jpeg",
  headline: "DISEÑO DIGITAL, BRANDING Y EXPERIENCIAS WEB.",
  tagline:
    "Diseñador digital, especialista en marketing y contenido visual, con experiencia en soporte técnico y desarrollo web.",
  heroBadge: "DISEÑO DIGITAL · BRANDING · WEB",
  location: "Puebla, México",
  email: "arturourbina6161@gmail.com",
  phone: "+52 222 171 1844",
  phoneHref: "tel:+522221711844",
  whatsappUrl: "https://wa.me/522221711844",
  portrait: "/arturo-portrait.jpg",
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "C1 Profesional" },
  ],
  metrics: [
    {
      value: "+6",
      label: "Años de experiencia",
      sublabel: "En diseño, contenido digital y tecnología",
    },
    {
      value: "+100",
      label: "Reels producidos",
      sublabel: "En el proyecto oficial Lavotenis",
    },
    {
      value: "+10M",
      label: "Visualizaciones públicas",
      sublabel: "Acumuladas en TikTok (Lavotenis)",
    },
  ],
};
