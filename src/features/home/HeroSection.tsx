/**
 * HeroSection
 *
 * Es la primera sección que ve el usuario.
 * Su objetivo es comunicar rápidamente
 * la misión del portal e invitar a interactuar.
 */

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Una comunidad de fe y esperanza
        </span>

        <h1 className="mt-8 text-5xl font-bold text-slate-900">
          Un lugar para creer,
          <br />
          pertenecer y crecer juntos.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Conectamos personas mediante eventos,
          recursos, ministerios y oportunidades
          para servir a Dios y a la comunidad.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
            Donar ahora
          </button>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100">
            Conocer más
          </button>

        </div>

      </div>
    </section>
  );
}