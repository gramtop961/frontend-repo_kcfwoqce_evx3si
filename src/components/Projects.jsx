import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Nebula UI',
    description: 'A sleek, accessible React design system with theming and motion primitives.',
    tags: ['React', 'GSAP', 'Storybook'],
    link: '#',
  },
  {
    title: 'Pulse Analytics',
    description: 'Real-time dashboards with streaming charts and WebGL data visualizations.',
    tags: ['Vite', 'WebGL', 'D3'],
    link: '#',
  },
  {
    title: 'Orbit Site',
    description: 'Interactive 3D marketing site powered by Spline + custom shaders.',
    tags: ['Spline', 'Three.js', 'Tailwind'],
    link: '#',
  },
]

export default function Projects() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.proj-card').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={containerRef} className="relative bg-gradient-to-b from-[#0e1326] to-[#120a2a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400"> // selected work</span>
          </h2>
          <a href="#education" className="hidden rounded-full border border-fuchsia-300/40 px-4 py-2 text-sm text-fuchsia-100/90 backdrop-blur hover:bg-white/10 md:inline-block">Next: Education →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              className="proj-card group relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-white/5 p-6 transition-transform hover:-translate-y-1 hover:bg-white/10"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(34,211,238,0.2)_0%,transparent_60%),radial-gradient(40%_40%_at_80%_0%,rgba(217,70,239,0.15)_0%,transparent_60%)]" />
              <h3 className="relative z-10 text-xl font-semibold">{p.title}</h3>
              <p className="relative z-10 mt-2 text-cyan-100/80">{p.description}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-300/30 px-2.5 py-1 text-xs text-cyan-100/80">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
