import p5 from "@/assets/projects/p5.jpg";
import p6 from "@/assets/projects/p6.jpg";
import p7 from "@/assets/projects/p7.jpg";
import p8 from "@/assets/projects/p8.jpg";
import p9 from "@/assets/projects/p9.jpg";
import p10 from "@/assets/projects/p10.jpg";
import p11 from "@/assets/projects/p11.jpg";
import p12 from "@/assets/projects/p12.jpg";
import p13 from "@/assets/projects/p13.jpg";
import p14 from "@/assets/projects/p14.jpg";
import p15 from "@/assets/projects/p15.jpg";
import p16 from "@/assets/projects/p16.jpg";
import p18 from "@/assets/projects/p18.jpg";
import p19 from "@/assets/projects/p19.jpg";
import p20 from "@/assets/projects/p20.jpg";
import p21 from "@/assets/projects/p21.jpg";
import p22 from "@/assets/projects/p22.jpg";
import p23 from "@/assets/projects/p23.jpg";
import p24 from "@/assets/projects/p24.jpg";
import p26 from "@/assets/projects/p26.jpg";
import p27 from "@/assets/projects/p27.jpg";
import p29 from "@/assets/projects/p29.jpg";
import p30 from "@/assets/projects/p30.jpg";
import p31 from "@/assets/projects/p31.jpg";

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

export const projects: Project[] = [
  {
    id: "provise",
    title: "Rebranding for Provise",
    client: "Provise",
    category: "Image & Logo",
    date: "July – August 2023",
    year: 2023,
    tags: ["Rebranding", "Logo", "Merch"],
    cover: p5,
    gallery: [p5],
    overview:
      "Complete rebranding for Provise, including a refreshed visual identity, logo system and merchandise applications.",
    scope: ["Brand strategy", "Logo design", "Merch design", "Color & type system"],
    deliverables: ["Isologo", "Brand guidelines", "Merch mockups", "Social templates"],
    role: "Brand & Graphic Designer",
  },
  {
    id: "sliders",
    title: "Slider's — Publicity, Logo & Menu",
    client: "Slider's",
    category: "Image & Logo",
    date: "June 2022",
    year: 2022,
    tags: ["Logo", "Menu", "Publicity"],
    cover: p6,
    gallery: [p6],
    overview:
      "Visual identity for Slider's: logo, printed menu and publicity pieces designed around a bold, appetising tone.",
    scope: ["Logo design", "Menu layout", "Print publicity"],
    deliverables: ["Logotype", "A4 menu", "Promo flyers"],
    role: "Graphic Designer",
  },
  {
    id: "kwii",
    title: "KWII Store — Branding & Merch",
    client: "KWII Store",
    category: "Image & Logo",
    date: "June 2023",
    year: 2023,
    tags: ["Branding", "Merch", "Publicity"],
    cover: p7,
    gallery: [p7, p8],
    overview:
      "Identity system for KWII, an import store. Built a flexible logo, packaging and a recurring social-publicity template.",
    scope: ["Branding", "Publicity design", "Merch"],
    deliverables: ["Isotipo", "Catalogue layouts", "Promo posts"],
    role: "Brand Designer",
  },
  {
    id: "blopi",
    title: "BLOPI — Branding & Publicity",
    client: "BLOPI",
    category: "Image & Logo",
    date: "October 2023",
    year: 2023,
    tags: ["Branding", "Publicity", "Merch"],
    cover: p9,
    gallery: [p9],
    overview:
      "Full visual system for BLOPI, a digital marketplace and delivery app. Posters, recruiting pieces and merch built around a single design language.",
    scope: ["Branding", "Campaign design", "Merch"],
    deliverables: ["Logo system", "Acquisition posters", "App publicity"],
    role: "Brand & Graphic Designer",
  },
  {
    id: "logos-collection",
    title: "Logo Collection",
    category: "Image & Logo",
    date: "2022 – 2024",
    year: 2024,
    tags: ["Logotype", "Isotype", "Isologo"],
    cover: p10,
    gallery: [p10, p11],
    overview:
      "Selected marks across personal brands, channels and small businesses — including Nfinity, Sad Duck, Gamepals, Shortcut, El Rincon, Spacewings, Reylym and more.",
    scope: ["Logotype", "Isotype", "Imagotype"],
    deliverables: ["10+ logo lockups", "Personal brand marks"],
    role: "Logo Designer",
  },
  {
    id: "lenkabits-products",
    title: "Lenkabits — Product Photography & Design",
    client: "Lenkabits",
    category: "Image & Logo",
    date: "January 2023 – February 2024",
    year: 2024,
    tags: ["Product", "Catalogue"],
    cover: p12,
    gallery: [p12],
    overview:
      "Ongoing product imagery and catalogue layouts for Lenkabits — a year-long collaboration across multiple drops.",
    scope: ["Product photo composition", "Catalogue design"],
    deliverables: ["Catalogue spreads", "Product cards"],
    role: "Graphic Designer",
  },
  {
    id: "viken",
    title: "Branding for Viken Store",
    client: "Viken Store",
    category: "Image & Logo",
    date: "December 2023",
    year: 2023,
    tags: ["Branding", "PC Builds", "Product"],
    cover: p13,
    gallery: [p13, p14],
    overview:
      "Branding and product line presentation for Viken Store — naming, badging and catalog visuals for the PC build lineup (Doom, Draco, Ultron, Performance II, Dragonfly, Kioto).",
    scope: ["Brand identity", "Product naming", "Catalogue design"],
    deliverables: ["Logo", "Product badges", "Catalogue"],
    role: "Brand Designer",
  },
  {
    id: "angelflow-thumbnails",
    title: "AngelFlow — YouTube Thumbnails",
    client: "AngelFlow",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["Thumbnails", "YouTube"],
    cover: p15,
    gallery: [p15, p16],
    overview:
      "Series of thumbnails for the AngelFlow YouTube channel — vlogs, travel and lifestyle. Designed for click-through with strong faces, contrast and consistent type.",
    scope: ["Thumbnail design", "Series identity"],
    deliverables: ["20+ thumbnails", "Reusable templates"],
    role: "Graphic Designer",
  },
  {
    id: "shortcut",
    title: "Shortcut — Podcast Editing",
    client: "Shortcut",
    category: "Video",
    date: "2023",
    year: 2023,
    tags: ["Podcast", "YouTube", "Editing"],
    cover: p18,
    gallery: [p18],
    overview:
      "Long-form podcast editing and packaging for Shortcut — episodes on religion, love and culture. Includes thumbnails, intros and lower-thirds.",
    scope: ["Video editing", "Podcast packaging", "Thumbnails"],
    deliverables: ["Edited episodes", "Episode covers"],
    role: "Video Editor",
  },
  {
    id: "lenkabits-tiktok",
    title: "Lenkabits — TikTok / Reels",
    client: "Lenkabits",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Short-form"],
    cover: p19,
    gallery: [p19, p20],
    overview:
      "Short-form product videos and publicity for Lenkabits across TikTok and Reels — punchy edits with on-brand motion and captions.",
    scope: ["Video editing", "Motion graphics", "Captions"],
    deliverables: ["20+ short videos", "Recurring publicity drops"],
    role: "Video Editor",
  },
  {
    id: "lavotenis-reels",
    title: "Lavotenis — TikTok / Reels",
    client: "Lavotenis",
    category: "Video",
    date: "2023 – 2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Product"],
    cover: p21,
    gallery: [p21],
    overview:
      "Product videos and brand publicity for Lavotenis — multiple viral hits including a 69.9K-view reel.",
    scope: ["Video editing", "Short-form strategy"],
    deliverables: ["Series of product reels"],
    role: "Video Editor",
  },
  {
    id: "mente-de-juego",
    title: "Mente de Juego — YouTube",
    client: "Mente de Juego",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Editing", "Thumbnails"],
    cover: p22,
    gallery: [p22],
    overview:
      "Editing and thumbnails for Mente de Juego — essays on video games (Conker, Zelda) with cinematic pacing and bold typographic covers.",
    scope: ["Video editing", "Thumbnail design"],
    deliverables: ["Edited essays", "Episode thumbnails"],
    role: "Video Editor & Designer",
  },
  {
    id: "bela-home-reels",
    title: "Béla Home — TikTok / Reels",
    client: "Béla Home",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["TikTok", "Reels", "Home goods"],
    cover: p23,
    gallery: [p23],
    overview:
      "Short-form product videos for Béla Home — curtains and home textiles, with editorial pacing and warm color grading.",
    scope: ["Video editing", "Color grading", "Publicity"],
    deliverables: ["Series of product reels"],
    role: "Video Editor",
  },
  {
    id: "detras-del-pixel",
    title: "Detrás del Píxel — YouTube",
    client: "Detrás del Píxel",
    category: "Video",
    date: "2024",
    year: 2024,
    tags: ["YouTube", "Editing"],
    cover: p24,
    gallery: [p24],
    overview:
      "Editing and thumbnails for Detrás del Píxel — essays on game design and the industry (Stardew Valley, Dark Souls).",
    scope: ["Video editing", "Thumbnail design"],
    deliverables: ["Edited essays", "Episode thumbnails"],
    role: "Video Editor & Designer",
  },
  {
    id: "tabasco-renders",
    title: "Tabasco — Architectural Renders",
    client: "Private",
    category: "Render Builds",
    date: "2024",
    year: 2024,
    tags: ["3D", "Render", "Architecture"],
    cover: p26,
    gallery: [p26, p27],
    overview:
      "Architectural visualisation series for a Tabasco residence. Photorealistic interior and exterior renders built in Blender.",
    scope: ["3D modeling", "Lighting", "Render"],
    deliverables: ["Hero exterior", "Interior set", "Detail close-ups"],
    role: "3D Artist & Render",
  },
  {
    id: "bela-home-web",
    title: "Béla Home — Online Store",
    client: "Béla Home",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["E-commerce", "Web Store", "Home goods"],
    cover: p29,
    gallery: [p29],
    overview:
      "Online store for Béla Home — curtains and home textiles. Catalogue, product cards, checkout and on-brand photography.",
    scope: ["Web design", "E-commerce", "Product photography"],
    deliverables: ["Storefront", "Product pages", "Checkout flow"],
    role: "Web Designer",
  },
  {
    id: "pipirin",
    title: "Taquería El Pipirín — Website",
    client: "Taquería El Pipirín",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Restaurant", "Web", "Menu"],
    cover: p30,
    gallery: [p30],
    overview:
      "Website for Taquería El Pipirín — a Poblano classic with over 50 years of tradition. Warm, family-feeling design built around the menu.",
    scope: ["Web design", "Menu layout", "Photography direction"],
    deliverables: ["Landing", "Menu page", "Contact"],
    role: "Web Designer",
  },
  {
    id: "lavotenis-web",
    title: "Lavotenis — Website",
    client: "Lavotenis",
    category: "Web",
    date: "2024",
    year: 2024,
    tags: ["Web", "Services", "Training"],
    cover: p31,
    gallery: [p31],
    overview:
      "Marketing website for Lavotenis — training, products and services for sneaker-care businesses across Latin America.",
    scope: ["Web design", "Information architecture"],
    deliverables: ["Home", "Services", "Contact"],
    role: "Web Designer",
  },
];

export const categories: { key: Category | "All"; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Image & Logo", label: "Image & Logo" },
  { key: "Video", label: "Video" },
  { key: "Render Builds", label: "Render Builds" },
  { key: "Web", label: "Web" },
];

export const featured = ["provise", "viken", "tabasco-renders", "bela-home-web"]
  .map((id) => projects.find((p) => p.id === id)!)
  .filter(Boolean);
