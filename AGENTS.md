# AGENTS.md

## Projet

Site one-page en français pour prendre des rendez-vous « papouilles ». Built with TanStack Start, déployé sur Netlify.

## Architecture

- `src/routes/__root.tsx` — document HTML (`lang="fr"`), meta SEO, polices Google (Fredoka + Nunito).
- `src/routes/index.tsx` — la page unique : titre, étapes et formulaire.
- `src/components/BookingForm.tsx` — formulaire de demande de rendez-vous (Netlify Forms, envoi AJAX).
- `src/data/site.ts` — **tout le contenu éditorial** (textes, étapes, durées, types de papouilles).
- `public/__forms.html` — squelette statique du formulaire `rendez-vous` pour la détection par Netlify au build.
- `src/styles.css` — thème Tailwind (`@theme` : couleurs lilac/ink/pink/berry/butter, polices), classes `.field`, `.card`, `.btn`.

## Conventions & décisions

- Contenu en français ; ne pas coder de textes en dur dans les composants quand ils relèvent du contenu métier — les ajouter à `src/data/site.ts`.
- Rendez-vous = **demande** (date et heure libres proposées par le visiteur, pas de créneaux en temps réel) : confirmation manuelle par mail.
- Toute modification des champs du formulaire doit être répercutée dans `public/__forms.html`, et le `fetch` doit viser `/__forms.html` (et non `/`, intercepté par le SSR).
