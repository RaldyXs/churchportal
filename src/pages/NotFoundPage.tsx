/**
 * NotFoundPage.tsx
 *
 * Se muestra cuando el usuario intenta acceder
 * a una dirección que no existe.
 */

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center">
      <p className="text-lg font-semibold text-blue-600">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        Página no encontrada
      </h1>

      <p className="mt-4 text-slate-600">
        La dirección que intentaste visitar no existe.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </main>
  );
}