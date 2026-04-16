import Link from "next/link";

export const metadata = {
  title: "Message Sent | Herson Hernandez",
  description: "Thank you for your message. I'll be in touch shortly.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 flex items-center justify-center px-6">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Message sent!</h1>
        <p className="text-slate-400 mb-8">
          Thanks for reaching out. I'll review your project details and get back to you within 24 hours.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
        >
          Back to home
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}