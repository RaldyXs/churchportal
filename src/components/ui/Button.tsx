/**
 * Button.tsx
 *
 * Componente reutilizable para todos los botones
 * de ChurchPortal.
 *
 * Responsabilidad:
 * Mostrar un botón con un estilo consistente
 * en toda la aplicación.
 */

import type { ReactNode } from "react";

/**
 * Props del componente Button.
 */
interface ButtonProps {
  /**
   * Contenido del botón.
   *
   * Puede ser texto, iconos o ambos.
   */
  children: ReactNode;

  /**
   * Función que se ejecutará al hacer clic.
   */
  onClick?: () => void;

  /**
   * Tipo visual del botón.
   */
  variant?: "primary" | "secondary";
}

/**
 * Componente Button.
 */
export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {

  /**
   * Estilos comunes para todos los botones.
   */
  const baseStyles =
    "rounded-xl px-8 py-4 font-semibold transition duration-300";

  /**
   * Estilos según el tipo.
   */
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}