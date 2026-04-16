import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black relative">
      {/* Background effects matching main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 text-sm"
          >
            <span className="mr-2">←</span> Back to home
          </Link>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
                Get Started
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Start your project</h1>
            <p className="text-slate-400 mb-8">Tell me about your business and what you need. I'll get back to you within 24 hours.</p>
            
            {/* Native form for static export - Netlify detects this */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success/"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">Budget Range</label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                >
                  <option value="">Select a range...</option>
                  <option value="600">Starter ($600)</option>
                  <option value="800">Essential ($800)</option>
                  <option value="1500">Business ($1,500)</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Tell me about your business and what you need..."
                />
              </div>
              
              <div className="text-xs text-slate-500">
                By submitting this form, you agree to our <Link href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-cyan-400 hover:underline">Terms of Service</Link>.
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-cyan-500 text-black font-semibold py-4 rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}