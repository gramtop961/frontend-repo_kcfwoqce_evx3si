import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    company: 'TechNova',
    title: 'Senior Frontend Engineer',
    period: '2023 — Present',
    points: [
      'Led the build of a component library adopted across 4 teams',
      'Shipped 3D/GSAP powered product pages that increased conversion by 18%',
      'Mentored 5 engineers on performance and accessibility best practices',
    ],
  },
  {
    company: 'Orbit Labs',
    title: 'Frontend Engineer',
    period: '2021 — 2023',
    points: [
      'Rewrote legacy views into modern React + Vite stack',
      'Introduced E2E testing and CI that cut regressions by 40%',
    ],
  },
]

export default function Experience() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.exp-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={containerRef} className="relative bg-[#0e1326] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
          <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400"> // what I’ve been up to</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.company} className="exp-card rounded-2xl border border-cyan-300/20 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <span className="text-sm text-cyan-200/80">{r.period}</span>
              </div>
              <p className="mt-1 text-cyan-100/90">{r.company}</p>
              <ul className="mt-4 space-y-2 text-cyan-100/80">
                {r.points.map((p) => (
                  <li key={p} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
