/**
 * Input.tsx
 *
 * Campo de texto reutilizable
 * para ChurchPortal.
 *
 * Será utilizado por:
 *
 * - Login
 * - Registro
 * - Contacto
 * - Administración
 * - Perfil
 */

import type {
  InputHTMLAttributes,
} from "react";

/**
 * Props del componente.
 *
 * Extendemos todas las propiedades
 * normales de un input HTML.
 */
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Texto mostrado encima del input.
   */
  label: string;
}

/**
 * Input reutilizable.
 */
export default function Input({
  label,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <input
        id={id}
        className={`
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
          ${className}
        `}
        {...props}
      />
    </div>
  );
}