import Reveal from './Reveal.jsx'

export default function Section({ id, title, intro, tint = false, children }) {
  return (
    <section id={id} className={tint ? 'bg-brand-50' : 'bg-white'}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-lg text-slate-600">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
