import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      {/* 
        Hidden HTML form for Netlify build-time detection.
        This form is never visible to users but allows Netlify 
        to detect and enable the form handling.
      */}
      <form 
        name="contact" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <select name="budget">
          <option value="600">Starter ($600)</option>
          <option value="800">Essential ($800)</option>
          <option value="1500">Business ($1,500)</option>
          <option value="custom">Custom Project</option>
        </select>
        <textarea name="message"></textarea>
        <input name="bot-field" />
      </form>

      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <Navigation />
      <Hero />
      <Comparison />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}