/**
 * UpcomingEvents.tsx
 *
 * Sección de la página principal que muestra
 * una selección de próximos eventos.
 */

import { events } from "../../data/events";
import SectionTitle from "../ui/SectionTitle";
import EventCard from "./EventCard";

/**
 * UpcomingEvents
 *
 * Recorre el arreglo de eventos y genera
 * una tarjeta por cada uno.
 */
export default function UpcomingEvents() {
  return (
    <section
      id="eventos"
      className="scroll-mt-20 bg-amber-50/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Próximos eventos"
          title="Vive la fe en comunidad."
          description="Participa en nuestras próximas reuniones, actividades y oportunidades de servicio."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              category={event.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}