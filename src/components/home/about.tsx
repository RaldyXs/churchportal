/**
 * About
 *
 * Presenta la identidad de la iglesia.
 * Responde la pregunta:
 * ¿Quiénes somos?
 */

import { Heart, BookOpen, Handshake, Globe } from "lucide-react";
import ValueCard from "./ValueCard";            
import SectionTitle from "../ui/SectionTitle";
/**
 * Información de los valores de la iglesia.
 * Cada objeto representa una tarjeta.
 */
const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "Servimos con el amor de Cristo.",
  },
  {
    icon: BookOpen,
    title: "Palabra",
    description: "Enseñanza bíblica para todas las edades.",
  },
  {
    icon: Handshake,
    title: "Servicio",
    description: "Ayudamos a nuestra comunidad.",
  },
  {
    icon: Globe,
    title: "Comunidad",
    description: "Crecemos juntos en la fe.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <SectionTitle
            eyebrow="Sobre nosotros"
            title="Más que un edificio, una comunidad."
            description="Somos una iglesia comprometida con compartir el evangelio, fortalecer a las familias y servir a nuestra comunidad mediante el amor, la enseñanza bíblica y el servicio."
          />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <ValueCard
                key={value.title}
                icon={Icon}
                title={value.title}
                description={value.description}
              />
            );
            {values.map((value) => (
                <ValueCard
                    key={value.title}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                />
                ))}
          })}
        </div>
      </div>
    </section>
  );
}