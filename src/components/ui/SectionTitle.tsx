/**
 * SectionTitle.tsx
 *
 * Encabezado reutilizable para las diferentes
 * secciones de ChurchPortal.
 *
 * Ejemplos de uso:
 * - Sobre nosotros.
 * - Ministerios.
 * - Próximos eventos.
 * - Testimonios.
 */

interface SectionTitleProps {
  /**
   * Texto pequeño mostrado sobre el título.
   * Ejemplo: "Sobre nosotros".
   */
  eyebrow: string;

  /**
   * Título principal de la sección.
   */
  title: string;

  /**
   * Texto descriptivo opcional.
   */
  description?: string;

  /**
   * Alineación del contenido.
   *
   * Si no se especifica, se utiliza "center".
   */
  align?: "left" | "center";
}

/**
 * SectionTitle
 *
 * Su única responsabilidad es mostrar
 * el encabezado visual de una sección.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  /**
   * Clases que cambian según la alineación elegida.
   */
  const alignmentStyles =
    align === "center"
      ? "text-center"
      : "text-left";

  /**
   * La descripción se centra y limita su ancho
   * solamente cuando la alineación es central.
   */
  const descriptionStyles =
    align === "center"
      ? "mx-auto max-w-3xl"
      : "max-w-3xl";

  return (
    <div className={alignmentStyles}>
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-slate-600 ${descriptionStyles}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}