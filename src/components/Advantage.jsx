export default function Advantage() {
  const competitors = [
    { name: 'Coinbase Institutional', has: ['Custody', 'Exchange'], lacks: ['RWA Tokenization', 'Vault Entities', 'Deal Rooms'] },
    { name: 'Fireblocks', has: ['Custody'], lacks: ['Exchange', 'RWA Tokenization', 'Vault Entities', 'Deal Rooms'] },
    { name: 'SEBA / Sygnum', has: ['Custody', 'Banking'], lacks: ['Deal Rooms', 'Vault Entities'] },
    { name: 'Tokeny', has: ['Tokenization'], lacks: ['Custody', 'Vault Entities'] },
  ]

  return (
    <section id="advantage" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Competitive Advantage</h2>
        <p className="mt-4 text-white/70 max-w-3xl">Regulation + UX + Tokenization + Vaults = Opes</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-[720px] w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Custody</th>
                <th className="px-4 py-3">Exchange</th>
                <th className="px-4 py-3">RWA Tokenization</th>
                <th className="px-4 py-3">Vault Entities</th>
                <th className="px-4 py-3">Deal Rooms</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map(c => (
                <tr key={c.name} className="border-t border-white/10">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3">{c.has.includes('Custody') ? '✔️' : '—'}</td>
                  <td className="px-4 py-3">{c.has.includes('Exchange') ? '✔️' : '—'}</td>
                  <td className="px-4 py-3">{c.has.includes('RWA Tokenization') ? '✔️' : '—'}</td>
                  <td className="px-4 py-3">{c.has.includes('Vault Entities') ? '✔️' : '—'}</td>
                  <td className="px-4 py-3">{c.has.includes('Deal Rooms') ? '✔️' : '—'}</td>
                </tr>
              ))}
              <tr className="border-t border-white/10 bg-white/5">
                <td className="px-4 py-3 font-semibold">Opes Digital</td>
                <td className="px-4 py-3">✔️</td>
                <td className="px-4 py-3">✔️</td>
                <td className="px-4 py-3">✔️</td>
                <td className="px-4 py-3">✔️</td>
                <td className="px-4 py-3">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
