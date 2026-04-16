import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 flex items-center justify-center px-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Message sent!</h2>
        <p className="text-slate-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
        <Link href="/" className="text-cyan-400 hover:underline">← Back to home</Link>
      </div>
    </main>
  );
}