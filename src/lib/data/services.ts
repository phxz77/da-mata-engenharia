import { photos } from "@/lib/data/images";

export type Service = {
  id: string;
  number: string;
  title: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "obras",
    number: "01",
    title: "Obras",
    href: "/#contato",
    description:
      "Condução de obras com planejamento, organização do canteiro e acompanhamento técnico em cada etapa da execução.",
    image: photos.obras,
    imageAlt: "Canteiro de obras com armação, forma e equipe em execução",
  },
  {
    id: "reformas",
    number: "02",
    title: "Reformas",
    href: "/#contato",
    description:
      "Reformas pensadas para intervir no que já existe com método, segurança e respeito à edificação original.",
    image: photos.reformas,
    imageAlt: "Interior residencial após reforma, com living integrado e iluminação natural",
  },
  {
    id: "vistorias",
    number: "03",
    title: "Vistorias",
    href: "/#vistorias",
    description:
      "Avaliação técnica para registrar condições, orientar decisões e documentar o estado da edificação com clareza.",
    image: photos.vistorias,
    imageAlt: "Vistoria e conferência técnica sobre desenhos, medições e documentação",
  },
];
