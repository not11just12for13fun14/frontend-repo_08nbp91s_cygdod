export default function Planning() {
  return (
    <section id="pianificazione" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Pianificazione finanziaria</h2>
          <p className="mt-3 text-slate-600">Piani concreti e misurabili per obiettivi come pensione, studio dei figli, acquisto casa o passaggi generazionali.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">Analisi situazione</h3>
            <p className="mt-2 text-slate-600">Reddito, spese, patrimonio, passività: partiamo dai dati reali per costruire un piano sostenibile.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">Simulazioni & scenari</h3>
            <p className="mt-2 text-slate-600">Stress test e scenari di mercato per misurare la resilienza del piano nel tempo.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">Ottimizzazione fiscale</h3>
            <p className="mt-2 text-slate-600">Strumenti e strategie per ridurre l'impatto fiscale e migliorare i rendimenti netti.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">Monitoraggio continuo</h3>
            <p className="mt-2 text-slate-600">Aggiornamenti periodici e adattamenti al cambiamento delle tue priorità.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
