import type { GalleryItem } from "@/components/ui/circular-gallery";

const photo = (name: string) => `/photos/${name}`;

export const galleryItems: GalleryItem[] = [
  {
    id: "paulo-cesar",
    title: "Eng. Paulo Cesar",
    description: "Presença técnica no trabalho real.",
    image: photo("1788892898433_IMG_4960_4K (1).jpg"),
    alt: "Engenheiro Paulo Cesar em uma obra, usando capacete e segurando uma prancheta.",
    position: "center 32%",
  },
  {
    id: "registro-4953",
    title: "Registro de obra",
    description: "Acompanhamento de uma execução.",
    image: photo("1788892898434_IMG_4953_4K (1).jpg"),
    alt: "Registro fotográfico de uma área em execução.",
  },
  {
    id: "registro-4954",
    title: "Execução",
    description: "Detalhes do trabalho em andamento.",
    image: photo("1788892898434_IMG_4954_4K (1).jpg"),
    alt: "Detalhe de uma etapa de execução em obra.",
  },
  {
    id: "registro-4957",
    title: "Reforma",
    description: "Intervenção em um imóvel existente.",
    image: photo("1788892898434_IMG_4957_4K (1).jpg"),
    alt: "Ambiente interno durante uma reforma.",
  },
  {
    id: "registro-4947",
    title: "Obra acompanhada",
    description: "Estrutura e execução no local.",
    image: photo("1788892898435_IMG_4947_4K (1).jpg"),
    alt: "Área externa de uma obra em execução.",
  },
  {
    id: "registro-4948",
    title: "Execução de estrutura",
    description: "Registro de uma etapa construtiva.",
    image: photo("1788892898435_IMG_4948_4K (1).jpg"),
    alt: "Estrutura construída durante uma etapa de obra.",
  },
  {
    id: "registro-4952",
    title: "Acompanhamento técnico",
    description: "Leitura do espaço e das condições existentes.",
    image: photo("1788892898435_IMG_4952_4K (1).jpg"),
    alt: "Ambiente interno registrado durante uma intervenção técnica.",
  },
  {
    id: "registro-4949",
    title: "Obra real",
    description: "Materiais, estrutura e rotina de execução.",
    image: photo("1788892898436_IMG_4949_4K (1).jpg"),
    alt: "Área de obra com materiais e elementos construtivos visíveis.",
  },
  {
    id: "registro-4950",
    title: "Reforma residencial",
    description: "Transformação de um espaço existente.",
    image: photo("1788892898436_IMG_4950_4K (1).jpg"),
    alt: "Ambiente residencial durante uma reforma.",
  },
  {
    id: "registro-4951",
    title: "Detalhe técnico",
    description: "Um recorte do trabalho executado.",
    image: photo("1788892898436_IMG_4951_4K (1).jpg"),
    alt: "Detalhe de instalação e estrutura em uma obra.",
  },
  {
    id: "registro-4946",
    title: "Acompanhamento de obra",
    description: "Registro de uma etapa de execução.",
    image: photo("1788892898437_IMG_4946_4K (1).jpg"),
    alt: "Área de obra registrada durante a execução.",
  },
  {
    id: "registro-4956",
    title: "Trabalho realizado",
    description: "Um registro do resultado construído.",
    image: photo("1788892898437_IMG_4956_4K (1).jpg"),
    alt: "Estrutura e acabamento de um trabalho realizado.",
  },
  {
    id: "registro-4958",
    title: "Experiência de obra",
    description: "Fotografia do acervo real da Da Mata Engenharia.",
    image: photo("1788892898438_IMG_4958_4K (1).jpg"),
    alt: "Registro de um espaço construído ou reformado.",
  },
];
