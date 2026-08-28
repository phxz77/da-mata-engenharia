export type Project = {
  slug: string;
  title: string;
  category: "Obras" | "Reformas" | "Vistorias";
  location?: string;
  excerpt: string;
  description: string;
  services: string[];
  featured: boolean;
  layout: "large" | "square" | "wide";
  placeholder: true;
  cover: string;
  gallery: string[];
  coverAlt: string;
};

export const projects: Project[] = [
  {
    slug: "obra-residencial",
    title: "[INSERIR PROJETO] — Obra residencial",
    category: "Obras",
    excerpt: "Estrutura de portfólio para obra residencial. Inserir nome, local e descrição oficiais.",
    description:
      "[INSERIR DESCRIÇÃO DO PROJETO] Espaço reservado para o relato técnico da obra: contexto, escopo, etapas executadas e resultado. Substitua este texto e as imagens ilustrativas pelas fotografias reais do projeto.",
    services: ["Obras", "Acompanhamento técnico"],
    featured: true,
    layout: "large",
    placeholder: true,
    cover: "/photos/projeto-1.jpg",
    gallery: ["/photos/projeto-1.jpg", "/photos/projeto-2.jpg", "/photos/projeto-2b.jpg"],
    coverAlt: "Residência contemporânea em madeira, vidro e concreto",
  },
  {
    slug: "reforma",
    title: "[INSERIR PROJETO] — Reforma",
    category: "Reformas",
    excerpt: "Estrutura de portfólio para reforma. Inserir nome, local e descrição oficiais.",
    description:
      "[INSERIR DESCRIÇÃO DO PROJETO] Descreva o estado original, as intervenções realizadas e o critério técnico adotado na reforma.",
    services: ["Reformas"],
    featured: true,
    layout: "square",
    placeholder: true,
    cover: "/photos/projeto-2.jpg",
    gallery: ["/photos/projeto-2.jpg", "/photos/projeto-2b.jpg"],
    coverAlt: "Volume residencial reformado, com madeira, vidro e acesso pavimentado",
  },
  {
    slug: "vistoria-tecnica",
    title: "[INSERIR PROJETO] — Vistoria técnica",
    category: "Vistorias",
    excerpt: "Estrutura de portfólio para vistoria. Inserir identificação autorizada e descrição oficiais.",
    description:
      "[INSERIR DESCRIÇÃO DO PROJETO] Utilize este espaço para explicar o objetivo da vistoria, o que foi observado e as orientações técnicas resultantes — sem expor dados sigilosos.",
    services: ["Vistorias"],
    featured: true,
    layout: "square",
    placeholder: true,
    cover: "/photos/projeto-3.jpg",
    gallery: ["/photos/projeto-3.jpg", "/photos/hero.jpg"],
    coverAlt: "Análise técnica sobre desenhos, instrumentos de medição e documentação de projeto",
  },
  {
    slug: "acompanhamento-de-obra",
    title: "[INSERIR PROJETO] — Acompanhamento de obra",
    category: "Obras",
    excerpt: "Estrutura de portfólio para acompanhamento de obra. Inserir nome, local e descrição oficiais.",
    description:
      "[INSERIR DESCRIÇÃO DO PROJETO] Relato do acompanhamento: planejamento, execução e entrega. Substitua as imagens ilustrativas pelas fotos oficiais da obra.",
    services: ["Obras", "Acompanhamento técnico"],
    featured: true,
    layout: "wide",
    placeholder: true,
    cover: "/photos/projeto-4.jpg",
    gallery: ["/photos/projeto-4.jpg", "/photos/about-detail.jpg"],
    coverAlt: "Acompanhamento de obra: equipe e estrutura no pavimento em execução",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
