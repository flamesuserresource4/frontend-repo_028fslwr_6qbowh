export default function Compliance() {
  const badges = ['FCA (UK)', 'MiCA (EU)', 'FINTRAC (CA)']
  const standards = ['ISO', 'SOC2', 'ERC-3643', 'AML', 'KYB', 'SMCR-ready']

  return (
    <section id="compliance" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Compliance</h2>
        <p className="mt-4 text-white/70 max-w-3xl">“Opes Digital is built on regulatory rails — not workarounds.”</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {badges.map(b => (
            <span key={b} className="px-4 py-2 rounded-full border border-white/15 text-white/80 bg-white/5">{b}</span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {standards.map(s => (
            <div key={s} className="px-3 py-3 rounded-lg border border-white/10 text-center text-sm text-white/70 bg-white/5">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
