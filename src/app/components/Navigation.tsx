export default function Navigation() {
  return (
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
  );
}