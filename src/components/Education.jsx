import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" title="Education" tint>
      <ol className="relative ml-3 border-l-2 border-brand-200">
        {education.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 100} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-brand-50 bg-brand-600" />
            <p className="text-sm font-medium text-brand-700">{e.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
            <p className="text-slate-600">{e.place}</p>
            <p className="mt-2 max-w-2xl">{e.note}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
