import { ShieldCheck, Coins, LineChart, Vault } from 'lucide-react'

export default function About() {
  const items = [
    { icon: ShieldCheck, title: 'Regulated Custody', desc: 'Institutional-grade custody with audited controls.' },
    { icon: Coins, title: 'Tokenization', desc: 'On-chain issuance and lifecycle management for RWAs.' },
    { icon: LineChart, title: 'AI-Personalized Dashboards', desc: 'Insights tailored for CIOs, family offices, and funds.' },
    { icon: Vault, title: 'Vault Infrastructure', desc: 'Segregated vaults, trust entities, and governance layers.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_0px,rgba(200,167,95,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-semibold">About Opes Digital</h2>
        <p className="mt-4 text-white/70 max-w-2xl">Opes Digital is a next-generation platform that unifies custody, token issuance, private deal rooms, and institutional-grade digital asset management.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <Icon className="text-[#00C4B4]" />
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
