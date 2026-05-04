type HeroProps = {
  lang?: "en" | "es";
};

export default function Hero({ lang = "en" }: HeroProps) {
  const isSpanish = lang === "es";

  return (
    <section className="relative z-10 px-6 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
          {isSpanish ? "Desarrollador Web" : "Web Developer"}
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        {isSpanish ? "Paginas web rapidas " : "Websites that load fast "}
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          {isSpanish ? "que convierten visitas en clientes." : "and actually convert."}
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
        {isSpanish
          ? "Creo sitios web personalizados para negocios que necesitan verse profesionales, cargar rapido y recibir mas clientes. Trabajo en ingles o espanol, sin plantillas, plugins pesados ni pagos mensuales obligatorios."
          : "I build custom websites for small businesses that need speed, clarity, and leads. No templates, no bloated plugins, no monthly fees. You own the code, and I can work with you in English or Spanish."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
        >
          {isSpanish ? "Empezar un proyecto" : "Start a project"}
          <span>-&gt;</span>
        </a>
        <a
          href="#work"
          className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors"
        >
          {isSpanish ? "Ver trabajos" : "View work"}
        </a>
      </div>
    </section>
  );
}
