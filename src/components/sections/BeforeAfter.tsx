import { ImageCompare } from "@/components/ui/ImageCompare";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DimensionMark } from "@/components/ui/DimensionMark";
import { beforeAfterItems } from "@/lib/data/before-after";

export function BeforeAfter() {
  const item = beforeAfterItems[0];

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="before-after-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="before-after-heading"
            eyebrow="Antes e depois"
            title="Da estrutura à entrega."
            description="Arraste a linha técnica e veja o projeto sair da estrutura e chegar na residência concluída."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <DimensionMark label="EXECUÇÃO" className="mt-8 max-w-lg" />
        </Reveal>

        {item ? (
          <Reveal delay={0.12}>
            <div className="relative mt-12">
              <div className="mx-auto w-full max-w-[60rem] lg:w-[68%] xl:w-[62%]">
                <ImageCompare
                  before={item.before}
                  after={item.after}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  beforePosition={item.beforePosition}
                  afterPosition={item.afterPosition}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-gold-dark">
              <span>Estrutura</span>
              <span className="hidden h-px flex-1 bg-gold/35 sm:block" />
              <span>Entrega</span>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
