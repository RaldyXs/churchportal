/**
 * ministries.ts
 *
 * Contiene los datos estáticos de los ministerios.
 *
 * La interfaz visual no vive aquí.
 * Este archivo solamente describe la información
 * que los componentes deben mostrar.
 */

import {
  Baby,
  HeartHandshake,
  Music,
  Users,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

/**
 * Define la estructura obligatoria
 * de cada ministerio.
 */
export interface Ministry {
  /**
   * Identificador único.
   */
  id: number;

  /**
   * Icono mostrado en la tarjeta.
   */
  icon: LucideIcon;

  /**
   * Nombre del ministerio.
   */
  title: string;

  /**
   * Descripción breve.
   */
  description: string;
}

/**
 * Lista temporal de ministerios.
 *
 * Más adelante estos datos podrán venir
 * desde Supabase.
 */
export const ministries: Ministry[] = [
  {
    id: 1,
    icon: Music,
    title: "Alabanza",
    description:
      "Dirigimos a la congregación en la adoración mediante la música.",
  },
  {
    id: 2,
    icon: Users,
    title: "Familias",
    description:
      "Fortalecemos matrimonios, padres e hijos con principios bíblicos.",
  },
  {
    id: 3,
    icon: Baby,
    title: "Niños",
    description:
      "Enseñamos la Palabra de Dios de forma dinámica para los más pequeños.",
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: "Servicio",
    description:
      "Apoyamos a quienes más lo necesitan dentro y fuera de la iglesia.",
  },
];