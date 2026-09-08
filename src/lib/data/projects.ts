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
};

export const projects: Project[] = [
  {
    slug: "obra-residencial",
    title: "Obra e estrutura",
    category: "Obras",
    excerpt: "Referência visual para situações de obra e acompanhamento técnico.",
    description:
      "Esta página apresenta uma referência visual de obra. O relato técnico, as fotos autorais e os dados do atendimento entram somente após confirmação do trabalho e autorização para publicação.",
    services: ["Obras", "Acompanhamento técnico"],
    featured: true,
    layout: "large",
  },
  {
    slug: "reforma",
    title: "Reforma e acabamento",
    category: "Reformas",
    excerpt: "Referência visual para intervenções e melhorias em imóveis existentes.",
    description:
      "Esta página apresenta uma referência visual de reforma. Escopo, local e imagens de trabalhos realizados serão publicados apenas com informações confirmadas.",
    services: ["Reformas"],
    featured: true,
    layout: "square",
  },
  {
    slug: "vistoria-tecnica",
    title: "Vistoria e documentação",
    category: "Vistorias",
    excerpt: "Referência visual para avaliação técnica e registro de condições.",
    description:
      "Esta página apresenta uma referência visual de vistoria. O objetivo, as constatações e as orientações técnicas serão descritos somente quando houver material autorizado.",
    services: ["Vistorias"],
    featured: true,
    layout: "square",
  },
  {
    slug: "acompanhamento-de-obra",
    title: "Acompanhamento técnico",
    category: "Obras",
    excerpt: "Referência visual para presença técnica durante a execução.",
    description:
      "Esta página apresenta uma referência visual de acompanhamento. O relato de cada trabalho será publicado com escopo, imagens e informações verificadas.",
    services: ["Obras", "Acompanhamento técnico"],
    featured: true,
    layout: "wide",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
