export const site = {
  name: "Da Mata Engenharia",
  legalName: "Da Mata Engenharia",
  slogan: "Engenharia próxima • Técnica • Responsável",
  eyebrow: "Da Mata Engenharia",
  tagline: "Engenharia próxima para resolver o que sua obra precisa.",
  description:
    "A Da Mata Engenharia oferece atendimento direto com o Eng. Paulo Cesar para avaliar problemas, orientar decisões e acompanhar obras, reformas e vistorias em São Paulo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactName: "Eng. Paulo Cesar",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5511953232468",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+55 11 95323-2468",
  email: process.env.NEXT_PUBLIC_EMAIL || "eng1.paulocesar@gmail.com",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/ddo_engpc/",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "@ddo_engpc",
  address:
    process.env.NEXT_PUBLIC_ADDRESS ||
    "Avenida Oliveira Freire, São Paulo, 08080-000",
  hours: process.env.NEXT_PUBLIC_HOURS || "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Oliveira+Freire%2C+S%C3%A3o+Paulo%2C+08080-000",
  placeholders: {
    phone: "[INSERIR TELEFONE]",
    email: "[INSERIR E-MAIL]",
    instagram: "[INSERIR INSTAGRAM]",
    address: "[INSERIR ENDEREÇO]",
    hours: "[INSERIR HORÁRIO]",
    company: "[INSERIR DESCRIÇÃO DA EMPRESA]",
  },
} as const;

export const defaultWhatsAppMessage =
  "Olá, Eng. Paulo Cesar. Gostaria de explicar uma obra, reforma ou problema técnico.";

export function hasWhatsApp() {
  return Boolean(site.whatsapp);
}

export function hasEmail() {
  return Boolean(site.email);
}

export function hasInstagram() {
  return Boolean(site.instagram);
}
