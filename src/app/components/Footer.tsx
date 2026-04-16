import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
        <span>© 2026 Herson Hernandez</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </div>
        <span>Built with Next.js & Tailwind</span>
      </div>
    </footer>
  );
}