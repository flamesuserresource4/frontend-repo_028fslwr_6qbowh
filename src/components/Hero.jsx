import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold leading-tight text-white"
          >
            The Future of Digital Wealth Is Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-white/70"
          >
            Custody. Currency. Blockchain. Legacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#ecosystem" className="px-6 py-3 rounded-full text-black font-medium" style={{ backgroundColor: '#C8A75F' }}>
              Explore the Ecosystem
            </a>
            <a href="#request" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              Request Access
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
