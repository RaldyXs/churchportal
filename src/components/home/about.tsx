/**
 * About
 *
 * Presenta la identidad de la iglesia.
 * Responde la pregunta:
 * ¿Quiénes somos?
 */

import { Heart, BookOpen, Handshake, Globe } from "lucide-react";
import ValueCard from "./ValueCard";            

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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Sobre nosotros
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Más que un edificio, una comunidad.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Somos una iglesia comprometida con compartir el evangelio,
          fortalecer a las familias y servir a nuestra comunidad mediante
          el amor, la enseñanza bíblica y el servicio.
        </p>

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