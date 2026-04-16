export default function Comparison() {
  return (
    <section className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
      <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6">Template sites vs. Custom code</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="text-slate-400 font-semibold mb-3 uppercase tracking-wider">Generic Site Builders</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Same templates as 1000 other businesses</li>
              <li>• Bloated code that loads in 3-5 seconds</li>
              <li>• Monthly fees that add up forever</li>
              <li>• Locked into their platform</li>
              <li>• Plugin conflicts and security risks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-3 uppercase tracking-wider">Custom Development</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Unique design that stands out</li>
              <li>• Under 1 second load (better Google ranking)</li>
              <li>• One-time cost, zero recurring fees</li>
              <li>• You own everything, always</li>
              <li>• Clean, secure code—no plugins needed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}