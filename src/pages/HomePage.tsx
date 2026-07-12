/**
 * HomePage.tsx
 *
 * Página principal de ChurchPortal.
 *
 * Su responsabilidad es ensamblar las secciones
 * que actualmente existen y están terminadas.
 */

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import VisitSection from "../components/home/VisitSection";

/**
 * HomePage
 *
 * No contiene la implementación interna de las secciones.
 * Solamente decide el orden en que aparecen.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <VisitSection />
    </>
  );
}