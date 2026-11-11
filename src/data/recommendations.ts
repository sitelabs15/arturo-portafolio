export interface Recommendation {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  date: string;
  contact?: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "bela-home",
    quote:
      "Destaca por su notable iniciativa, proponiendo soluciones y mejoras de manera proactiva sin necesidad de ser solicitado. Una de sus mayores fortalezas es su capacidad de aprendizaje, adaptándose rápidamente a nuevos retos y herramientas.",
    author: "Jesús Altamirano",
    role: "Director",
    company: "Bela Home",
    date: "15 de febrero de 2026",
    contact: "recursoshumanos@belahome.com",
  },
  {
    id: "lenkabits",
    quote:
      "Es un ciudadano con una conducta intachable. Ha demostrado ser un excelente empleado en los distintos puestos que desempeñó y un gran trabajador, comprometido, responsable y fiel cumplidor de sus tareas.",
    author: "Obed Hernández Ortiz",
    role: "Dirección",
    company: "Lenkabits",
    date: "10 de enero de 2023",
    contact: "lenkabitscontacto@gmail.com",
  },
  {
    id: "provise",
    quote:
      "He sido testigo de su excepcional habilidad para desempeñar la electrónica y el manejo de diferentes herramientas, además de que es alguien que siempre nos apoya en otros puestos. Un profesional altamente motivado y orientado a los resultados.",
    author: "Eduardo Sánchez",
    role: "Jefe de Producción",
    company: "Provise",
    date: "5 de diciembre de 2021",
    contact: "contacto@proovedoradelsur.com",
  },
  {
    id: "jlj",
    quote:
      "Su compromiso con la excelencia y su pasión son evidentes en todo lo que hace. Ha demostrado ser un profesional talentoso, siempre dispuesto a asumir nuevos desafíos y a aprender de manera continua.",
    author: "Jonathan Ortíz",
    role: "Dirección",
    company: "JLJ Technical Support",
    date: "20 de enero de 2021",
    contact: "contacto@jljtec.com.mx",
  },
];

export const recommendationsPdfUrl = "/Cartas%20de%20recomendacion.pdf";
