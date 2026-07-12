/**
 * Footer.tsx
 *
 * Pie de página principal del portal público.
 *
 * Responsabilidades:
 * - Mostrar información institucional.
 * - Facilitar el contacto.
 * - Ofrecer enlaces rápidos.
 * - Mostrar horarios y redes sociales.
 */

import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

import { Link } from "react-router-dom";

/**
 * Enlaces públicos reutilizados en el Footer.
 *
 * Los mantenemos en un arreglo para evitar
 * escribir manualmente cada elemento del menú.
 */
const quickLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/#nosotros",
  },
  {
    label: "Ministerios",
    href: "/#ministerios",
  },
  {
    label: "Eventos",
    href: "/#eventos",
  },
  {
    label: "Iniciar sesión",
    href: "/login",
  },
];

/**
 * Redes sociales de ejemplo.
 *
 * Más adelante sustituiremos "#" por las direcciones
 * reales de la iglesia.
 */
const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: Share2,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Share2,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Share2,
  },
];

export default function Footer() {
  /**
   * Año actual generado automáticamente.
   *
   * Evita tener que cambiar manualmente
   * el año cada enero.
   */
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identidad institucional */}
          <section>
            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              ChurchPortal
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Una comunidad cristiana comprometida con compartir el
              evangelio, fortalecer a las familias y servir con amor.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Navegación */}
          <section>
            <h2 className="text-lg font-semibold text-white">
              Enlaces rápidos
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Horarios */}
          <section>
            <h2 className="text-lg font-semibold text-white">
              Horarios
            </h2>

            <div className="mt-5 flex items-start gap-3">
              <Clock
                className="mt-1 h-5 w-5 shrink-0 text-blue-400"
                aria-hidden="true"
              />

              <div>
                <p className="font-medium text-slate-200">
                  Servicio dominical
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Domingos, 10:00 a. m.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <Clock
                className="mt-1 h-5 w-5 shrink-0 text-blue-400"
                aria-hidden="true"
              />

              <div>
                <p className="font-medium text-slate-200">
                  Estudio bíblico
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Miércoles, 7:00 p. m.
                </p>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-lg font-semibold text-white">
              Contacto
            </h2>

            <address className="mt-5 space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <span>
                  Dirección de la iglesia,
                  República Dominicana
                </span>
              </div>

              <a
                href="tel:+18090000000"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone
                  className="h-5 w-5 shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <span>(809) 000-0000</span>
              </a>

              <a
                href="mailto:contacto@churchportal.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail
                  className="h-5 w-5 shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <span>contacto@churchportal.com</span>
              </a>
            </address>
          </section>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} ChurchPortal. Todos los derechos reservados.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacidad"
              className="transition hover:text-white"
            >
              Privacidad
            </Link>

            <Link
              to="/terminos"
              className="transition hover:text-white"
            >
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}