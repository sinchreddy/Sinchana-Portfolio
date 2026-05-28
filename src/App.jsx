import { useState, useEffect } from "react";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Stats from "./components/sections/Stats";
import Exploring from "./components/sections/Exploring";
import Research from "./components/sections/Research";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("light");
      root.style.setProperty("--bg-primary", "#0a0a0f");
      root.style.setProperty("--bg-secondary", "#0f0f1a");
      root.style.setProperty("--bg-card", "rgba(255,255,255,0.03)");
      root.style.setProperty("--border", "rgba(255,255,255,0.08)");
      root.style.setProperty("--text-primary", "#f1f5f9");
      root.style.setProperty("--text-secondary", "#94a3b8");
    } else {
      root.classList.add("light");
      root.style.setProperty("--bg-primary", "#f8fafc");
      root.style.setProperty("--bg-secondary", "#f1f5f9");
      root.style.setProperty("--bg-card", "rgba(0,0,0,0.02)");
      root.style.setProperty("--border", "rgba(0,0,0,0.08)");
      root.style.setProperty("--text-primary", "#0f172a");
      root.style.setProperty("--text-secondary", "#475569");
    }
  }, [dark]);

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <NavBar dark={dark} toggleTheme={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stats />
        <Exploring />
        <Research />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
