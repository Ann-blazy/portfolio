import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div className="animate-rise">
          <p className="mb-4 text-lg font-medium text-brand-700">Hello, I'm</p>
          <h1 className="text-5xl font-bold leading-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 font-display text-xl text-brand-700 sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700">View my projects</a>
            <a href="#contact" className="rounded-lg border border-brand-200 bg-white px-6 py-3 font-semibold text-brand-700 transition hover:border-brand-500">Contact me</a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:200ms]" aria-hidden="true">
          <div className="mx-auto max-w-sm rounded-2xl bg-ink p-1 shadow-xl shadow-brand-900/20">
            <div className="flex gap-1.5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-brand-300" />
              <span className="h-3 w-3 rounded-full bg-brand-500" />
              <span className="h-3 w-3 rounded-full bg-brand-700" />
            </div>
            <pre className="overflow-x-auto px-5 pb-6 font-mono text-sm leading-7 text-brand-100">
{`const ann = {
  studying: "BBIT",
  builds: "full-stack apps",
  stack: ["React", "Node", "Prisma"],
  learning: "Rust",
  open_to: "internships",
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
