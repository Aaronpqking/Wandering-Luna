import { imageAlt } from './image-alt';
import type { Locale } from './routes';
export type { Locale } from './routes';

export type LocationInfo = {
  slug: string;
  name: string;
  blurb: string;
};

export type PracticeCategory = {
  slug: string;
  label: string;
  sublabel: string;
  image: string;
  alt: string;
};

export type SiteContent = {
  languageName: string;
  navigation: {
    schedule: string;
    gatherings: string;
    retreats: string;
    locations: string;
    about: string;
    contact: string;
    book: string;
    menu: string;
    close: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSupport: string;
    heroDetail: string;
    heroCta: string;
    heroCtaSecondary: string;
    heroScroll: string;
    practiceEyebrow: string;
    practiceTitle: string;
    practiceIntro: string;
    scheduleEyebrow: string;
    scheduleTitle: string;
    scheduleIntro: string;
    schedulePlaceholder: string;
    scheduleCta: string;
    locationsEyebrow: string;
    locationsTitle: string;
    locationsIntro: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutBody: string;
    aboutCta: string;
    gatheringsEyebrow: string;
    gatheringsTitle: string;
    gatheringsBody: string;
    gatheringsCta: string;
    retreatsEyebrow: string;
    retreatsTitle: string;
    retreatsBody: string;
    retreatsCta: string;
    socialEyebrow: string;
    socialTitle: string;
    socialBody: string;
    socialPostTitle: string;
    socialPostLink: string;
    socialCta: string;
    finalEyebrow: string;
    finalTitle: string;
    finalBody: string;
    finalCta: string;
    finalCtaSecondary: string;
    athNote: string;
  };
  locations: LocationInfo[];
  practices: PracticeCategory[];
  footer: {
    note: string;
    links: string;
    follow: string;
    rights: string;
  };
};

export const en: SiteContent = {
  languageName: 'English',
  navigation: {
    schedule: 'Schedule', gatherings: 'Gatherings', retreats: 'Retreats', locations: 'Locations', about: 'About', contact: 'Contact', book: 'Book a class', menu: 'Open menu', close: 'Close menu',
  },
  home: {
    heroEyebrow: 'Wandering Luna',
    heroTitle: 'Yoga, ritual & connection in Puerto Rico',
    heroSupport: 'Move, breathe and gather in spaces shaped by ocean, earth and community.',
    heroDetail: 'Weekly yoga, intentional gatherings and restorative experiences across Puerto Rico\u2019s eastern coast.',
    heroCta: 'View the Schedule',
    heroCtaSecondary: 'Explore Gatherings',
    heroScroll: 'Scroll to explore',
    practiceEyebrow: 'What we practice',
    practiceTitle: 'Three ways to come back to your body.',
    practiceIntro: 'Each offering is shaped by place and season \u2014 a way to move, gather and rest along Puerto Rico\u2019s eastern coast.',
    scheduleEyebrow: 'Find your next practice',
    scheduleTitle: 'Weekly classes, one simple place to book.',
    scheduleIntro: 'Browse upcoming sessions and reserve your spot. Booking and availability are managed through Acuity Scheduling.',
    schedulePlaceholder: 'The live scheduler will appear here once connected to Acuity.',
    scheduleCta: 'View full schedule',
    locationsEyebrow: 'Practice across the coast',
    locationsTitle: 'Four places to land.',
    locationsIntro: 'Classes and gatherings happen across the eastern shore of Puerto Rico. Each location has its own rhythm.',
    aboutEyebrow: 'Meet Nicole',
    aboutTitle: 'The person behind the practice.',
    aboutBody: 'Wandering Luna creates space for movement, presence and connection through yoga, intentional gatherings and experiences rooted in the landscapes and communities of Puerto Rico.',
    aboutCta: 'Read more',
    gatheringsEyebrow: 'Beyond the mat',
    gatheringsTitle: 'Moon circles, ritual and community.',
    gatheringsBody: 'Moon circles, shared rituals and intimate gatherings create space to slow down, connect and experience practice beyond the traditional class. No experience needed \u2014 just a willingness to be present.',
    gatheringsCta: 'Explore gatherings',
    retreatsEyebrow: 'Retreats',
    retreatsTitle: 'Step away. Come closer.',
    retreatsBody: 'Restorative experiences designed around presence, landscape and community. A chance to step out of daily rhythm and return to something quieter.',
    retreatsCta: 'Learn more',
    socialEyebrow: 'Stay close',
    socialTitle: 'Follow the journey.',
    socialBody: 'Moments of practice, place and community. Stay close to Wandering Luna on Instagram.',
    socialPostTitle: 'A moment from Wandering Luna on Instagram',
    socialPostLink: 'View this post on Instagram',
    socialCta: 'Follow on Instagram',
    finalEyebrow: 'Find your practice',
    finalTitle: 'Weekly yoga, gatherings and experiences across Eastern Puerto Rico.',
    finalBody: 'Browse the schedule, reserve a spot and come as you are.',
    finalCta: 'View Schedule',
    finalCtaSecondary: 'Contact Nicole',
    athNote: 'ATH M\u00f3vil accepted for select classes and gatherings.',
  },
  // BUSINESS_FACT_REQUIRED: exact venues, access, environment and operating details.
  locations: [
    { slug: 'luquillo', name: 'Luquillo', blurb: 'Yoga and gatherings in Luquillo on the eastern coast of Puerto Rico.' },
    { slug: 'palmas-del-mar', name: 'Palmas del Mar', blurb: 'Yoga and gatherings in Palmas del Mar, Humacao.' },
    { slug: 'rio-grande', name: 'R\u00edo Grande', blurb: 'Yoga and gatherings in Río Grande, Puerto Rico.' },
    { slug: 'naguabo', name: 'Naguabo', blurb: 'Yoga and gatherings in Naguabo on the eastern coast of Puerto Rico.' },
  ],
  practices: [
    { slug: 'schedule', label: 'Weekly Yoga', sublabel: 'Move. Breathe. Return.', image: '/photos/practice-yoga.webp', alt: imageAlt['practice-yoga'].en },
    { slug: 'gatherings', label: 'Gatherings', sublabel: 'Moon circles, ritual and community.', image: '/photos/practice-gatherings.webp', alt: imageAlt['practice-gatherings'].en },
    { slug: 'retreats', label: 'Retreats', sublabel: 'Space to step away and reconnect.', image: '/photos/practice-retreats.webp', alt: imageAlt['practice-retreats'].en },
  ],
  footer: { note: 'Yoga, ritual and connection across Eastern Puerto Rico.', links: 'Explore', follow: 'Stay close', rights: '\u00a9 Wandering Luna. Made with intention.' },
};

export const es: SiteContent = {
  languageName: 'Espa\u00f1ol',
  navigation: {
    schedule: 'Horario', gatherings: 'Encuentros', retreats: 'Retiros', locations: 'Lugares', about: 'Sobre Nicole', contact: 'Contacto', book: 'Reserva una clase', menu: 'Abrir men\u00fa', close: 'Cerrar men\u00fa',
  },
  home: {
    heroEyebrow: 'Wandering Luna',
    heroTitle: 'Yoga, ritual y conexi\u00f3n en Puerto Rico',
    heroSupport: 'Mu\u00e9vete, respira y comparte en espacios inspirados por el mar, la tierra y la comunidad.',
    heroDetail: 'Yoga semanal, encuentros con intenci\u00f3n y experiencias restaurativas en la costa este de Puerto Rico.',
    heroCta: 'Ver el horario',
    heroCtaSecondary: 'Explorar encuentros',
    heroScroll: 'Desliza para explorar',
    practiceEyebrow: 'Lo que practicamos',
    practiceTitle: 'Tres formas de volver a tu cuerpo.',
    practiceIntro: 'Cada experiencia se inspira en el lugar y la temporada \u2014 una forma de moverte, encontrarte y descansar en la costa este de Puerto Rico.',
    scheduleEyebrow: 'Encuentra tu pr\u00f3xima pr\u00e1ctica',
    scheduleTitle: 'Clases semanales, un solo lugar para reservar.',
    scheduleIntro: 'Explora las sesiones pr\u00f3ximas y reserva tu espacio. La reserva y la disponibilidad se gestionan a trav\u00e9s de Acuity Scheduling.',
    schedulePlaceholder: 'El calendario en vivo aparecer\u00e1 aqu\u00ed cuando se conecte con Acuity.',
    scheduleCta: 'Ver horario completo',
    locationsEyebrow: 'Practica por la costa',
    locationsTitle: 'Cuatro lugares para llegar.',
    locationsIntro: 'Las clases y los encuentros se dan por la costa este de Puerto Rico. Cada lugar tiene su propio ritmo.',
    aboutEyebrow: 'Conoce a Nicole',
    aboutTitle: 'La persona detr\u00e1s de la pr\u00e1ctica.',
    aboutBody: 'Wandering Luna crea espacio para el movimiento, la presencia y la conexi\u00f3n a trav\u00e9s del yoga, encuentros con intenci\u00f3n y experiencias arraigadas en los paisajes y las comunidades de Puerto Rico.',
    aboutCta: 'Leer m\u00e1s',
    gatheringsEyebrow: 'M\u00e1s all\u00e1 del mat',
    gatheringsTitle: 'C\u00edrculos de luna, ritual y comunidad.',
    gatheringsBody: 'C\u00edrculos de luna, rituales compartidos y encuentros \u00edntimos crean espacio para pausar, conectar y vivir la pr\u00e1ctica m\u00e1s all\u00e1 de la clase tradicional. No necesitas experiencia \u2014 solo ganas de estar presente.',
    gatheringsCta: 'Explorar encuentros',
    retreatsEyebrow: 'Retiros',
    retreatsTitle: 'Al\u00e9jate. Ac\u00e9rcate.',
    retreatsBody: 'Experiencias restaurativas dise\u00f1adas alrededor de la presencia, el paisaje y la comunidad. Una oportunidad para salir del ritmo diario y volver a algo m\u00e1s tranquilo.',
    retreatsCta: 'Saber m\u00e1s',
    socialEyebrow: 'Mantente cerca',
    socialTitle: 'Sigue el camino.',
    socialBody: 'Momentos de práctica, lugares y comunidad. Sigue de cerca a Wandering Luna en Instagram.',
    socialPostTitle: 'Un momento de Wandering Luna en Instagram',
    socialPostLink: 'Ver esta publicación en Instagram',
    socialCta: 'Seguir en Instagram',
    finalEyebrow: 'Encuentra tu pr\u00e1ctica',
    finalTitle: 'Yoga semanal, encuentros y experiencias en el este de Puerto Rico.',
    finalBody: 'Explora el horario, reserva tu espacio y ven como eres.',
    finalCta: 'Ver horario',
    finalCtaSecondary: 'Contactar a Nicole',
    athNote: 'ATH M\u00f3vil disponible para clases y encuentros seleccionados.',
  },
  // BUSINESS_FACT_REQUIRED: exact venues, access, environment and operating details.
  locations: [
    { slug: 'luquillo', name: 'Luquillo', blurb: 'Yoga y encuentros en Luquillo, en la costa este de Puerto Rico.' },
    { slug: 'palmas-del-mar', name: 'Palmas del Mar', blurb: 'Yoga y encuentros en Palmas del Mar, Humacao.' },
    { slug: 'rio-grande', name: 'R\u00edo Grande', blurb: 'Yoga y encuentros en Río Grande, Puerto Rico.' },
    { slug: 'naguabo', name: 'Naguabo', blurb: 'Yoga y encuentros en Naguabo, en la costa este de Puerto Rico.' },
  ],
  practices: [
    { slug: 'schedule', label: 'Yoga semanal', sublabel: 'Mu\u00e9vete. Respira. Regresa.', image: '/photos/practice-yoga.webp', alt: imageAlt['practice-yoga'].es },
    { slug: 'gatherings', label: 'Encuentros', sublabel: 'C\u00edrculos de luna, ritual y comunidad.', image: '/photos/practice-gatherings.webp', alt: imageAlt['practice-gatherings'].es },
    { slug: 'retreats', label: 'Retiros', sublabel: 'Espacio para alejarte y reconectar.', image: '/photos/practice-retreats.webp', alt: imageAlt['practice-retreats'].es },
  ],
  footer: { note: 'Yoga, ritual y conexi\u00f3n en el este de Puerto Rico.', links: 'Explora', follow: 'Mantente cerca', rights: '\u00a9 Wandering Luna. Hecho con intenci\u00f3n.' },
};

export const contentByLocale: Record<Locale, SiteContent> = { en, es };
