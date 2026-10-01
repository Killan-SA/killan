# Souffle d'Oc — site vitrine

Site vitrine d'une praticienne en soins énergétiques et bien-être spirituel à Montpellier. Le site présente, sur une seule page : l'histoire de la praticienne, les prestations (reiki, bain sonore, harmonisation des chakras, méditation, accompagnement spirituel), une galerie photo, les tarifs et formules, des témoignages, un formulaire de demande de rendez-vous, ainsi que l'accès et les horaires.

## Technologies

- TanStack Start (React 19, Vite 7) et Tailwind CSS 4
- Netlify Forms pour les demandes de rendez-vous (consultables dans l'interface Netlify, avec notifications e-mail possibles)
- Netlify Image CDN pour servir les photos redimensionnées en WebP
- Photos d'ambiance générées pour le site (`public/img/`)

## Lancer en local

```bash
pnpm install
netlify dev
```

`netlify dev` permet d'émuler Netlify Forms et le CDN d'images en local.

## Modifier le contenu

Les textes, prestations, tarifs, horaires et coordonnées se trouvent dans `src/data/site.ts`. Pour remplacer une photo, déposez un fichier du même nom dans `public/img/`.

## Recevoir les demandes par e-mail

Dans Netlify : **Project configuration → Notifications → Emails and webhooks → Form submission notifications**, ajoutez une notification pour le formulaire `rendez-vous`.
