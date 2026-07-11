import Hero from "../components/home/hero";
import About from "..//components/home/about"

/**
 * HomePage
 *
 * Página principal del portal.
 * Su responsabilidad es ensamblar las secciones
 * que componen la pantalla de inicio.
 */

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}