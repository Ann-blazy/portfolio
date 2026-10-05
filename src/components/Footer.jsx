import { profile } from '../data.js'
import { Github, Linkedin, Mail } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-brand-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} aria-label="GitHub" className="hover:text-white"><Github /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white"><Mail /></a>
          <a href="#top" className="ml-2 font-medium hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
