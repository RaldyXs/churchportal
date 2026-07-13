/**
 * Navbar.tsx
 *
 * Barra de navegación principal del portal público.
 *
 * Responsabilidades:
 * - Navegar entre las secciones de HomePage.
 * - Indicar visualmente qué sección está activa.
 * - Mostrar un menú adaptable para dispositivos móviles.
 * - Permitir el acceso al área privada.
 */

import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Elementos de navegación interna.
 *
 * `sectionId` debe coincidir exactamente con el atributo
 * `id` de la sección correspondiente.
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
   * Controla si el menú móvil está abierto.
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Guarda el identificador de la sección
   * que actualmente está visible.
   */
  const [activeSection, setActiveSection] =
    useState("inicio");

  /**
   * Observa las secciones de la página.
   *
   * Cuando una sección entra en el área visible,
   * actualiza `activeSection`.
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

    /**
     * IntersectionObserver detecta cuándo un elemento
     * entra o sale del área visible del navegador.
     */
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
         * Reduce el área de detección para considerar activa
         * la sección que se encuentra cerca del centro superior.
         */
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    /**
     * Limpieza del observer cuando el componente
     * deja de utilizarse.
     */
    return () => {
      observer.disconnect();
    };
  }, []);

  /**
   * Desplaza suavemente la página hacia
   * la sección seleccionada.
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto max-w-7xl px-6"
        aria-label="Navegación principal"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Identidad del portal */}
          <button
            type="button"
            onClick={() => navigateToSection("inicio")}
            className="text-2xl font-bold text-blue-700"
            aria-label="Volver al inicio"
          >
            ChurchPortal
          </button>

          {/* Navegación de escritorio */}
          <ul className="hidden items-center gap-3 lg:flex">
            {navigationItems.map((item) => {
              const isActive =
                activeSection === item.sectionId;

              return (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() =>
                      navigateToSection(item.sectionId)
                    }
                    className={`rounded-lg px-3 py-2 font-medium transition ${
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

            <li className="ml-2">
              <Link
                to="/login"
                className="rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-50"
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
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
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
            className="border-t border-slate-200 py-4 lg:hidden"
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