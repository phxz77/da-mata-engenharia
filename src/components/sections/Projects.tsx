import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projetos" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
      <Container>
        <div className="space-y-6">
          <div className="max-w-4xl">
            <h2 id="projects-heading" className="text-balance text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy sm:text-3xl lg:text-[2.5rem]">
              Trabalhos com enfoque técnico e clareza de decisão.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
