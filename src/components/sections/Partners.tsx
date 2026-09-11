import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Partners() {
  return (
    <section className="bg-paper py-16 sm:py-20" aria-label="Parceiros">
      <Container>
        <div className="relative overflow-hidden bg-white">
          <Image
            src="/photos/logos.jpeg"
            alt="Logotipos dos parceiros da Da Mata Engenharia"
            width={1280}
            height={853}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </Container>
    </section>
  );
}