/**
 * EventCard.tsx
 *
 * Tarjeta reutilizable para mostrar
 * la información de un evento.
 */

import {
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

/**
 * Props recibidas por EventCard.
 */
interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

/**
 * EventCard
 *
 * Su única responsabilidad es presentar
 * visualmente un evento individual.
 */
export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
}: EventCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Categoría */}
      <span className="self-start rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
        {category}
      </span>

      {/* Fecha */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
        <CalendarDays
          className="h-5 w-5"
          aria-hidden="true"
        />

        <span>{date}</span>
      </div>

      {/* Información principal */}
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      {/* Hora y lugar */}
      <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <Clock
            className="h-5 w-5 shrink-0 text-blue-600"
            aria-hidden="true"
          />

          <span>{time}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin
            className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
            aria-hidden="true"
          />

          <span>{location}</span>
        </div>
      </div>
    </article>
  );
}