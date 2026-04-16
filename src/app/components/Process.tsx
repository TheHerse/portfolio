export default function Process() {
  const steps = [
    { step: '01', title: 'Discovery', desc: 'I learn your business. Not just "what color"—but what actually drives customers.' },
    { step: '02', title: 'Prototype', desc: 'You see a live demo in days, not weeks. No surprises at the end.' },
    { step: '03', title: 'Build', desc: 'Clean code, no shortcuts. I explain the tech in plain English (former teacher).' },
    { step: '04', title: 'Own', desc: 'Domain in your name. Code in your repo. No vendor lock-in, ever.' }
  ];

  return (
    <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">How it works</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-light text-slate-600 mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}