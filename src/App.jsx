import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ecosystem from './components/Ecosystem'
import Compliance from './components/Compliance'
import Market from './components/Market'
import Advantage from './components/Advantage'
import RequestAccess from './components/RequestAccess'

function App() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Compliance />
      <Market />
      <Advantage />
      <RequestAccess />
      <footer className="border-t border-white/10 py-10 text-center text-white/60 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <p>Regulated activities subject to FCA, MiCA, and FINTRAC licensing. No services offered until authorized.</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Opes Digital</p>
        </div>
      </footer>
    </div>
  )
}

export default App
