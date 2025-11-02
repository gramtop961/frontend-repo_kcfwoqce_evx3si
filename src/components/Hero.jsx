import { useRef, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      headlineRef.current,
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.9 }
    )
      .fromTo(
        subRef.current,
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(ctaRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.4')
  }, [])

  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1f1144] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_10%,rgba(0,255,229,0.15)_0%,transparent_60%),radial-gradient(80%_60%_at_90%_20%,rgba(168,85,247,0.15)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 pt-28 md:pt-36">
        <div className="max-w-2xl">
          <h1 ref={headlineRef} className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I’m Your Name
            <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Building delightful, modern web experiences</span>
          </h1>
          <p ref={subRef} className="mt-6 text-lg text-cyan-100/80 md:text-xl">
            Frontend-first engineer crafting interactive products with React, TypeScript, and 3D on the web.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              View Projects
            </a>
            <a href="#experience" className="rounded-xl border border-cyan-300/40 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300">
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
