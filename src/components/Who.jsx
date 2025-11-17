export default function Who() {
  return (
    <section id="chi-sono" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Chi sono</h2>
            <p className="mt-4 text-slate-600">
              Sono un consulente finanziario indipendente con esperienza in pianificazione patrimoniale,
              analisi dei mercati e costruzione di portafogli diversificati. Lavoro con professionisti, famiglie
              e imprenditori, con un approccio orientato alla trasparenza e alla qualità del servizio.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Iscritto all'albo dei consulenti</li>
              <li>• Specializzato in gestione del rischio</li>
              <li>• Oltre 10 anni di esperienza</li>
            </ul>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-700 to-blue-400 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
