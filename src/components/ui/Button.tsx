/**
 * Button.tsx
 *
 * Botón reutilizable de ChurchPortal.
 *
 * Acepta las propiedades normales de un botón HTML
 * y ofrece variantes visuales consistentes.
 */

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Contenido que aparece dentro del botón.
   */
  children: ReactNode;

  /**
   * Estilo visual del botón.
   *
   * primary:
   * Acción principal.
   *
   * secondary:
   * Acción secundaria sobre fondos claros.
   *
   * ghost:
   * Acción secundaria sobre fondos oscuros o imágenes.
   */
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...buttonProps
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:ring-blue-300",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:ring-slate-300",

    ghost:
      "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20 focus-visible:ring-white/40",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}