import { motion } from 'framer-motion'

const products = [
  { name: 'Cryptauram™', desc: 'FCA-regulated custody & exchange', color: '#00C4B4' },
  { name: 'NOVOR™', desc: 'Gold-backed stablecoin + utility token', color: '#C8A75F' },
  { name: 'OMNIA™', desc: 'RWA tokenization & UHNW deal rooms', color: '#4dd1c8' },
  { name: 'Asset Holding Co.', desc: 'Digital vaults + trust entities', color: '#9BA3AF' },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Ecosystem</h2>
          <p className="text-white/60 max-w-xl">Four interoperable pillars that unify custody, currency, tokenization and vault infrastructure.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 group hover:-translate-y-1 hover:bg-white/10 transition will-change-transform"
            >
              <div className="w-10 h-10 rounded-full mb-4" style={{ background: `radial-gradient(circle, ${p.color}, transparent 60%)` }} />
              <h3 className="text-xl font-medium">{p.name}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
