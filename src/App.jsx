import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-bg font-sans min-h-screen overflow-hidden">
      <div className="max-w-360 mx-auto p-4 sm:p-12 sm:py-8 lg:p-18 lg:py-10 flex flex-col gap-8 sm:gap-12 lg:gap-14">
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
