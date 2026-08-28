import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function InstagramFeed() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="instagram-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <Reveal>
            <SectionHeading
              id="instagram-heading"
              eyebrow="Instagram"
              title="Acompanhe nossos projetos"
              description="Bastidores e registros de obras, reformas e vistorias no perfil oficial da Da Mata Engenharia."
            />
          </Reveal>
          <Reveal delay={0.1}>
            {site.instagram ? (
              <Button href={site.instagram} variant="primary" external className="shrink-0">
                <InstagramIcon className="h-4 w-4" />
                {site.instagramHandle || "Ver Instagram"}
              </Button>
            ) : (
              <p className="text-sm text-muted">{site.placeholders.instagram}</p>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
