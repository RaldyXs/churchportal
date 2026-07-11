/**
 * ministries.ts
 *
 * Este archivo almacena la información de los ministerios
 * de la iglesia.
 *
 * ¿Por qué existe este archivo?
 * ----------------------------
 * En lugar de escribir la información directamente dentro
 * de un componente React, la separamos en un archivo de datos.
 *
 * Esto tiene varias ventajas:
 *
 * ✔ Mantiene los componentes más limpios.
 * ✔ Facilita actualizar la información.
 * ✔ Permite reutilizar los datos en varias páginas.
 * ✔ Sigue el principio de separación de responsabilidades.
 */

/**
 * Importamos los iconos desde Lucide React.
 *
 * Cada icono es un componente de React.
 * Más adelante podremos renderizarlos dinámicamente.
 */
import {
  Music,
  Users,
  Baby,
  HeartHandshake,
} from "lucide-react";

/**
 * Array de ministerios.
 *
 * Un array (arreglo) es una colección de elementos.
 *
 * Cada elemento es un objeto que representa
 * un ministerio de la iglesia.
 */
export const ministries = [

  /**
   * Ministerio de Alabanza
   */
  {
    // Icono que se mostrará en la tarjeta.
    icon: Music,

    // Nombre del ministerio.
    title: "Alabanza",

    // Descripción corta.
    description:
      "Dirigimos a la congregación en la adoración mediante la música.",
  },

  /**
   * Ministerio de Familias
   */
  {
    icon: Users,

    title: "Familias",

    description:
      "Fortalecemos matrimonios, padres e hijos con principios bíblicos.",
  },

  /**
   * Ministerio Infantil
   */
  {
    icon: Baby,

    title: "Niños",

    description:
      "Enseñamos la Palabra de Dios de forma dinámica para los más pequeños.",
  },

  /**
   * Ministerio de Servicio
   */
  {
    icon: HeartHandshake,

    title: "Servicio",

    description:
      "Apoyamos a quienes más lo necesitan dentro y fuera de la iglesia.",
  },

];