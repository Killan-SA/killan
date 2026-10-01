// Tout le contenu éditorial du site est centralisé ici.

export const site = {
  name: "Souffle d'Oc",
  tagline: 'Soins énergétiques & bien-être spirituel à Montpellier',
  practitioner: 'Claire Valmont',
  address: '12 rue de l’Aiguillerie, 34000 Montpellier',
  quarter: 'Écusson — à deux pas de la place Jean-Jaurès',
  phone: '06 12 34 56 78',
  email: 'bonjour@souffledoc.fr',
  hours: [
    ['Mardi – Vendredi', '9h30 – 19h'],
    ['Samedi', '10h – 16h'],
    ['Dimanche & lundi', 'Fermé'],
  ],
}

export const story = [
  'Pendant quinze ans, j’ai travaillé dans l’agitation des services hospitaliers. J’y ai appris l’écoute, la présence, et combien le corps garde la mémoire de ce que l’on traverse.',
  'Un burn-out m’a conduite vers le reiki, puis vers les soins sonores et la méditation. Ce qui devait être une pause est devenu une vocation : je me suis formée pendant six ans, en France et au Népal, auprès de maîtres de reiki Usui et de praticiens des bols chantants.',
  'En 2019, j’ai ouvert Souffle d’Oc dans une vieille maison de pierre de l’Écusson. Un lieu simple et lumineux, pensé comme une parenthèse, où chacun peut déposer ses tensions et retrouver son propre rythme — sans dogme, avec bienveillance.',
]

export const values = [
  { title: 'Écoute', text: 'Chaque séance commence par un temps d’échange pour comprendre ce que vous vivez.' },
  { title: 'Douceur', text: 'Des pratiques non invasives, respectueuses de votre rythme et de vos limites.' },
  { title: 'Ancrage', text: 'Des outils simples à emporter chez vous pour prolonger les bienfaits.' },
]

export type Service = {
  id: string
  name: string
  duration: string
  price: number
  image: string
  description: string
}

export const services: Service[] = [
  {
    id: 'reiki',
    name: 'Soin Reiki',
    duration: '1h15',
    price: 65,
    image: 'soin',
    description:
      'Par l’imposition des mains, le reiki favorise une détente profonde, apaise le mental et aide l’énergie à circuler librement.',
  },
  {
    id: 'sonore',
    name: 'Bain sonore aux bols tibétains',
    duration: '1h',
    price: 60,
    image: 'bols',
    description:
      'Allongé·e, vous êtes enveloppé·e par les vibrations des bols chantants et des gongs. Un voyage sonore qui relâche les tensions.',
  },
  {
    id: 'harmonisation',
    name: 'Harmonisation des chakras',
    duration: '1h30',
    price: 80,
    image: 'details',
    description:
      'Un soin complet associant reiki, pierres et huiles essentielles pour rééquilibrer vos centres énergétiques.',
  },
  {
    id: 'meditation',
    name: 'Méditation guidée en groupe',
    duration: '1h30',
    price: 25,
    image: 'meditation',
    description:
      'Chaque jeudi soir, en petit groupe de 8 personnes maximum : respiration, visualisation et temps de partage.',
  },
  {
    id: 'accompagnement',
    name: 'Accompagnement spirituel',
    duration: '1h',
    price: 70,
    image: 'nature',
    description:
      'Un espace de parole et de guidance pour traverser une transition de vie, retrouver du sens et clarifier vos intentions.',
  },
]

export const packages = [
  {
    name: 'Découverte',
    price: 50,
    detail: 'Première séance',
    features: ['Échange préalable de 15 min', 'Soin reiki ou bain sonore (45 min)', 'Conseils personnalisés'],
    highlight: false,
  },
  {
    name: 'Cure Renaissance',
    price: 270,
    detail: '5 séances au choix',
    features: ['Reiki, sonore ou harmonisation', 'Suivi entre les séances', 'Valable 6 mois', 'Soit 1 séance offerte'],
    highlight: true,
  },
  {
    name: 'Cercle mensuel',
    price: 80,
    detail: '4 méditations / mois',
    features: ['Méditation du jeudi soir', 'Enregistrements audio', 'Sans engagement'],
    highlight: false,
  },
]

export const gallery = [
  { image: 'hero', alt: 'La salle de soin baignée de lumière' },
  { image: 'bols', alt: 'Bols chantants et cristaux' },
  { image: 'meditation', alt: 'Cercle de méditation' },
  { image: 'details', alt: 'Huiles essentielles et pierres' },
  { image: 'soin', alt: 'Séance de reiki' },
  { image: 'nature', alt: 'La garrigue montpelliéraine' },
]

export const testimonials = [
  { name: 'Sophie, 38 ans', text: 'Je suis ressortie légère, comme après des vacances. Claire a une présence rare, douce et rassurante.' },
  { name: 'Marc, 52 ans', text: 'Sceptique au départ, le bain sonore m’a offert le sommeil le plus profond depuis des mois.' },
  { name: 'Inès, 29 ans', text: 'L’accompagnement m’a aidée à traverser une période difficile avec beaucoup plus de clarté.' },
]

export const img = (name: string, w: number) => `/.netlify/images?url=/img/${name}.png&w=${w}&fm=webp`
