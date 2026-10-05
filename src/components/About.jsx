import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about, profile } from '../data.js'
import { Pin } from './Icons.jsx'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
        <Reveal delay={120} className="self-start rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <h3 className="text-lg font-semibold">Quick facts</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-center gap-2 text-brand-700"><Pin /> <span className="text-slate-700">Based in {profile.location}</span></li>
            <li>Studying BBIT</li>
            <li>Building with React, Node and PostgreSQL</li>
            <li>Learning Rust</li>
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
