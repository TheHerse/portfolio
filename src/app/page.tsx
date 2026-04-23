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
        {/* All breakpoints: soft radial glow — zero blur cost */}
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)]" />
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