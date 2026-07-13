/**
 * events.ts
 *
 * Contiene los datos temporales de los próximos eventos.
 *
 * Por ahora la información vive en este archivo.
 * Más adelante será obtenida desde Supabase.
 */

/**
 * Define la estructura obligatoria de un evento.
 */
export interface ChurchEvent {
  /**
   * Identificador único del evento.
   */
  id: number;

  /**
   * Nombre del evento.
   */
  title: string;

  /**
   * Descripción corta.
   */
  description: string;

  /**
   * Día o fecha mostrada al visitante.
   */
  date: string;

  /**
   * Hora del evento.
   */
  time: string;

  /**
   * Lugar donde se realizará.
   */
  location: string;

  /**
   * Categoría utilizada como etiqueta visual.
   */
  category: string;
}

/**
 * Eventos temporales de la página principal.
 */
export const events: ChurchEvent[] = [
  {
    id: 1,
    title: "Encuentro de jóvenes",
    description:
      "Una noche de adoración, enseñanza bíblica y comunión para jóvenes.",
    date: "18 de julio",
    time: "7:00 p. m.",
    location: "Templo principal",
    category: "Jóvenes",
  },
  {
    id: 2,
    title: "Conferencia para familias",
    description:
      "Un espacio para fortalecer matrimonios y relaciones familiares.",
    date: "25 de julio",
    time: "6:30 p. m.",
    location: "Salón multiuso",
    category: "Familias",
  },
  {
    id: 3,
    title: "Jornada de servicio comunitario",
    description:
      "Serviremos a familias de nuestra comunidad con alimentos y oración.",
    date: "2 de agosto",
    time: "9:00 a. m.",
    location: "Punto de encuentro: iglesia",
    category: "Servicio",
  },
];