export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-300 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-10 px-6 py-6 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-white/5">
        <div className="font-bold text-xl tracking-tight text-white">
          herson<span className="text-cyan-400">hernandez</span>.com
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-green-400 uppercase tracking-wider whitespace-nowrap">
            Available for projects
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 py-20 md:py-32 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
            Web Developer
          </span>
        </div>
                
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          WordPress slow? Breaking? <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Go custom.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
          I build hand-coded sites for businesses tired of plugin updates, template limits, and "page builders" that break. Own your code. Skip the monthly fees.
        </p> 

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#pricing"
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

      {/* WHY CUSTOM */}
      <section className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Template sites vs. Custom code</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="text-slate-400 font-semibold mb-3 uppercase tracking-wider">$500 "Website Packages"</h3>
              <ul className="space-y-2 text-slate-500">
                <li>• Pre-made templates (looks like competitors)</li>
                <li>• 10+ plugins to maintain (security risks)</li>
                <li>• 3-5 second load times</li>
                <li>• Monthly "maintenance" fees</li>
                <li>• Locked into their hosting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3 uppercase tracking-wider">Custom Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Unique design (stands out)</li>
                <li>• Hand-coded, no plugin bloat</li>
                <li>• {'<'}1 second load (better Google ranking)</li>
                <li>• No monthly maintenance required</li>
                <li>• You own everything, always</li>
              </ul>
            </div>
          </div>
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
              { step: '01', title: 'Discovery', desc: 'I learn your business. Not just "what color"—but what actually drives customers.' },
              { step: '02', title: 'Prototype', desc: 'You see a live demo in days, not weeks. No surprises at the end.' },
              { step: '03', title: 'Build', desc: 'Clean code, no shortcuts. I explain the tech in plain English (former teacher).' },
              { step: '04', title: 'Own', desc: 'Domain in your name. Code in your repo. No vendor lock-in, ever.' }
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
      <section id="pricing" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-white">Investment</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        
        {/* Value prop intro */}
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          No templates. No page builders. Just fast, custom code that you own completely. 
          One upfront cost, zero monthly "maintenance" fees.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          
          {/* Starter - The "Brockway killer" */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">Starter</h3>
              <p className="text-xs text-slate-400 mb-3">3-page site for small businesses</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">$600</span>
                <span className="text-sm text-slate-500">flat rate</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong>3-pages</strong> (Home, About, Services/Contact)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Mobile responsive</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Contact form included</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>{'<'}1 second load time</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Google indexing setup</span>
              </li>
            </ul>
            
            <div className="text-xs text-slate-500 mb-6 text-center border-t border-white/10 pt-4">
              50% to start, 50% when live • 1 week delivery
            </div>
            
            <div className="space-y-2">
              <a 
                href="mailto:dev@hersonhernandez.com?subject=Starter Package - Single Page Site"
                className="block text-center bg-white/10 text-white py-3 rounded-lg hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                Email me
              </a>
              <a 
                href="https://calendly.com/hersonhernandez/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-white/20 text-slate-400 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* Essential - Middle tier */}
          <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-8 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST VALUE
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">Essential</h3>
              <p className="text-xs text-slate-400 mb-3">Multi-page site for established businesses</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">$800</span>
                <span className="text-sm text-slate-500">flat rate</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong>Up to 5 pages</strong> (Home, About, Services, etc.)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong>Custom-built</strong> from scratch</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Multiple contact forms</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Google setup (analytics, maps)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Basic SEO optimization</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>2 weeks delivery</span>
              </li>
            </ul>
            
            <div className="text-xs text-slate-500 mb-6 text-center border-t border-white/10 pt-4">
              50% to start, 50% when live • 2 revision rounds
            </div>
            
            <div className="space-y-2">
              <a 
                href="mailto:dev@hersonhernandez.com?subject=Essential Package - Multi Page Site"
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

          {/* Business - Top tier */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">Business</h3>
              <p className="text-xs text-slate-400 mb-3">Lead generation + booking systems</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">$1,500</span>
                <span className="text-sm text-slate-500">flat rate</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong>Up to 10 pages</strong></span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong>Everything in Essential</strong></span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Booking/appointment system</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Lead capture forms</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>Advanced speed optimization</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span>1 month priority support</span>
              </li>
            </ul>
            
            <div className="text-xs text-slate-500 mb-6 text-center border-t border-white/10 pt-4">
              50% to start, 50% when live • 3-4 weeks delivery
            </div>
            
            <div className="space-y-2">
              <a 
                href="mailto:dev@hersonhernandez.com?subject=Business Package - Full Featured Site"
                className="block text-center bg-white/10 text-white py-3 rounded-lg hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                Email me
              </a>
              <a 
                href="https://calendly.com/hersonhernandez/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-white/20 text-slate-400 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-semibold"
              >
                Book a call
              </a>
            </div>
          </div>

        </div>
        
        {/* Comparison hint */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            <span className="text-cyan-400">Why $600 instead of $500?</span> Because even my "basic" package is hand-coded from scratch. 
            No templates, no bloated plugins, no monthly fees. You own the code.
          </p>
        </div>
        
      {/* Trust signals */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
        <div className="p-4">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            {/* Lock icon for ownership */}
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h4 className="text-white font-medium text-sm mb-1">You Own Everything</h4>
          <p className="text-xs text-slate-500">Domain, code, design files. No vendor lock-in.</p>
        </div>
        
        <div className="p-4">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            {/* Lightning bolt for no monthly fees */}
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-white font-medium text-sm mb-1">No Monthly Fees</h4>
          <p className="text-xs text-slate-500">Unlike WordPress, no plugins to rent or update.</p>
        </div>
        
        <div className="p-4">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            {/* Gauge/speedometer for fast load */}
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-white font-medium text-sm mb-1">Fast Load Guarantee</h4>
          <p className="text-xs text-slate-500">Under 1 second or I'll optimize for free.</p>
        </div>
      </div>
        
        {/* Qualification filter */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 mb-2">Not sure which package?</p>
          <p className="text-xs text-slate-600">
            The <strong>Starter</strong> is perfect if you just need a "digital business card." 
            Go <strong>Essential</strong> if you have multiple services to showcase. 
            Choose <strong>Business</strong> if you need customers to book appointments or submit leads directly on your site.
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
          <span>© 2026 Herson Hernandez</span>
          <span>Clarksville, TN</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>

    </main>
  );
}