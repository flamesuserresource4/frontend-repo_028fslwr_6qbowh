import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#market', label: 'Market' },
  { href: '#advantage', label: 'Why Opes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg,#C8A75F,#F5F5F5)' }}></div>
            <span className="text-sm tracking-widest text-white/80">OPES DIGITAL</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#request" className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#C8A75F' }}>
              Request Access
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/80 py-2">
                  {item.label}
                </a>
              ))}
              <a href="#request" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-sm font-medium text-black text-center" style={{ backgroundColor: '#C8A75F' }}>
                Request Access
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
