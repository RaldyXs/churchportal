/**
 * VisitSection.tsx
 *
 * Sección destinada a visitantes que desean
 * conocer la iglesia por primera vez.
 *
 * Responsabilidades:
 * - Mostrar horario.
 * - Mostrar ubicación.
 * - Explicar qué puede esperar un visitante.
 */

import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

/**
 * Información mostrada en las tarjetas.
 *
 * Se mantiene dentro del archivo porque pertenece
 * únicamente a esta sección y por ahora es estática.
 */
const visitInformation = [
  {
    icon: CalendarDays,
    title: "Día de reunión",
    description: "Todos los domingos.",
  },
  {
    icon: Clock,
    title: "Horario",
    description: "10:00 a. m.",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Templo principal de la iglesia.",
  },
  {
    icon: Users,
    title: "Qué esperar",
    description: "Un ambiente familiar, acogedor y centrado en la Palabra.",
  },
];

/**
 * VisitSection
 *
 * Genera una tarjeta por cada elemento
 * del arreglo visitInformation.
 */
export default function VisitSection() {
  return (
    <section
      id="visita"
      className="scroll-mt-20 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Tu primera visita"
          title="Nos encantará recibirte."
          description="Conoce la información básica para que tu primera visita sea sencilla, cómoda y especial."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visitInformation.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Icon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}