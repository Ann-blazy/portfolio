import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="A few things I've built. Replace the links with your repos or live demos.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="group flex flex-col rounded-2xl border border-brand-100 p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-600">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800">{t}</li>)}
            </ul>
            <a href={p.link} className="mt-5 font-semibold text-brand-600 hover:text-brand-800">View project</a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
