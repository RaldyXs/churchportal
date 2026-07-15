/**
 * TextArea reutilizable.
 */

import type {
  TextareaHTMLAttributes,
} from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({
  label,
  id,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <textarea
        id={id}
        className={`
          w-full
          resize-none
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