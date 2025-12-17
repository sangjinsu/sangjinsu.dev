import { Hero } from "@/components/hero";
import { About, Skills, Projects, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
