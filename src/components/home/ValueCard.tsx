import type { LucideIcon } from "lucide-react";

/**
 * Props que recibe ValueCard.
 */
interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Tarjeta reutilizable para mostrar
 * un valor de la iglesia.
 */
export default function ValueCard({
  icon: Icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Icon className="mx-auto h-10 w-10 text-blue-600" />

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {description}
      </p>

    </div>
  );
}