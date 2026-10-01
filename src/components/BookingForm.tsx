import { useState } from 'react'
import { defaultDuration, defaultType, durations, papouilleTypes } from '../data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const label = 'block text-[.95rem] font-bold'
const optional = 'font-normal text-muted'

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [prenom, setPrenom] = useState('')
  // Pas de date dans le passé (fuseau horaire local)
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  const today = now.toISOString().slice(0, 10)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    setPrenom(String(formData.get('prenom') ?? ''))
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
      <div className="card" role="status">
        <h2 className="mb-3 font-display text-2xl font-semibold">Demande envoyée !</h2>
        <p className="text-muted">
          Merci <strong className="text-ink">{prenom}</strong>. Je regarde ça et je te réponds par mail très vite.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-6 font-bold text-berry underline underline-offset-4">
          Faire une autre demande
        </button>
      </div>
    )
  }

  return (
    <form
      name="rendez-vous"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card"
    >
      <input type="hidden" name="form-name" value="rendez-vous" />
      <p className="hidden">
        <label>
          Ne pas remplir : <input name="bot-field" />
        </label>
      </p>

      <h2 className="mb-5 font-display text-2xl font-semibold">Réserver un moment</h2>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className={`${label} mb-4`}>
          Prénom
          <input name="prenom" required className="field" autoComplete="given-name" />
        </label>
        <label className={`${label} mb-4`}>
          Email
          <input name="email" type="email" required className="field" autoComplete="email" />
        </label>
      </div>

      <label className={`${label} mb-4`}>
        Téléphone <small className={optional}>(facultatif)</small>
        <input name="telephone" type="tel" className="field" autoComplete="tel" />
      </label>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className={`${label} mb-4`}>
          Date souhaitée
          <input name="date" type="date" min={today} required className="field" />
        </label>
        <label className={`${label} mb-4`}>
          Heure souhaitée
          <input name="heure" type="time" required className="field" />
        </label>
      </div>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className={`${label} mb-4`}>
          Durée
          <select name="duree" className="field" defaultValue={defaultDuration}>
            {durations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
        <label className={`${label} mb-4`}>
          Type de papouilles
          <select name="type" className="field" defaultValue={defaultType}>
            {papouilleTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={`${label} mb-4`}>
        Un petit mot <small className={optional}>(facultatif)</small>
        <textarea name="message" rows={3} className="field resize-y" />
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn">
        {status === 'sending' ? 'Envoi en cours…' : 'Demander ce rendez-vous'}
      </button>
      {status === 'error' && (
        <p role="alert" className="mt-3 font-bold text-berry">
          L’envoi a échoué. Vérifie ta connexion et réessaie.
        </p>
      )}
      <p className="mt-4 text-sm text-muted">Ta demande n’est confirmée qu’après ma réponse par mail.</p>
    </form>
  )
}
