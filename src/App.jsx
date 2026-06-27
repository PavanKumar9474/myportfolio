import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Experience.css";
import "./styles/Education.css";
import "./styles/Certificates.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import "./styles/ScrollTop.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <ScrollTop />

      <Footer />
    </>
  );
}

export default App;