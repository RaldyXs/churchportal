/**
 * Ministries.tsx
 *
 * Sección encargada de mostrar
 * los ministerios de la iglesia.
 */

import { ministries } from "../../data/ministries";
import SectionTitle from "../ui/SectionTitle";
import MinistryCard from "./MinistryCard";

/**
 * Ministries
 *
 * Recorre el arreglo de ministerios
 * y genera una tarjeta por cada elemento.
 */
export default function Ministries() {
  return (
    <section
      id="ministerios"
      className="scroll-mt-20 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Nuestros ministerios"
          title="Hay un lugar para ti."
          description="Descubre espacios donde puedes crecer espiritualmente, desarrollar tus dones y servir junto a otros."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.id}
              icon={ministry.icon}
              title={ministry.title}
              description={ministry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}