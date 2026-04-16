import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Herson Hernandez",
  description: "Privacy policy for Herson Hernandez web development services.",
};

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12 text-sm">Last updated: April 15, 2026</p>
        
        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed text-slate-400">
              When you use our contact form, we collect your name, email address, and project details. 
              This information is necessary to respond to your inquiry.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-slate-400">
              We use the information collected solely to communicate with you about your project inquiry. 
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">3. Data Storage</h2>
            <p className="leading-relaxed text-slate-400">
              Contact form submissions are processed via Resend email services. 
              We retain correspondence for up to 12 months for business records.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">4. Your Rights</h2>
            <p className="leading-relaxed text-slate-400">
              You may request deletion of your personal data by emailing{" "}
              <a href="mailto:herson@hersonhernandez.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                herson@hersonhernandez.com
              </a>.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">5. Contact</h2>
            <p className="leading-relaxed text-slate-400">
              For privacy questions:{" "}
              <a href="mailto:herson@hersonhernandez.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                herson@hersonhernandez.com
              </a>
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