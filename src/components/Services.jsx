export default function Services() {
  return (
    <section id="private-banking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Private Banking</h2>
          <p className="mt-3 text-slate-600">Soluzioni personalizzate per la gestione del patrimonio, con monitoraggio continuo e accesso a opportunità esclusive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: 'Gestione Patrimoniale',
              desc: 'Strategie su misura basate su profilo di rischio, orizzonte temporale e obiettivi.',
            },
            {
              title: 'Protezione del Capitale',
              desc: 'Soluzioni per mitigare la volatilità e preservare il valore nel tempo.',
            },
            {
              title: 'Servizi Dedicati',
              desc: 'Reportistica chiara, incontri periodici, canali di comunicazione diretti.'
            }
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
