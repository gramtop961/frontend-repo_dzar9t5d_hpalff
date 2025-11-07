import React from 'react'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wider text-cyan-300">MechaVision 3D</a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-200 md:flex">
            <a href="#about" className="hover:text-cyan-300">Tentang</a>
            <a href="#services" className="hover:text-cyan-300">Layanan</a>
            <a href="#showcase" className="hover:text-cyan-300">Portofolio</a>
            <a href="#contact" className="hover:text-cyan-300">Kontak</a>
          </nav>
          <a href="#contact" className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-cyan-400">Request Custom Design</a>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-14">
        <Hero3D />
        <About />
        <Services />
        <Showcase />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-cyan-400/10 bg-neutral-950 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-400 md:flex-row">
            <p>© {new Date().getFullYear()} MechaVision 3D — Industrial & Action Figure Design Studio</p>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-cyan-300">Beranda</a>
              <a href="#services" className="hover:text-cyan-300">Layanan</a>
              <a href="#showcase" className="hover:text-cyan-300">Portofolio</a>
              <a href="#contact" className="hover:text-cyan-300">Kontak</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
