import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { number: "01", label: "Entender o problema", note: "Escuta antes da indicação" },
  { number: "02", label: "Avaliar tecnicamente", note: "O que existe e o que precisa ser feito" },
  { number: "03", label: "Acompanhar o necessário", note: "Presença conforme o escopo contratado" },
  { number: "04", label: "Orientar com clareza", note: "Decisões explicadas sem complicação" },
];

export function Authority() {
  return (
    <section className="border-y border-white/10 bg-navy" aria-labelledby="authority-heading">
      <Container className="py-12 lg:py-14">
        <Reveal>
          <p
            id="authority-heading"
            className="max-w-xl text-sm font-medium tracking-[-0.01em] text-paper sm:text-base"
          >
            Um engenheiro responsável acompanhando o que foi combinado com você.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index}>
              <article className="border-t border-gold/50 pt-5">
                <p className="text-[11px] tracking-[0.28em] text-gold-dark">{item.number}</p>
                <h3 className="mt-3 text-base font-semibold text-paper">{item.label}</h3>
                <p className="mt-2 text-sm text-paper/55">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
