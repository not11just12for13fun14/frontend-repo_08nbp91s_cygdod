import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Invio in corso...');
    try {
      // In questa versione demo simuliamo l'invio
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Grazie! Ti contatterò entro 24 ore.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Si è verificato un errore. Riprova.');
    }
  };

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contatti</h2>
            <p className="mt-3 text-slate-600">Raccontami i tuoi obiettivi: ti risponderò rapidamente per fissare un incontro.</p>
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-white">
              <p className="font-medium">Email</p>
              <p className="opacity-90">info@tua-consulenza.it</p>
              <p className="mt-4 font-medium">Telefono</p>
              <p className="opacity-90">+39 333 123 4567</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome</label>
                <input required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Cognome</label>
                <input required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea rows={4} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
              Invia richiesta
            </button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
