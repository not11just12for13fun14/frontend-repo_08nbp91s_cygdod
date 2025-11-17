import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-xl shadow-xl">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-slate-900">
            Consulenza finanziaria su misura, con visione a lungo termine
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            Supporto professionale per proteggere e far crescere il tuo patrimonio.
            Affidabilità, trasparenza e una strategia costruita per i tuoi obiettivi.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contatti" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
              Parliamo dei tuoi obiettivi
            </a>
            <a href="#analisi-investimenti" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-blue-700 border border-blue-700 font-medium hover:bg-blue-50 transition-colors">
              Scopri i servizi
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  );
}
