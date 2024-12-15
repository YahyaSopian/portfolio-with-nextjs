import Skills from "./components/Skills";
import Experience from "./components/Experience";
import HeroSection from "./components/hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}
