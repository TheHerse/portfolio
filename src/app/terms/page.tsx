import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Herson Hernandez",
  description: "Terms of service for Herson Hernandez web development services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Effects - matches main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
        {/* Back link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 text-sm"
        >
          <span>←</span> Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12 text-sm">Last updated: April 15, 2026</p>

        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">1. Services</h2>
            <p className="leading-relaxed text-slate-400">
              Herson Hernandez provides custom web development services. Project specifications 
              are defined in individual contracts signed prior to work commencement.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">2. Payment Terms</h2>
            <p className="leading-relaxed text-slate-400">
              Projects require a 50% deposit to begin, with the remaining 50% due upon completion. 
              All fees are flat-rate as specified in the project contract.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed text-slate-400">
              Upon final payment, clients receive full ownership rights to the custom code and design 
              created for their project. I retain the right to display completed work in my portfolio.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed text-slate-400">
              I am not liable for losses caused by third-party hosting failures, domain issues, 
              or platform changes outside my control.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">5. Governing Law</h2>
            <p className="leading-relaxed text-slate-400">
              These terms are governed by the laws of the State of Tennessee.
            </p>
          </section>
        </div>

        {/* Footer mini */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-600">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}