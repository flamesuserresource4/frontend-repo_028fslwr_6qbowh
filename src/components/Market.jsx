export default function Market() {
  const stats = [
    { value: '$24T+', label: 'Tokenized RWAs by 2030' },
    { value: '$84T', label: 'Global private wealth' },
    { value: '16%', label: 'UHNWIs exposed to digital assets' },
  ]

  return (
    <section id="market" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_80%_0px,rgba(0,196,180,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-semibold">Market Opportunity</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {stats.map(s => (
            <div key={s.label} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
              <div className="text-4xl font-semibold" style={{ color: '#C8A75F' }}>{s.value}</div>
              <div className="mt-2 text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
