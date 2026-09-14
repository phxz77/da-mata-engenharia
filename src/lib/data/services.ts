export type Service = {
  id: string;
  number: string;
  title: string;
  href: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "obras",
    number: "01",
    title: "Consultoria e acompanhamento",
    href: "/#contato",
    description:
      "Orientação para quem vai iniciar, reformar ou acompanhar uma obra e precisa tomar decisões com base técnica.",
  },
  {
    id: "reformas",
    number: "02",
    title: "Obras e reformas",
    href: "/#contato",
    description:
      "Acompanhamento e organização de intervenções em casas, imóveis e obras de pequeno porte, conforme o escopo definido.",
  },
  {
    id: "vistorias",
    number: "03",
    title: "Vistorias, laudos e pareceres",
    href: "/#vistorias",
    description:
      "Avaliação técnica para entender um problema, registrar condições e orientar os próximos passos, com laudo ou parecer quando aplicável.",
  },
  {
    id: "arquitetura",
    number: "04",
    title: "Escritórios de Arquitetura",
    href: "/#contato",
    description:
      "Apoio técnico para escritórios de arquitetura e projetos que precisam de coordenação, clareza operacional e acompanhamento na execução.",
  },
];
