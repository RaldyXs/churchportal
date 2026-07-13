/**
 * Hero.tsx
 *
 * Primera sección que observa el visitante.
 *
 * Responsabilidades:
 * - Presentar el mensaje principal.
 * - Dirigir al visitante hacia información relevante.
 * - Servir como sección inicial para la navegación activa.
 */

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
      className="scroll-mt-20 bg-slate-50"
    >
      <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Bienvenido a ChurchPortal
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Un lugar donde la fe
            <br />
            se vive en comunidad.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Descubre una comunidad donde podrás crecer espiritualmente,
            participar en actividades, conocer nuestros ministerios y
            fortalecer tu relación con Dios.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection("visita")}>
              Planifica tu visita
            </Button>

            <Button
              variant="secondary"
              onClick={() => scrollToSection("nosotros")}
            >
              Conócenos
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white text-slate-400 shadow-sm">
            Imagen Hero
          </div>
        </div>
      </div>
    </section>
  );
}