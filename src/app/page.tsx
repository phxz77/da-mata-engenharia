import { About } from "@/components/sections/About";
import { Authority } from "@/components/sections/Authority";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { Inspections } from "@/components/sections/Inspections";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Hero } from "@/components/hero/Hero";
import { RealGallery } from "@/components/sections/RealGallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <About />
      <RealGallery />
      <Services />
      <Projects />
      <BeforeAfter />
      <Process />
      <Inspections />
      <Differentials />
      <Testimonials />
      <InstagramFeed />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
