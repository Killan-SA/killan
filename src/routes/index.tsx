import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import { gallery, img, packages, services, site, story, testimonials, values } from '../data/site'

export const Route = createFileRoute('/')({ component: Home })

const nav = [
  ['#histoire', 'Histoire'],
  ['#prestations', 'Prestations'],
  ['#galerie', 'Photos'],
  ['#tarifs', 'Tarifs'],
  ['#contact', 'Accès'],
]

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs uppercase tracking-[.3em] ${light ? 'text-sand' : 'text-sage-dark'}`}>
      <span className={`h-px w-10 ${light ? 'bg-sand' : 'bg-sage'}`} />
      {children}
    </p>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="font-serif text-3xl italic">
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[.2em] lg:flex">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="opacity-85 transition hover:opacity-100">
              {label}
            </a>
          ))}
          <a href="#rendez-vous" className="rounded-full border border-cream/70 px-6 py-3 transition hover:bg-cream hover:text-ink">
            Rendez-vous
          </a>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink/95 p-6 text-cream">
          <button className="self-end" onClick={() => setOpen(false)} aria-label="Fermer le menu">
            <X />
          </button>
          <nav className="mt-12 flex flex-col gap-6 font-serif text-4xl">
            {[...nav, ['#rendez-vous', 'Prendre rendez-vous']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Home() {
  return (
    <>
      <Header />

      {/* Accueil */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden text-cream">
        <img src={img('hero', 1920)} alt="Salle de soin lumineuse de Souffle d'Oc" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <p className="rise text-xs uppercase tracking-[.35em] text-sand">Montpellier · Écusson</p>
          <h1 className="rise rise-2 mt-6 max-w-4xl font-serif text-6xl leading-[.95] sm:text-8xl">
            Revenir à soi, <em className="text-sand">en douceur.</em>
          </h1>
          <div className="rise rise-3 mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg font-light text-cream/85">
              Reiki, bains sonores, harmonisation des chakras et méditation : des soins énergétiques pour apaiser le corps et
              éclairer l’esprit.
            </p>
            <a href="#rendez-vous" className="w-fit rounded-full bg-clay px-9 py-4 text-sm uppercase tracking-[.2em] transition hover:bg-clay-dark">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[5fr_7fr] lg:items-center">
        <div className="relative">
          <img src={img('histoire', 800)} alt={site.practitioner} className="aspect-[3/4] w-full rounded-t-full object-cover" loading="lazy" />
          <p className="absolute -bottom-6 -right-2 rounded-full bg-sage-dark px-6 py-4 font-serif text-xl italic text-cream sm:-right-6">
            Depuis 2019
          </p>
        </div>
        <div>
          <Eyebrow>Mon histoire</Eyebrow>
          <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
            Je suis {site.practitioner.split(' ')[0]}, <em className="text-clay">praticienne en soins énergétiques.</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-ink/80">
            {story.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-12 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-serif text-2xl text-sage-dark">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="bg-sand/60 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Prestations</Eyebrow>
              <h2 className="max-w-xl font-serif text-5xl leading-tight sm:text-6xl">Des soins pensés comme une parenthèse.</h2>
            </div>
            <p className="max-w-sm font-light text-ink/75">
              Chaque séance est adaptée à votre état du jour. En cas de doute, la séance découverte vous permet de trouver la
              pratique qui vous convient.
            </p>
          </div>
          <div className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
            {services.map((s, i) => (
              <article key={s.id} className="group grid items-center gap-6 py-8 md:grid-cols-[4rem_1fr_14rem_8rem]">
                <span className="font-serif text-2xl italic text-clay">0{i + 1}</span>
                <div className="flex items-center gap-6">
                  <img src={img(s.image, 240)} alt="" className="hidden size-24 rounded-full object-cover transition duration-500 group-hover:scale-105 sm:block" loading="lazy" />
                  <div>
                    <h3 className="font-serif text-3xl">{s.name}</h3>
                    <p className="mt-2 max-w-xl font-light leading-relaxed text-ink/75">{s.description}</p>
                  </div>
                </div>
                <p className="text-sm uppercase tracking-[.2em] text-ink/60 md:text-right">{s.duration}</p>
                <p className="font-serif text-3xl md:text-right">{s.price} €</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="mx-auto max-w-7xl px-6 py-28">
        <Eyebrow>Photos</Eyebrow>
        <h2 className="font-serif text-5xl sm:text-6xl">Le lieu & l’atmosphère</h2>
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <figure
              key={g.image}
              className={`group relative overflow-hidden rounded-sm ${i === 0 ? 'col-span-2 row-span-2' : ''} ${i === 3 ? 'md:col-span-2' : ''}`}
            >
              <img src={img(g.image, i === 0 ? 1200 : 700)} alt={g.alt} className="size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 font-serif text-lg italic text-cream opacity-0 transition group-hover:opacity-100">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="grain relative overflow-hidden bg-sage-dark py-28 text-cream">
        <div className="relative mx-auto max-w-7xl px-6">
          <Eyebrow light>Tarifs & formules</Eyebrow>
          <h2 className="max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">Prendre soin de soi, à son rythme.</h2>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-t-[10rem] p-10 pt-16 text-center ${p.highlight ? 'bg-cream text-ink' : 'border border-cream/30'}`}
              >
                {p.highlight && <p className="mb-3 text-xs uppercase tracking-[.3em] text-clay">La plus choisie</p>}
                <h3 className="font-serif text-3xl italic">{p.name}</h3>
                <p className="mt-6 font-serif text-6xl">{p.price} €</p>
                <p className={`mt-2 text-sm uppercase tracking-[.2em] ${p.highlight ? 'text-ink/60' : 'text-cream/70'}`}>{p.detail}</p>
                <ul className={`mt-8 flex-1 space-y-3 font-light ${p.highlight ? 'text-ink/80' : 'text-cream/85'}`}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="#rendez-vous"
                  className={`mt-10 rounded-full px-6 py-3 text-sm uppercase tracking-[.2em] transition ${p.highlight ? 'bg-clay text-cream hover:bg-clay-dark' : 'border border-cream/60 hover:bg-cream hover:text-ink'}`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-cream/70">
            Règlement par carte, espèces ou chèque · Cartes cadeaux disponibles · Annulation gratuite jusqu’à 48 h avant
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name}>
              <p className="font-serif text-2xl italic leading-snug">« {t.text} »</p>
              <footer className="mt-4 text-xs uppercase tracking-[.25em] text-sage-dark">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Rendez-vous */}
      <section id="rendez-vous" className="bg-sand/60 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[2fr_3fr]">
          <div>
            <Eyebrow>Prise de rendez-vous</Eyebrow>
            <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
              Réservez <em className="text-clay">votre moment.</em>
            </h2>
            <p className="mt-6 font-light leading-relaxed text-ink/75">
              Indiquez la prestation et la date qui vous conviennent. Je reviens vers vous rapidement pour confirmer le créneau
              et répondre à vos questions.
            </p>
            <p className="mt-6 text-sm text-ink/60">
              Les soins énergétiques ne remplacent pas un avis ou un traitement médical.
            </p>
          </div>
          <div className="rounded-sm bg-cream p-8 shadow-[0_30px_80px_-40px_rgba(46,42,36,.35)] sm:p-12">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Accès & contact */}
      <footer id="contact" className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl italic">{site.name}</p>
            <p className="mt-3 font-light text-cream/70">{site.tagline}</p>
          </div>
          <ul className="space-y-4 font-light text-cream/85">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-sand" />
              <span>
                {site.address}
                <br />
                <span className="text-cream/60">{site.quarter}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 text-sand" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 text-sand" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[.25em] text-sand">
              <Clock className="size-4" /> Horaires
            </p>
            <dl className="space-y-2 font-light">
              {site.hours.map(([d, h]) => (
                <div key={d} className="flex justify-between gap-6 border-b border-cream/10 pb-2">
                  <dt className="text-cream/70">{d}</dt>
                  <dd>{h}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name} · {site.practitioner} · Montpellier
        </p>
      </footer>
    </>
  )
}
