/**
 * Navbar.tsx
 *
 * Barra de navegación principal del portal público.
 *
 * Responsabilidades:
 * - Navegar entre las secciones de HomePage.
 * - Indicar visualmente qué sección está activa.
 * - Cambiar su apariencia cuando el usuario hace scroll.
 * - Mostrar un menú adaptable para dispositivos móviles.
 * - Permitir el acceso al área privada.
 */

import {
  useEffect,
  useState,
} from "react";

import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Elementos de navegación interna.
 *
 * Cada `sectionId` debe coincidir exactamente
 * con el atributo `id` de una sección de HomePage.
 */
const navigationItems = [
  {
    label: "Inicio",
    sectionId: "inicio",
  },
  {
    label: "Nosotros",
    sectionId: "nosotros",
  },
  {
    label: "Ministerios",
    sectionId: "ministerios",
  },
  {
    label: "Eventos",
    sectionId: "eventos",
  },
  {
    label: "Primera visita",
    sectionId: "visita",
  },
  {
    label: "Contacto",
    sectionId: "contacto",
  },
];

export default function Navbar() {
  /**
   * Controla la apertura del menú móvil.
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Guarda la sección visible actualmente.
   */
  const [activeSection, setActiveSection] =
    useState("inicio");

  /**
   * Indica si el usuario ya se desplazó
   * desde la parte superior de la página.
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Detecta el desplazamiento vertical.
   *
   * Cuando el usuario baja más de 40 píxeles,
   * el Navbar cambia de transparente a blanco.
   */
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    /**
     * Ejecutamos la función inmediatamente
     * para conocer el estado inicial.
     */
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Observa las diferentes secciones de HomePage
   * para resaltar el enlace correspondiente.
   */
  useEffect(() => {
    const sections = navigationItems
      .map((item) =>
        document.getElementById(item.sectionId),
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(
          (entry) => entry.isIntersecting,
        );

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        /**
         * El área de detección se concentra cerca
         * de la parte superior central de la pantalla.
         */
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /**
   * Desplaza suavemente la página
   * hasta la sección seleccionada.
   */
  function navigateToSection(sectionId: string) {
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-lg"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6"
        aria-label="Navegación principal"
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Identidad del portal */}
          <button
            type="button"
            onClick={() => navigateToSection("inicio")}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled
                ? "text-blue-700"
                : "text-white"
            }`}
            aria-label="Volver al inicio"
          >
            ChurchPortal
          </button>

          {/* Navegación de escritorio */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => {
              const isActive =
                activeSection === item.sectionId;

              /**
               * Estilos según:
               * - Navbar transparente.
               * - Navbar blanco.
               * - Sección activa.
               */
              const navigationStyles = isScrolled
                ? isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                : isActive
                  ? "bg-white/15 text-white"
                  : "text-white/90 hover:bg-white/10 hover:text-white";

              return (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() =>
                      navigateToSection(item.sectionId)
                    }
                    className={`rounded-lg px-3 py-2 font-medium transition duration-300 ${navigationStyles}`}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}

            <li className="ml-2">
              <Link
                to="/login"
                className={`rounded-lg border px-4 py-2 font-semibold transition duration-300 ${
                  isScrolled
                    ? "border-blue-600 text-blue-700 hover:bg-blue-50"
                    : "border-white/70 text-white hover:bg-white hover:text-slate-900"
                }`}
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>

          {/* Botón del menú móvil */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            className={`rounded-lg p-2 transition duration-300 lg:hidden ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={
              isMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-6 w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden"
          >
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const isActive =
                  activeSection === item.sectionId;

                return (
                  <li key={item.sectionId}>
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(
                          item.sectionId,
                        )
                      }
                      className={`w-full rounded-lg px-3 py-3 text-left font-medium transition ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                      }`}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}

              <li className="pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}