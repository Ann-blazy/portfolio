import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { Menu } from './Icons.jsx'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-display text-xl font-semibold text-brand-700">{profile.name}</a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-medium text-slate-600 transition-colors hover:text-brand-600">{l}</a>
            </li>
          ))}
        </ul>
        <button className="rounded-md p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <Menu open={open} />
        </button>
      </nav>
      {open && (
        <ul className="border-t border-brand-100 bg-white px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 font-medium text-slate-700">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
