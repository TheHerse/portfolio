import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Desktop only: expensive blur */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hidden md:block" />

        {/* Mobile only: soft radial glow — zero blur cost */}
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_65%)] md:hidden" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)] md:hidden" />
      </div>

      <Navigation />
      <Hero />
      <Comparison />
      <Projects />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}