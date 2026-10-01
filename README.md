# Papouilles — prise de rendez-vous

Site d'une page pour demander un rendez-vous papouilles : le visiteur propose une date et une heure, le propriétaire valide par mail.

## Technologies

- TanStack Start (React 19, Vite 7) et Tailwind CSS 4
- Netlify Forms pour les demandes de rendez-vous (consultables dans l'interface Netlify, avec notifications e-mail)

## Lancer en local

```
pnpm install
netlify dev
```

`netlify dev` permet d'émuler Netlify Forms en local.

## Modifier le contenu

Textes, durées et types de papouilles : `src/data/site.ts`.

## Recevoir les demandes par e-mail

Dans Netlify : **Project configuration → Notifications → Emails and webhooks → Form submission notifications**, ajoutez une notification pour le formulaire `rendez-vous`.
