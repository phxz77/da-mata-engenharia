import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { number: "01", label: "Projetos realizados", note: "Portfólio em documentação" },
  { number: "02", label: "Obras acompanhadas", note: "Execução com método" },
  { number: "03", label: "Vistorias técnicas", note: "Avaliação objetiva" },
  { number: "04", label: "Atendimento personalizado", note: "Cada demanda no seu contexto" },
];

export function Authority() {
  return (
    <section className="border-y border-line bg-white" aria-labelledby="authority-heading">
      <Container className="py-14 lg:py-16">
        <Reveal>
          <p
            id="authority-heading"
            className="max-w-xl text-sm font-medium tracking-[-0.01em] text-navy sm:text-base"
          >
            Engenharia com planejamento, técnica e responsabilidade.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index}>
              <article className="border-t border-gold/50 pt-5">
                <p className="text-[11px] tracking-[0.28em] text-gold-dark">{item.number}</p>
                <h3 className="mt-3 text-base font-semibold text-navy">{item.label}</h3>
                <p className="mt-2 text-sm text-muted">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
