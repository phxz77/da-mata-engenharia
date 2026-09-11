export type ClientReview = {
  quote: string;
  illustrative?: boolean;
};

export const clientReviews: ClientReview[] = [
  {
    quote: "Obrigada Paulo por fazer parte do projeto, sem você não teríamos conseguido esse resultado! Desculpa qualquer estresse durante o processo. O apartamento ficou lindo.",
  },
  {
    quote: "Gostei muito do acompanhamento durante o serviço. Sempre que tivemos alguma dúvida conseguimos conversar e resolver.",
    illustrative: true,
  },
  {
    quote: "Obrigado pela atenção durante a execução. O serviço ficou muito bom e conseguimos chegar ao resultado que esperávamos.",
    illustrative: true,
  },
  {
    quote: "Foi muito importante ter alguém acompanhando a execução e cuidando dos detalhes da obra. Obrigado pelo trabalho e pela parceria.",
    illustrative: true,
  },
  {
    quote: "Obrigado pelo suporte durante todo o processo. Tivemos alguns imprevistos, mas conseguimos resolver tudo e finalizar o serviço.",
    illustrative: true,
  },
  {
    quote: "Ficamos muito satisfeitos com o resultado. Obrigado pelo acompanhamento e por sempre buscar uma solução.",
    illustrative: true,
  },
];