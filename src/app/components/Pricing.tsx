import Link from "next/link";

type PricingProps = {
  lang?: "en" | "es";
};

const check = "✓";

export default function Pricing({ lang = "en" }: PricingProps) {
  const isSpanish = lang === "es";
  const packages = isSpanish
    ? [
        {
          name: "Inicial",
          desc: "Sitio de 3 paginas para negocios pequeños",
          price: "$600",
          featured: false,
          items: ["3 paginas: Inicio, Acerca de, Contacto", "Diseño responsive para celular", "Formulario de contacto incluido", "Carga en menos de 1 segundo"],
          note: "50% para empezar, 50% al lanzar - entrega en 1 semana",
        },
        {
          name: "Esencial",
          desc: "Sitio de varias paginas para negocios establecidos",
          price: "$800",
          featured: true,
          items: ["Hasta 5 paginas: Inicio, Acerca de, Servicios y mas", "Configuracion de Google Analytics y Maps", "SEO basico incluido", "2 rondas de revision"],
          note: "50% para empezar, 50% al lanzar - entrega en 2 semanas",
        },
        {
          name: "Negocio",
          desc: "Generacion de clientes + sistemas de reserva",
          price: "$1,500",
          featured: false,
          items: ["Hasta 10 paginas", "Todo lo incluido en Esencial", "Sistema de citas o reservas", "Formularios para capturar clientes", "1 mes de soporte prioritario"],
          note: "50% para empezar, 50% al lanzar - entrega en 3-4 semanas",
        },
      ]
    : [
        {
          name: "Starter",
          desc: "3-page site for small businesses",
          price: "$600",
          featured: false,
          items: ["3 pages: Home, About, Contact", "Mobile responsive", "Contact form included", "Under 1 second load time"],
          note: "50% to start, 50% when live - 1 week delivery",
        },
        {
          name: "Essential",
          desc: "Multi-page site for established businesses",
          price: "$800",
          featured: true,
          items: ["Up to 5 pages: Home, About, Services, and more", "Google Analytics and Maps setup", "Basic SEO optimization", "2 revision rounds"],
          note: "50% to start, 50% when live - 2 week delivery",
        },
        {
          name: "Business",
          desc: "Lead generation + booking systems",
          price: "$1,500",
          featured: false,
          items: ["Up to 10 pages", "Everything in Essential", "Booking or appointment system", "Lead capture forms", "1 month priority support"],
          note: "50% to start, 50% when live - 3-4 week delivery",
        },
      ];

  return (
    <section id="pricing" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-white">{isSpanish ? "Inversion" : "Investment"}</h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        {isSpanish
          ? "Sitios personalizados, rapidos y profesionales. Costo claro, sin plantillas, sin constructores pesados y sin pagos mensuales obligatorios."
          : "Custom, fast, professional websites with clear pricing. No templates, no bloated page builders, and no required monthly maintenance fees."}
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`bg-white/5 rounded-xl relative ${pkg.featured ? "border border-cyan-500/30 p-8 overflow-hidden md:-translate-y-4" : "border border-white/10 p-6"}`}
          >
            {pkg.featured && (
              <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                {isSpanish ? "MEJOR VALOR" : "BEST VALUE"}
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">{pkg.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{pkg.desc}</p>
              <div className="flex items-baseline gap-2">
                <span className={`${pkg.featured ? "text-4xl" : "text-3xl"} font-bold text-white`}>{pkg.price}</span>
                <span className="text-sm text-slate-400">{isSpanish ? "precio fijo" : "flat rate"}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 text-sm">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-0.5">{check}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-xs text-slate-400 mb-6 text-center border-t border-white/10 pt-4">
              {pkg.note}
            </div>

            <div className="space-y-2">
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-lg transition-colors text-sm font-semibold ${pkg.featured ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                {isSpanish ? "Enviar mensaje" : "Email me"}
              </Link>
              <a
                href="https://calendly.com/hersonhernandez/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center border border-white/20 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold ${pkg.featured ? "text-white" : "text-slate-400"}`}
              >
                {isSpanish ? "Agendar llamada" : "Book a call"}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-400">
          <span className="text-cyan-400">{isSpanish ? "Porque empieza en $600?" : "Why does it start at $600?"}</span>{" "}
          {isSpanish
            ? "Porque hasta el paquete basico se programa desde cero. Tu sitio es rapido, profesional y tuyo."
            : "Because even the basic package is coded from scratch. Your site is fast, professional, and yours."}
        </p>
      </div>
    </section>
  );
}
