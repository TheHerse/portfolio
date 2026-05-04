type ComparisonProps = {
  lang?: "en" | "es";
};

export default function Comparison({ lang = "en" }: ComparisonProps) {
  const isSpanish = lang === "es";
  const builderProblems = isSpanish
    ? [
        "Plantillas iguales a las de muchos otros negocios",
        "Codigo pesado que tarda 3-5 segundos en cargar",
        "Pagos mensuales que nunca terminan",
        "Dependencia de una sola plataforma",
        "Plugins con riesgos de seguridad",
      ]
    : [
        "Same templates as 1,000 other businesses",
        "Bloated code that loads in 3-5 seconds",
        "Monthly fees that add up forever",
        "Locked into their platform",
        "Plugin conflicts and security risks",
      ];
  const customBenefits = isSpanish
    ? [
        "Diseño unico para tu negocio",
        "Carga en menos de 1 segundo",
        "Costo unico, sin pagos mensuales obligatorios",
        "Tu eres dueño del codigo",
        "Codigo limpio y seguro, sin plugins innecesarios",
      ]
    : [
        "Unique design that stands out",
        "Under 1 second load times",
        "One-time cost, zero required recurring fees",
        "You own everything, always",
        "Clean, secure code with no plugins needed",
      ];

  return (
    <section className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
      <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6">
          {isSpanish ? "Plantillas vs. codigo personalizado" : "Template sites vs. custom code"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="text-slate-400 font-semibold mb-3 uppercase tracking-wider">
              {isSpanish ? "Constructores genericos" : "Generic Site Builders"}
            </h3>
            <ul className="space-y-2 text-slate-400 list-disc list-inside">
              {builderProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-3 uppercase tracking-wider">
              {isSpanish ? "Desarrollo personalizado" : "Custom Development"}
            </h3>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              {customBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
