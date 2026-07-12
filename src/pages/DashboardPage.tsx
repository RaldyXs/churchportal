/**
 * DashboardPage.tsx
 *
 * Página temporal del panel administrativo.
 *
 * Más adelante estará protegida para que solamente
 * puedan acceder usuarios autenticados.
 */

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-3 text-slate-600">
          Bienvenido al panel administrativo de ChurchPortal.
        </p>
      </div>
    </main>
  );
}