import { useState } from 'react'

export default function RequestAccess() {
  const [form, setForm] = useState({ full_name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('Request received. We will be in touch.')
      setForm({ full_name: '', email: '', company: '', message: '' })
    } catch (e) {
      setStatus(`Error: ${e.message}`)
    }
  }

  return (
    <section id="request" className="relative py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Request Access</h2>
            <p className="mt-4 text-white/70 max-w-xl">Private access for institutional investors and family offices. Submit your details and our team will reach out.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Regulated activities subject to FCA, MiCA, and FINTRAC licensing.</li>
              <li>• No services offered until authorized.</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Full Name</label>
              <input value={form.full_name} onChange={e=>setForm({...form, full_name: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30" placeholder="jane@familyoffice.com" required />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Company</label>
              <input value={form.company} onChange={e=>setForm({...form, company: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30" placeholder="Atlas Family Office" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Message</label>
              <textarea rows="4" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30" placeholder="A short note about your mandate..." />
            </div>
            <button type="submit" className="w-full px-6 py-3 rounded-full text-black font-medium" style={{ backgroundColor: '#C8A75F' }}>
              Request Private Access
            </button>
            {status && <p className="text-sm text-white/70">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
