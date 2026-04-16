export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-white">Investment</h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      
      <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        No templates. No page builders. Just fast, custom code that you own completely. 
        One upfront cost, zero monthly maintenance fees.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        
        {/* Starter */}
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
              <span><strong>3-pages</strong> (Home, About, Contact)</span>
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
          </ul>
          
          <div className="text-xs text-slate-500 mb-6 text-center border-t border-white/10 pt-4">
            50% to start, 50% when live • 1 week delivery
          </div>
          
          <div className="space-y-2">
            <a 
              href="/contact"
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

        {/* Essential */}
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
              <span><strong>Up to 5 pages </strong>(Home, About, Services, etc.)</span>
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
              href="/contact"
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
              <span>1 month priority support</span>
            </li>
          </ul>
          
          <div className="text-xs text-slate-500 mb-6 text-center border-t border-white/10 pt-4">
            50% to start, 50% when live • 3-4 weeks delivery
          </div>
          
          <div className="space-y-2">
            <a 
              href="/contact"
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
    </section>
  );
}