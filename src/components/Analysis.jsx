export default function Analysis() {
  return (
    <section id="analisi-investimenti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Analisi Investimenti</h2>
          <p className="mt-3 text-slate-600">Un approccio quantitativo e qualitativo per valutare strumenti e portafogli, con trasparenza sui costi e sui rischi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { title: 'Asset Allocation', desc: 'Diversificazione efficiente tra asset class e aree geografiche.' },
            { title: 'Analisi Costi', desc: 'Valutazione TER, commissioni, impatto fiscale e ottimizzazione.' },
            { title: 'Monitoraggio', desc: 'Rebalancing periodico e alert sul profilo di rischio.' },
          ].map((c) => (
            <div key={c.title} className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
