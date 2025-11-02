import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global reveal for sections
      gsap.utils.toArray('section').forEach((el, i) => {
        if (i === 0) return // skip hero initial reveal handled in component
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        )
      })
    }, appRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="scroll-smooth min-h-screen bg-[#0b1220] text-white">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-200">/your.name</a>
          <nav className="hidden gap-6 text-sm text-cyan-100 md:flex">
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
          </nav>
          <a href="#projects" className="rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow shadow-fuchsia-500/20 md:text-sm">See Work</a>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
      </main>

      <footer className="border-t border-white/10 bg-[#0b1220] py-8 text-center text-sm text-cyan-100/70">
        © {new Date().getFullYear()} Your Name — Built with React, GSAP and Spline
      </footer>
    </div>
  )
}

export default App
