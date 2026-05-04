import Navigation from "./Navigation";
import Hero from "./Hero";
import Comparison from "./Comparison";
import Projects from "./Projects";
import Process from "./Process";
import Pricing from "./Pricing";
import Footer from "./Footer";

type HomePageProps = {
  lang?: "en" | "es";
};

export default function HomePage({ lang = "en" }: HomePageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Herson Hernandez Web Development",
    url: lang === "es" ? "https://hersonhernandez.com/es/" : "https://hersonhernandez.com/",
    areaServed: ["United States", "Clarksville, TN"],
    availableLanguage: ["English", "Spanish"],
    priceRange: "$600-$1500",
    founder: {
      "@type": "Person",
      name: "Herson Hernandez",
      jobTitle: "Web Developer",
      knowsLanguage: ["English", "Spanish"],
    },
    serviceType: ["Custom website development", "Small business website design", "SEO setup", "Lead capture forms"],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)]" />
      </div>

      <Navigation lang={lang} />
      <Hero lang={lang} />
      <Comparison lang={lang} />
      <Projects lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
