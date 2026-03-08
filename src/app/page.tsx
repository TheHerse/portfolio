export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-10 px-6 py-6 max-w-6xl mx-auto flex justify-between items-center border-b border-white/5">
        <div className="font-bold text-xl tracking-tight text-white">
          herson<span className="text-cyan-400">hernandez</span>.com
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-green-400 uppercase tracking-wider">
            Available for projects
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 py-20 md:py-32 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
            Web Developer • Clarksville, TN
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Clarksville businesses get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">more customers</span> with my websites
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
          Custom sites for small businesses. No templates, no monthly fees, no headaches. Just fast, professional results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:dev@hersonhernandez.com"
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Start a project
            <span>→</span>
          </a>
          <a 
            href="#work"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors"
          >
            View work
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-white">Selected work</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Project 1: Hersemita */}
          <a 
            href="https://hersemita.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 block"
          >
            <div className="h-60 relative overflow-hidden bg-slate-900">
              <img 
                src="/hersemita.png" 
                alt="Hersemita running coach platform dashboard" 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Running Coach Platform</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                SaaS for tracking athletes, automated SMS notifications, workout uploads.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Supabase', 'Twilio'].map(tag => (
                  <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* Project 2: Monster's Keep */}
          <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            
            {/* Image container with hover effect */}
            <div className="h-60 relative overflow-hidden bg-slate-900">
              
              {/* Static PNG (shows by default) */}
              <img 
                src="/monstersKeep.png" 
                alt="Monster's Keep tower defense game" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              
              {/* GIF (shows on hover) */}
              <img 
                src="/monstersKeep.gif" 
                alt="Monster's Keep gameplay animation" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Monster's Keep</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Indie tower defense game with procedural generation, custom pixel art, upgrade systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'C#', 'Aseprite'].map(tag => (
                  <span key={tag} className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">How it works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Tell me what you need. No tech jargon, just goals.' },
              { step: '02', title: 'Design', desc: 'I create mockups. You approve. We refine.' },
              { step: '03', title: 'Build', desc: '1-2 weeks of development. Regular updates.' },
              { step: '04', title: 'Launch', desc: 'I handle domain, hosting, handover. You own it.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-light text-slate-600 mb-3">{item.step}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* PRICING */}
<section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
  <div className="flex items-center gap-4 mb-12">
    <h2 className="text-2xl font-bold text-white">Investment</h2>
    <div className="flex-1 h-px bg-white/10" />
  </div>
  
  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
    
    {/* Essential */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Essential</h3>
        <div className="text-4xl font-bold text-white">$800</div>
      </div>
      <ul className="space-y-3 mb-6">
        {['Up to 5 pages', 'Mobile responsive', 'Contact form', '2 revision rounds', 'Basic SEO', '2 weeks bug support'].map(feature => (
          <li key={feature} className="flex items-center gap-3 text-slate-400 text-sm">
            <span className="text-cyan-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-xs text-slate-500 mb-4 text-center">50% to start, 50% on launch</div>
      
      {/* Two buttons */}
      <div className="space-y-2">
        <a 
          href="mailto:dev@hersonhernandez.com?subject=Essential Package Inquiry"
          className="block text-center bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-400 transition-colors text-sm font-semibold"
        >
          Email me
        </a>
        <a 
          href="https://calendly.com/hersonhernandez/15-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center border border-white/20 text-white py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold"
        >
          Book a call
        </a>
      </div>
    </div>

    {/* Business */}
    <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
        POPULAR
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Business</h3>
        <div className="text-4xl font-bold text-white">$1,500</div>
      </div>
      <ul className="space-y-3 mb-6">
        {['Everything in Essential', 'Up to 10 pages', 'Booking/appointment system', '5 revision rounds', 'Performance optimized', '1 month bug support'].map(feature => (
          <li key={feature} className="flex items-center gap-3 text-slate-400 text-sm">
            <span className="text-cyan-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-xs text-slate-500 mb-4 text-center">50% to start, 50% on launch</div>
      
      {/* Two buttons */}
      <div className="space-y-2">
        <a 
          href="mailto:dev@hersonhernandez.com?subject=Business Package Inquiry"
          className="block text-center bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-400 transition-colors text-sm font-semibold"
        >
          Email me
        </a>
        <a 
          href="https://calendly.com/hersonhernandez/15-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center border border-white/20 text-white py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold"
        >
          Book a call
        </a>
      </div>
    </div>

  </div>
  
  {/* Post-support note */}
  <div className="mt-8 text-center">
    <p className="text-sm text-slate-500">
      After support period: Bug fixes $100/hour or flat rate • New features quoted separately
    </p>
  </div>
</section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start?</h2>
        <p className="text-slate-400 mb-8">Most projects begin within 48 hours.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="mailto:dev@hersonhernandez.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            dev@hersonhernandez.com
            <span>→</span>
          </a>
          <span className="text-slate-500">or</span>
          <a 
            href="https://calendly.com/hersonhernandez/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Book a 15-min call
          </a>
        </div>
        
        <p className="text-xs text-slate-600">Response time: under 4 hours</p>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <span>© 2024 Herson Hernandez</span>
          <span>Clarksville, TN</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>

    </main>
  );
}