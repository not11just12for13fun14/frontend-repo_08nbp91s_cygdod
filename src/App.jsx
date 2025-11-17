import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Who from './components/Who';
import Services from './components/Services';
import Analysis from './components/Analysis';
import Planning from './components/Planning';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-[Inter] text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Who />
        <Services />
        <Analysis />
        <Planning />
        <Contact />
        <footer className="py-10 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Consulente Finanziario — Tutti i diritti riservati</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#chi-sono" className="hover:text-blue-700">Chi sono</a>
              <a href="#contatti" className="hover:text-blue-700">Contatti</a>
              <a href="#" className="hover:text-blue-700">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
