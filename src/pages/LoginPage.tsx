/**
 * LoginPage.tsx
 *
 * Página de acceso al área administrativa.
 *
 * Por ahora contiene una interfaz temporal.
 * Más adelante se conectará con Supabase Auth.
 */

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900">
          Iniciar sesión
        </h1>

        <p className="mt-3 text-slate-600">
          Accede al panel administrativo de ChurchPortal.
        </p>
      </section>
    </main>
  );
}