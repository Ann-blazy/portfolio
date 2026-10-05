import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use most, and what I'm picking up next." tint>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 100} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
            <h3 className="text-xl font-semibold">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li key={it} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
