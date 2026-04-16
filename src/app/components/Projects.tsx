import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="work" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-white">Selected work</h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Hydro Havens */}
        <Link 
          href="https://hydrohavenspools.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 block"
        >
          <div className="h-48 relative overflow-hidden bg-slate-900">
            <Image 
              src="/hydro-havens.webp" 
              alt="Hydro Havens Pools and Spas website" 
              width={400}
              height={192}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Hydro Havens Pools</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Full rebuild for El Paso pool contractor. Google Ads optimized with instant load times.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'SEO', 'Performance'].map(tag => (
                <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Hersemita */}
        <Link 
          href="https://hersemita.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 block"
        >
          <div className="h-48 relative overflow-hidden bg-slate-900">
            <Image 
              src="/hersemita.webp" 
              alt="Hersemita running coach platform dashboard" 
              width={400}
              height={192}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
            />
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
        </Link>

        {/* Monster's Keep */}
        <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
          <div className="h-48 relative overflow-hidden bg-slate-900">
            <Image 
              src="/monstersKeep.webp" 
              alt="Monster's Keep tower defense game" 
              width={400}
              height={192}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Monster's Keep</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Tower defense game with procedural generation, custom pixel art, upgrade systems.
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
  );
}