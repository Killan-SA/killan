import { createFileRoute } from '@tanstack/react-router'
import BookingForm from '../components/BookingForm'
import { site, steps } from '../data/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto grid max-w-[1040px] items-start gap-10 px-5 py-[clamp(1.5rem,5vw,4rem)] md:grid-cols-[1fr_1.05fr]">
      <section>
        <h1 className="mb-5 font-display text-[clamp(2.6rem,7vw,4.4rem)] font-semibold leading-[1.02] tracking-tight">
          Des{' '}
          <span className="inline-block -rotate-2 rounded-[.3em] bg-butter px-[.25em]">papouilles</span> sur
          rendez-vous.
        </h1>
        <p className="mb-4 max-w-[34ch] text-muted">{site.intro}</p>
        <ul className="mt-6 grid gap-2">
          {steps.map((s) => (
            <li key={s} className="relative pl-6">
              <span className="absolute left-0 top-[.6em] size-[.7rem] rounded-full bg-pink" />
              {s}
            </li>
          ))}
        </ul>
      </section>
      <section id="rendez-vous">
        <BookingForm />
      </section>
    </main>
  )
}
