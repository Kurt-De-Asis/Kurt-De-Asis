import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import VaTools from './components/VaTools';
import RemoteSetup from './components/RemoteSetup';
import LanguagesSection from './components/Languages';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <VaTools />
      <RemoteSetup />
      <LanguagesSection />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}