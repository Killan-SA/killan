# AGENTS.md

## Projet

Site vitrine one-page en français pour « Souffle d'Oc », cabinet de soins énergétiques / bien-être spirituel à Montpellier. Built with TanStack Start, déployé sur Netlify.

## Architecture

- `src/routes/__root.tsx` — document HTML (`lang="fr"`), meta SEO, polices Google (Cormorant Garamond + Jost).
- `src/routes/index.tsx` — la page unique : en-tête/menu mobile, accueil, histoire, prestations, galerie, tarifs, témoignages, rendez-vous, pied de page (accès/horaires). Les sections sont ancrées (`#histoire`, `#prestations`, `#galerie`, `#tarifs`, `#rendez-vous`, `#contact`).
- `src/components/BookingForm.tsx` — formulaire de demande de rendez-vous (Netlify Forms, envoi AJAX).
- `src/data/site.ts` — **tout le contenu éditorial** (textes, prestations, prix, formules, horaires, coordonnées) + helper `img()` pour les URL Image CDN.
- `public/__forms.html` — squelette statique du formulaire `rendez-vous` pour la détection par Netlify au build.
- `public/img/*.png` — photos sources ; toujours les référencer via `img(name, width)` (`/.netlify/images?...&fm=webp`).
- `src/styles.css` — thème Tailwind (`@theme` : couleurs cream/sand/clay/sage/ink, polices), classes `.field`, `.grain`, `.rise`.

## Conventions & décisions

- Contenu en français ; ne pas coder de textes en dur dans les composants quand ils relèvent du contenu métier — les ajouter à `src/data/site.ts`.
- Rendez-vous = **demande** (pas de réservation de créneaux en temps réel) : la praticienne confirme manuellement.
- Toute modification des champs du formulaire doit être répercutée dans `public/__forms.html`, et le `fetch` doit viser `/__forms.html` (et non `/`, intercepté par le SSR).
- Les coordonnées, le nom de la praticienne et les témoignages sont des exemples à remplacer par les vraies informations.
