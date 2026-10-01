import { useState } from 'react'
import { services } from '../data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')
  const today = new Date().toISOString().slice(0, 10)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    try {
      // Doit viser le squelette statique : l'URL "/" est interceptée par le rendu SSR
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-5xl italic text-clay">Merci</p>
        <p className="mt-4 text-lg text-ink/75">
          Votre demande est bien reçue. Je vous recontacte sous 24&nbsp;h pour confirmer votre rendez-vous.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-sm uppercase tracking-[.2em] text-sage-dark underline underline-offset-4">
          Faire une autre demande
        </button>
      </div>
    )
  }

  return (
    <form name="rendez-vous" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
      <input type="hidden" name="form-name" value="rendez-vous" />
      <p className="hidden">
        <label>
          Ne pas remplir : <input name="bot-field" />
        </label>
      </p>

      <label className="block">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Nom & prénom *</span>
        <input name="nom" required className="field" autoComplete="name" />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Téléphone *</span>
        <input name="telephone" type="tel" required className="field" autoComplete="tel" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">E-mail *</span>
        <input name="email" type="email" required className="field" autoComplete="email" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Prestation souhaitée *</span>
        <select name="prestation" required className="field" defaultValue="">
          <option value="" disabled>
            Choisir une prestation
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name} — {s.duration} — {s.price} €
            </option>
          ))}
          <option value="Séance découverte">Séance découverte — 45 min — 50 €</option>
          <option value="Cure Renaissance">Cure Renaissance — 5 séances — 270 €</option>
          <option value="Je ne sais pas encore">Je ne sais pas encore, j’aimerais être conseillé·e</option>
        </select>
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Date souhaitée *</span>
        <input name="date" type="date" min={today} required className="field" />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Moment de la journée</span>
        <select name="creneau" className="field" defaultValue="Indifférent">
          <option>Indifférent</option>
          <option>Matin (9h30 – 12h)</option>
          <option>Après-midi (13h30 – 17h)</option>
          <option>Fin de journée (17h – 19h)</option>
        </select>
      </label>
      <label className="flex items-center gap-3 sm:col-span-2">
        <input type="checkbox" name="premiere-visite" value="oui" className="size-4 accent-clay" />
        <span className="text-ink/80">C’est ma première séance chez Souffle d’Oc</span>
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-[.2em] text-ink/60">Votre message</span>
        <textarea name="message" rows={3} className="field resize-none" placeholder="Ce que vous traversez, vos attentes, vos questions…" />
      </label>

      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/60">Réponse sous 24 h — le rendez-vous est confirmé par téléphone ou e-mail.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-clay px-9 py-4 text-sm uppercase tracking-[.2em] text-cream transition hover:bg-clay-dark disabled:opacity-60"
        >
          {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-clay-dark sm:col-span-2">
          Un souci est survenu lors de l’envoi. Réessayez ou appelez-moi directement.
        </p>
      )}
    </form>
  )
}
