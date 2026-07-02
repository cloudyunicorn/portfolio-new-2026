import { Hero } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { Services } from "@/components/sections/services";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Services />
      <WhyWorkWithMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
