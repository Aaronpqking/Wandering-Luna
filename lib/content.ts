export type Locale = 'en' | 'es';

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
    socialHandle: string;
    socialCta: string;
    finalEyebrow: string;
    finalTitle: string;
    finalBody: string;
    finalCta: string;
    finalCtaSecondary: string;
    comingSoon: string;
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
  pages: Record<string, { eyebrow: string; title: string; body: string }>;
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
    socialBody: 'Glimpses of practice, place and community shared on Instagram. No feed to scroll here \u2014 just an open door.',
    socialHandle: '@wanderingluna',
    socialCta: 'Follow on Instagram',
    finalEyebrow: 'Find your practice',
    finalTitle: 'Weekly yoga, gatherings and experiences across Eastern Puerto Rico.',
    finalBody: 'Browse the schedule, reserve a spot and come as you are.',
    finalCta: 'View Schedule',
    finalCtaSecondary: 'Contact Nicole',
    comingSoon: 'This page is ready for the next layer of confirmed details.',
    athNote: 'ATH M\u00f3vil accepted for select classes and gatherings.',
  },
  locations: [
    { slug: 'luquillo', name: 'Luquillo', blurb: 'Beachside town near El Yunque. Classes with the sound of waves nearby.' },
    { slug: 'palmas-del-mar', name: 'Palmas del Mar', blurb: 'Resort community in Humacao with marina views and open-air spaces.' },
    { slug: 'rio-grande', name: 'R\u00edo Grande', blurb: 'Foothills of the rainforest. A quieter, greener place to practice.' },
    { slug: 'naguabo', name: 'Naguabo', blurb: 'Small coastal town with a slow pace and waterfront gathering space.' },
  ],
  practices: [
    { slug: 'schedule', label: 'Weekly Yoga', sublabel: 'Move. Breathe. Return.', image: '/practice-yoga.webp', alt: 'A woman in low lunge pose on a wooden deck overlooking the ocean at golden hour' },
    { slug: 'gatherings', label: 'Gatherings', sublabel: 'Moon circles, ritual and community.', image: '/practice-gatherings.webp', alt: 'A large brass gong resting on the sand at the beach at golden hour' },
    { slug: 'retreats', label: 'Retreats', sublabel: 'Space to step away and reconnect.', image: '/practice-retreats.webp', alt: 'An earthen retreat room with natural clay walls overlooking tropical greenery' },
  ],
  footer: { note: 'Yoga, ritual and connection across Eastern Puerto Rico.', links: 'Explore', follow: 'Stay close', rights: '\u00a9 Wandering Luna. Made with intention.' },
  pages: {
    schedule: { eyebrow: 'Practice', title: 'Find your next practice.', body: 'Weekly yoga for different bodies, days and ways of moving. The live schedule and booking details will be connected to Acuity here.' },
    gatherings: { eyebrow: 'Ritual', title: 'Make space to gather.', body: 'Moon circles, sound and intimate gatherings that invite us to slow down, listen and connect beyond the traditional class.' },
    retreats: { eyebrow: 'Place', title: 'Step away. Come closer.', body: 'Restorative experiences designed around presence, landscape and community. Retreat details will be added as they are confirmed.' },
    locations: { eyebrow: 'The coast', title: 'Practice across Eastern Puerto Rico.', body: 'Find your way to practices in Luquillo, Palmas del Mar, R\u00edo Grande and Naguabo.' },
    about: { eyebrow: 'The person behind the practice', title: 'Meet Nicole.', body: 'Wandering Luna creates space for movement, presence and connection through yoga, intentional gatherings and experiences rooted in Puerto Rico.' },
    contact: { eyebrow: 'Let\u2019s connect', title: 'Bring the practice to your place.', body: 'For private sessions, collaborations and retreat inquiries, a direct contact path will live here.' },
    location: { eyebrow: 'A place to practice', title: 'Practice by the coast.', body: 'Venue details, access notes and nearby guidance will be added once confirmed.' },
    event: { eyebrow: 'Gathering', title: 'A moment to gather.', body: 'Event details, what to bring and booking will be added here when this experience is ready to share.' },
    retreat: { eyebrow: 'Retreat', title: 'A little more room to breathe.', body: 'Retreat details, dates and booking will be added here when confirmed.' },
  },
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
    practiceIntro: 'Cada offering se inspira en el lugar y la temporada \u2014 una forma de moverte, encontrarte y descansar en la costa este de Puerto Rico.',
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
    socialBody: 'Destellos de pr\u00e1ctica, lugar y comunidad compartidos en Instagram. No hay feed aqu\u00ed \u2014 solo una puerta abierta.',
    socialHandle: '@wanderingluna',
    socialCta: 'Seguir en Instagram',
    finalEyebrow: 'Encuentra tu pr\u00e1ctica',
    finalTitle: 'Yoga semanal, encuentros y experiencias en el este de Puerto Rico.',
    finalBody: 'Explora el horario, reserva tu espacio y ven como eres.',
    finalCta: 'Ver horario',
    finalCtaSecondary: 'Contactar a Nicole',
    comingSoon: 'Esta p\u00e1gina est\u00e1 lista para recibir los detalles confirmados.',
    athNote: 'ATH M\u00f3vil disponible para clases y encuentros seleccionados.',
  },
  locations: [
    { slug: 'luquillo', name: 'Luquillo', blurb: 'Pueblo playero cerca de El Yunque. Clases con el sonido del mar cerca.' },
    { slug: 'palmas-del-mar', name: 'Palmas del Mar', blurb: 'Comunidad de Humacao con vista a la marina y espacios al aire libre.' },
    { slug: 'rio-grande', name: 'R\u00edo Grande', blurb: 'Al pie del bosque lluvioso. Un lugar m\u00e1s verde y tranquilo para practicar.' },
    { slug: 'naguabo', name: 'Naguabo', blurb: 'Pueblo costero con ritmo pausado y espacio de encuentro frente al mar.' },
  ],
  practices: [
    { slug: 'schedule', label: 'Yoga semanal', sublabel: 'Mu\u00e9vete. Respira. Regresa.', image: '/practice-yoga.webp', alt: 'Una mujer en posici\u00f3n de lunge bajo sobre una plataforma de madera frente al mar al atardecer' },
    { slug: 'gatherings', label: 'Encuentros', sublabel: 'C\u00edrculos de luna, ritual y comunidad.', image: '/practice-gatherings.webp', alt: 'Un gran gong de bronce sobre la arena de la playa al atardecer' },
    { slug: 'retreats', label: 'Retiros', sublabel: 'Espacio para alejarte y reconectar.', image: '/practice-retreats.webp', alt: 'Una habitaci\u00f3n de retiro de tierra con vista a la vegetaci\u00f3n tropical' },
  ],
  footer: { note: 'Yoga, ritual y conexi\u00f3n en el este de Puerto Rico.', links: 'Explora', follow: 'Mantente cerca', rights: '\u00a9 Wandering Luna. Hecho con intenci\u00f3n.' },
  pages: {
    schedule: { eyebrow: 'Pr\u00e1ctica', title: 'Encuentra tu pr\u00f3xima pr\u00e1ctica.', body: 'Yoga semanal para distintos cuerpos, d\u00edas y formas de moverte. El horario y la reserva en vivo se conectar\u00e1n con Acuity aqu\u00ed.' },
    gatherings: { eyebrow: 'Ritual', title: 'Crea espacio para encontrarnos.', body: 'C\u00edrculos de luna, sonido y encuentros \u00edntimos que invitan a pausar, escuchar y conectar m\u00e1s all\u00e1 de la clase tradicional.' },
    retreats: { eyebrow: 'Lugar', title: 'Al\u00e9jate. Ac\u00e9rcate.', body: 'Experiencias restaurativas alrededor de la presencia, el paisaje y la comunidad. Los detalles se a\u00f1adir\u00e1n cuando est\u00e9n confirmados.' },
    locations: { eyebrow: 'La costa', title: 'Practica en el este de Puerto Rico.', body: 'Encuentra pr\u00e1cticas en Luquillo, Palmas del Mar, R\u00edo Grande y Naguabo.' },
    about: { eyebrow: 'La persona detr\u00e1s de la pr\u00e1ctica', title: 'Conoce a Nicole.', body: 'Wandering Luna crea espacio para el movimiento, la presencia y la conexi\u00f3n a trav\u00e9s del yoga, encuentros con intenci\u00f3n y experiencias arraigadas en Puerto Rico.' },
    contact: { eyebrow: 'Conectemos', title: 'Lleva la pr\u00e1ctica a tu espacio.', body: 'Para sesiones privadas, colaboraciones y retiros, aqu\u00ed encontrar\u00e1s una v\u00eda directa de contacto.' },
    location: { eyebrow: 'Un lugar para practicar', title: 'Practica cerca del mar.', body: 'Los detalles del espacio, acceso y recomendaciones cercanas se a\u00f1adir\u00e1n cuando est\u00e9n confirmados.' },
    event: { eyebrow: 'Encuentro', title: 'Un momento para encontrarnos.', body: 'Los detalles del evento, qu\u00e9 traer y la reserva se a\u00f1adir\u00e1n cuando esta experiencia est\u00e9 lista para compartir.' },
    retreat: { eyebrow: 'Retiro', title: 'Un poco m\u00e1s de espacio para respirar.', body: 'Los detalles, fechas y reservas del retiro se a\u00f1adir\u00e1n cuando est\u00e9n confirmados.' },
  },
};

export const contentByLocale: Record<Locale, SiteContent> = { en, es };

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es';
}

export const routePairs: Record<string, string> = {
  '': '', schedule: 'horario', horario: 'schedule', gatherings: 'encuentros', encuentros: 'gatherings', retreats: 'retiros', retiros: 'retreats', about: 'acerca', acerca: 'about', contact: 'contacto', contacto: 'contact', locations: 'lugares', lugares: 'locations',
};

export function localizedPath(locale: Locale, path = ''): string {
  const segments = path.split('/').filter(Boolean);
  const mapped = segments.map((segment) => {
    if (locale === 'es') return routePairs[segment] ?? segment;
    return segment;
  });
  return `/${locale}${mapped.length ? `/${mapped.join('/')}` : ''}`;
}

export function alternatePath(locale: Locale, path = ''): string {
  const nextLocale: Locale = locale === 'en' ? 'es' : 'en';
  const segments = path.split('/').filter(Boolean);
  const nextSegments = segments.map((segment) => routePairs[segment] ?? segment);
  return localizedPath(nextLocale, nextSegments.join('/'));
}
