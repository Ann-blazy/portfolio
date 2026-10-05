import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'
import { Mail, Github, Linkedin } from './Icons.jsx'

const field = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Opens the visitor's email app. Swap for Formspree/EmailJS later if you want in-page sending.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" title="Get in touch" intro="Open to internships, collaborations and good conversations about software.">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-lg text-slate-700 hover:text-brand-700"><span className="text-brand-600"><Mail /></span>{profile.email}</a>
          <a href={profile.github} className="flex items-center gap-3 text-lg text-slate-700 hover:text-brand-700"><span className="text-brand-600"><Github /></span>GitHub</a>
          <a href={profile.linkedin} className="flex items-center gap-3 text-lg text-slate-700 hover:text-brand-700"><span className="text-brand-600"><Linkedin /></span>LinkedIn</a>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="space-y-5">
            <label className="block font-medium text-ink">Name
              <input required value={f.name} onChange={set('name')} className={field} autoComplete="name" />
            </label>
            <label className="block font-medium text-ink">Email
              <input required type="email" value={f.email} onChange={set('email')} className={field} autoComplete="email" />
            </label>
            <label className="block font-medium text-ink">Message
              <textarea required rows={5} value={f.message} onChange={set('message')} className={field} />
            </label>
            <button type="submit" className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700">Send message</button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
