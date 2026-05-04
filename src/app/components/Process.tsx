type ProcessProps = {
  lang?: "en" | "es";
};

export default function Process({ lang = "en" }: ProcessProps) {
  const isSpanish = lang === "es";
  const steps = isSpanish
    ? [
        { step: "01", title: "Descubrimiento", desc: "Aprendo tu negocio: que vendes, a quien ayudas y que hace que un cliente te contacte." },
        { step: "02", title: "Prototipo", desc: "Ves una version real en vivo antes del lanzamiento, con espacio para ajustes claros." },
        { step: "03", title: "Construccion", desc: "Codigo limpio, rapido y profesional. Te explico todo en palabras sencillas." },
        { step: "04", title: "Propiedad", desc: "Dominio a tu nombre, codigo tuyo y sin dependencia de una plataforma cerrada." },
      ]
    : [
        { step: "01", title: "Discovery", desc: "I learn your business: what you sell, who you help, and what makes someone contact you." },
        { step: "02", title: "Prototype", desc: "You see a live version before launch, with clear room for revision rounds." },
        { step: "03", title: "Build", desc: "Clean, fast, professional code. I explain the technical parts in plain English." },
        { step: "04", title: "Own", desc: "Domain in your name, code in your repo, and no platform lock-in." },
      ];

  return (
    <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">
          {isSpanish ? "Como funciona" : "How it works"}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-3xl font-light text-slate-500 mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
