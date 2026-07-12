/**
 * MinistryCard.tsx
 *
 * Tarjeta reutilizable para mostrar
 * la información de un ministerio.
 */

import type { LucideIcon } from "lucide-react";

/**
 * Props recibidas por la tarjeta.
 */
interface MinistryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * MinistryCard
 *
 * Su única responsabilidad es mostrar
 * un ministerio individual.
 */
export default function MinistryCard({
  icon: Icon,
  title,
  description,
}: MinistryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
        <Icon
          className="h-7 w-7 text-blue-600 transition group-hover:text-white"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}