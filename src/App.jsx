// App.jsx har hovedansvaret for å sette komponentene sammen.
// Vi bør ikke skrive hele nettsiden direkte i App.jsx.
// Hver seksjon eller komponent får sitt eget ansvar.

import Hero from "./sections/Hero"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}

export default App; 
