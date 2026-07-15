/**
 * Hero.tsx
 *
 * Primera sección que observa el visitante.
 *
 * Responsabilidades:
 * - Comunicar el mensaje principal.
 * - Mostrar una imagen de fondo.
 * - Dirigir al visitante hacia contenido relevante.
 * - Servir como sección inicial del scroll spy.
 */

import { ChevronDown } from "lucide-react";

import heroImage from "../../assets/image/hero-home.png";
import Button from "../ui/Button";

/**
 * Desplaza suavemente la página hasta
 * una sección identificada mediante un id.
 */
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  section?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-position-[65%_center] sm:bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        aria-hidden="true"
      />

      {/*
       * Overlay cinematográfico.
       *
       * Oscurece más el lado izquierdo para mejorar
       * la lectura y conserva mayor visibilidad
       * de la fotografía en el lado derecho.
       */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20"
        aria-hidden="true"
      />

      {/* Oscurecimiento adicional vertical */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/35"
        aria-hidden="true"
      />

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm sm:text-sm">
            Bienvenido a casa
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Un lugar donde la fe
            <span className="block text-blue-300">
              se vive en comunidad.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
            Descubre una comunidad donde podrás crecer
            espiritualmente, conocer a Cristo y compartir
            la vida junto a otras personas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              onClick={() => scrollToSection("visita")}
              className="w-full sm:w-auto"
            >
              Planifica tu visita
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("nosotros")}
              className="w-full sm:w-auto"
            >
              Conoce nuestra historia
            </Button>
          </div>
        </div>
      </div>

      {/* Invitación para continuar explorando */}
      <button
        type="button"
        onClick={() => scrollToSection("nosotros")}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
        aria-label="Ir a la sección Sobre nosotros"
      >
        <span className="hidden sm:block">
          Descubre más
        </span>

        <ChevronDown
          className="h-6 w-6 animate-bounce"
          aria-hidden="true"
        />
      </button>

      {/* Transición cálida hacia About */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 bg-gradient-to-t from-stone-50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}