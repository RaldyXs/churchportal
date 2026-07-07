/**
 * Componente: Footer
 *
 * Responsabilidad:
 * Mostrar la información institucional del portal.
 *
 * Proyecto: ChurchPortal
 */

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-8">

        <h2 className="text-xl font-semibold text-blue-700">
          ChurchPortal
        </h2>

        <p className="text-sm text-gray-600">
          © 2026 ChurchPortal. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}