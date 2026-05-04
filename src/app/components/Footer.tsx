import Link from "next/link";

type FooterProps = {
  lang?: "en" | "es";
};

export default function Footer({ lang = "en" }: FooterProps) {
  const isSpanish = lang === "es";

  return (
    <footer className="relative z-10 px-6 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <span>© 2026 Herson Hernandez</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
        <span>{isSpanish ? "Sitios web en ingles y espanol" : "Websites in English and Spanish"}</span>
      </div>
    </footer>
  );
}
