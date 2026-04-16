export default function Hero() {
  return (
    <section className="relative z-10 px-6 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
          Web Developer
        </span>
      </div>
              
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Websites that load fast <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          and actually convert.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
        I build hand-built sites for small businesses that need speed. No templates, no bloated plugins, no monthly fees. Just a fast, professional site that gets you leads.
      </p> 

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
        >
          Start a project
          <span>→</span>
        </a>
        <a 
          href="#work"
          className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors"
        >
          View work
        </a>
      </div>
    </section>
  );
}