import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    school: 'State University',
    degree: 'B.S. Computer Science',
    period: '2017 — 2021',
    details: 'Focus on HCI, graphics, and distributed systems. Graduated magna cum laude.',
  },
  {
    school: 'Online Courses',
    degree: '3D for the Web, Advanced GSAP',
    period: 'Ongoing',
    details: 'Continual learning in creative dev and motion design.',
  },
]

export default function Education() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.edu-row').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={containerRef} className="relative bg-[#120a2a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Education
          <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400"> // how I learned</span>
        </h2>
        <div className="mt-10 space-y-6">
          {items.map((e) => (
            <div key={e.school} className="edu-row rounded-2xl border border-fuchsia-300/20 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <span className="text-sm text-fuchsia-100/80">{e.period}</span>
              </div>
              <p className="mt-1 text-fuchsia-100/90">{e.school}</p>
              <p className="mt-3 text-fuchsia-100/80">{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
