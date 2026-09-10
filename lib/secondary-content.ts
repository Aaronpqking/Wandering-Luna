import type { Locale, LocationSlug } from './routes';

export type PageSEO = { title: string; description: string };
export type EditorialCopy = { title: string; body: string };
export type PageIntro = { eyebrow: string; title: string; intro: string; seo: PageSEO };
export type VenueDetails = Partial<Record<'venue' | 'address' | 'directions' | 'parking' | 'whatToBring' | 'weatherNotes', string>>;
export type LocationContent = PageIntro & { name: string; summary: string; practice: EditorialCopy; details?: VenueDetails };
export type SecondaryContent = {
  schedule: PageIntro & { introduction: EditorialCopy; booking: EditorialCopy; stepsTitle: string; stepsIntro: string; steps: readonly EditorialCopy[] };
  locations: PageIntro & { sectionTitle: string; sectionIntro: string };
  places: Record<LocationSlug, LocationContent>;
  shared: {
    viewSchedule: string; exploreLocation: string; exploreLocations: string; allLocations: string;
    locationShortcuts: string; relatedLocations: string; instagram: string; bookingStatus: string;
    expectations: EditorialCopy; cta: EditorialCopy; photoCaption: string;
    detailLabels: Record<keyof VenueDetails, string>;
  };
};

// BUSINESS_FACT_REQUIRED: confirm venues, addresses, directions, parking, what to
// bring and weather notes before populating optional details. Omitted data is not rendered.
// Existing business material names these four areas; no photograph is attributed
// to a specific venue or town without confirmation.
export const secondaryContent: Record<Locale, SecondaryContent> = {
  en: {
    schedule: {
      eyebrow: 'Yoga · Eastern Puerto Rico', title: 'Find your next practice.',
      intro: 'Make room for movement, breath and a little time for yourself.',
      seo: { title: 'Yoga Schedule in Eastern Puerto Rico | Wandering Luna', description: 'Explore weekly yoga with Wandering Luna in Eastern Puerto Rico. Find practice areas and learn how online reservations will work when booking opens.' },
      introduction: { title: 'A practice to return to.', body: 'Wandering Luna offers weekly yoga across Eastern Puerto Rico. Explore the areas below as you consider your next practice. Confirmed dates, times and meeting places will be shared with each offering.' },
      booking: { title: 'Online reservations are on the way.', body: 'Booking will be handled through Acuity. Reservations are not open on this site yet. Visit Wandering Luna on Instagram for updates and questions about upcoming practices.' },
      stepsTitle: 'When online booking opens', stepsIntro: 'A simple path from choosing a practice to making time for it.',
      steps: [
        { title: 'Choose your offering', body: 'Review the published date, location and offering details before choosing a practice.' },
        { title: 'Reserve online', body: 'Complete your reservation through Acuity once online booking is available.' },
        { title: 'Receive confirmation', body: 'Look for your booking confirmation and the details for your chosen practice.' },
      ],
    },
    locations: {
      eyebrow: 'Our practice areas', title: 'Practice across Eastern Puerto Rico.',
      intro: 'Four places to explore, with movement and connection at the center.',
      seo: { title: 'Yoga Locations in Eastern Puerto Rico | Wandering Luna', description: 'Explore Wandering Luna practice areas in Luquillo, Palmas del Mar, Río Grande and Naguabo. Discover each area and find your way to the schedule.' },
      sectionTitle: 'Find your place to practice.', sectionIntro: 'These areas are part of Wandering Luna’s practice community. The exact meeting place will be confirmed with each offering.',
    },
    places: {
      luquillo: {
        name: 'Luquillo', eyebrow: 'Eastern Puerto Rico · Luquillo', title: 'Yoga in Luquillo, Puerto Rico',
        intro: 'On Puerto Rico’s northeastern coast, Luquillo is one of the areas connected to Wandering Luna’s practice community.',
        summary: 'Explore movement, breath and community in the Luquillo area.',
        seo: { title: 'Yoga in Luquillo, Puerto Rico | Wandering Luna', description: 'Discover Wandering Luna’s yoga practice in the Luquillo area of Puerto Rico. Explore the approach to movement and breath, and visit the schedule for updates.' },
        practice: { title: 'Make space in Luquillo.', body: 'Wandering Luna’s offerings include practice in the Luquillo area. Visit the schedule to learn how to reserve when booking opens; the meeting place and practical details will accompany each offering.' },
      },
      'palmas-del-mar': {
        name: 'Palmas del Mar', eyebrow: 'Eastern Puerto Rico · Palmas del Mar', title: 'Yoga in Palmas del Mar, Puerto Rico',
        intro: 'Palmas del Mar, in Humacao, is another setting for Wandering Luna’s practice community in eastern Puerto Rico.',
        summary: 'Discover Wandering Luna’s practice community in the Palmas del Mar area.',
        seo: { title: 'Yoga in Palmas del Mar, Puerto Rico | Wandering Luna', description: 'Explore yoga with Wandering Luna in the Palmas del Mar area of Humacao, Puerto Rico. Learn about the practice and visit the schedule for booking updates.' },
        practice: { title: 'A pause in Palmas del Mar.', body: 'Wandering Luna has yoga offerings associated with Palmas del Mar. Explore the schedule as you plan a practice; the specific venue and confirmed details will be shared with each offering.' },
      },
      'rio-grande': {
        name: 'Río Grande', eyebrow: 'Eastern Puerto Rico · Río Grande', title: 'Yoga in Río Grande, Puerto Rico',
        intro: 'Río Grande is part of northeastern Puerto Rico and one of the areas named in Wandering Luna’s gatherings and practice offerings.',
        summary: 'Explore practice and gatherings connected to the Río Grande area.',
        seo: { title: 'Yoga in Río Grande, Puerto Rico | Wandering Luna', description: 'Discover Wandering Luna’s practice and gatherings in the Río Grande area of Puerto Rico. Explore movement, presence and community, with schedule updates to come.' },
        practice: { title: 'Come together in Río Grande.', body: 'Practice and gatherings bring Wandering Luna’s community to the Río Grande area. Visit the schedule for the booking pathway. Dates and meeting places will be confirmed for individual offerings.' },
      },
      naguabo: {
        name: 'Naguabo', eyebrow: 'Eastern Puerto Rico · Naguabo', title: 'Yoga in Naguabo, Puerto Rico',
        intro: 'Naguabo is a municipality in eastern Puerto Rico and part of the area served by Wandering Luna’s yoga offerings.',
        summary: 'Find a connection to Wandering Luna’s yoga practice in the Naguabo area.',
        seo: { title: 'Yoga in Naguabo, Puerto Rico | Wandering Luna', description: 'Explore Wandering Luna’s yoga practice in the Naguabo area of eastern Puerto Rico. Learn what guides the practice and visit the schedule for booking information.' },
        practice: { title: 'Return to presence in Naguabo.', body: 'Wandering Luna’s practice areas include Naguabo. Explore the schedule to learn about the reservation process; confirmed times and the exact meeting place will be provided with each offering.' },
      },
    },
    shared: {
      viewSchedule: 'View schedule', exploreLocation: 'Explore', exploreLocations: 'Explore the locations', allLocations: 'All practice areas',
      locationShortcuts: 'Explore a practice area', relatedLocations: 'Keep exploring', instagram: 'Visit Wandering Luna on Instagram', bookingStatus: 'Booking updates',
      expectations: { title: 'Movement. Breath. Presence.', body: 'Our practice makes room for movement, attention to the breath and time to be present. It is also a space for community: a moment to gather, connect and return to yourself.' },
      cta: { title: 'Let your next practice begin here.', body: 'Explore the schedule and the path to booking with Wandering Luna.' },
      photoCaption: 'A moment from Wandering Luna’s practice community. Meeting places are confirmed with each offering.',
      detailLabels: { venue: 'Venue', address: 'Address', directions: 'Getting there', parking: 'Parking', whatToBring: 'What to bring', weatherNotes: 'Weather notes' },
    },
  },
  es: {
    schedule: {
      eyebrow: 'Yoga · Este de Puerto Rico', title: 'Encuentra tu próxima práctica.',
      intro: 'Haz espacio para moverte, respirar y dedicarte un momento.',
      seo: { title: 'Horario de Yoga en el Este de Puerto Rico | Wandering Luna', description: 'Conoce la práctica semanal de yoga de Wandering Luna en el este de Puerto Rico. Explora las áreas y cómo reservarás cuando se habiliten las reservas en línea.' },
      introduction: { title: 'Una práctica a la que puedes volver.', body: 'Wandering Luna ofrece yoga semanal en el este de Puerto Rico. Explora las áreas a continuación para encontrar tu próxima práctica. Las fechas, los horarios y los puntos de encuentro confirmados se compartirán con cada actividad.' },
      booking: { title: 'Pronto podrás reservar en línea.', body: 'Las reservas se gestionarán a través de Acuity. Todavía no se pueden hacer reservas desde este sitio. Visita a Wandering Luna en Instagram para conocer las novedades y consultar sobre las próximas prácticas.' },
      stepsTitle: 'Cuando se habiliten las reservas', stepsIntro: 'Un proceso sencillo para elegir tu práctica y hacerle espacio en tu día.',
      steps: [
        { title: 'Elige tu práctica', body: 'Revisa la fecha, el lugar y los detalles publicados antes de elegir una actividad.' },
        { title: 'Reserva en línea', body: 'Completa tu reserva a través de Acuity cuando esté disponible la opción de reservar.' },
        { title: 'Recibe tu confirmación', body: 'Busca la confirmación de tu reserva y los detalles de la práctica que elegiste.' },
      ],
    },
    locations: {
      eyebrow: 'Dónde practicamos', title: 'Practica en el este de Puerto Rico.',
      intro: 'Cuatro lugares para explorar, con el movimiento y la conexión como punto de partida.',
      seo: { title: 'Lugares para Practicar Yoga en el Este de Puerto Rico | Wandering Luna', description: 'Explora las áreas de práctica de Wandering Luna en Luquillo, Palmas del Mar, Río Grande y Naguabo. Conoce cada área y consulta el horario.' },
      sectionTitle: 'Encuentra tu lugar para practicar.', sectionIntro: 'Estas áreas forman parte de la comunidad de Wandering Luna. El punto de encuentro se confirmará con cada actividad.',
    },
    places: {
      luquillo: {
        name: 'Luquillo', eyebrow: 'Este de Puerto Rico · Luquillo', title: 'Yoga en Luquillo, Puerto Rico',
        intro: 'En la costa noreste de Puerto Rico, Luquillo es una de las áreas que forman parte de la comunidad de práctica de Wandering Luna.',
        summary: 'Explora el movimiento, la respiración y la comunidad en el área de Luquillo.',
        seo: { title: 'Yoga en Luquillo, Puerto Rico | Wandering Luna', description: 'Conoce la práctica de yoga de Wandering Luna en el área de Luquillo, Puerto Rico. Explora el movimiento y la respiración, y consulta las novedades del horario.' },
        practice: { title: 'Haz espacio en Luquillo.', body: 'Wandering Luna ofrece prácticas en el área de Luquillo. Consulta el horario para conocer cómo reservar cuando se habiliten las reservas. Cada actividad incluirá su punto de encuentro y los detalles necesarios.' },
      },
      'palmas-del-mar': {
        name: 'Palmas del Mar', eyebrow: 'Este de Puerto Rico · Palmas del Mar', title: 'Yoga en Palmas del Mar, Puerto Rico',
        intro: 'Palmas del Mar, en Humacao, es otra de las áreas que reúne a la comunidad de práctica de Wandering Luna en el este de Puerto Rico.',
        summary: 'Conoce la comunidad de práctica de Wandering Luna en el área de Palmas del Mar.',
        seo: { title: 'Yoga en Palmas del Mar, Puerto Rico | Wandering Luna', description: 'Explora el yoga de Wandering Luna en el área de Palmas del Mar, en Humacao, Puerto Rico. Conoce la práctica y consulta las novedades sobre las reservas.' },
        practice: { title: 'Una pausa en Palmas del Mar.', body: 'Wandering Luna ofrece yoga en el área de Palmas del Mar. Explora el horario para planificar tu práctica. El lugar específico y los detalles confirmados se compartirán con cada actividad.' },
      },
      'rio-grande': {
        name: 'Río Grande', eyebrow: 'Este de Puerto Rico · Río Grande', title: 'Yoga en Río Grande, Puerto Rico',
        intro: 'Río Grande, en el noreste de Puerto Rico, es una de las áreas vinculadas a las prácticas y los encuentros de Wandering Luna.',
        summary: 'Explora las prácticas y los encuentros vinculados al área de Río Grande.',
        seo: { title: 'Yoga en Río Grande, Puerto Rico | Wandering Luna', description: 'Conoce las prácticas y los encuentros de Wandering Luna en el área de Río Grande, Puerto Rico. Explora el movimiento, la presencia y la comunidad.' },
        practice: { title: 'Nos encontramos en Río Grande.', body: 'Las prácticas y los encuentros reúnen a la comunidad de Wandering Luna en el área de Río Grande. Consulta el horario para conocer cómo reservar. Las fechas y los puntos de encuentro se confirmarán para cada actividad.' },
      },
      naguabo: {
        name: 'Naguabo', eyebrow: 'Este de Puerto Rico · Naguabo', title: 'Yoga en Naguabo, Puerto Rico',
        intro: 'Naguabo es un municipio del este de Puerto Rico y forma parte de las áreas donde Wandering Luna ofrece yoga.',
        summary: 'Conecta con la práctica de yoga de Wandering Luna en el área de Naguabo.',
        seo: { title: 'Yoga en Naguabo, Puerto Rico | Wandering Luna', description: 'Explora la práctica de yoga de Wandering Luna en el área de Naguabo, en el este de Puerto Rico. Conoce su enfoque y consulta la información sobre las reservas.' },
        practice: { title: 'Vuelve al presente en Naguabo.', body: 'Naguabo forma parte de las áreas de práctica de Wandering Luna. Explora el horario para conocer el proceso de reserva. Cada actividad incluirá la hora confirmada y el punto de encuentro específico.' },
      },
    },
    shared: {
      viewSchedule: 'Ver horario', exploreLocation: 'Explorar', exploreLocations: 'Explora los lugares', allLocations: 'Todas las áreas de práctica',
      locationShortcuts: 'Explora un área de práctica', relatedLocations: 'Sigue explorando', instagram: 'Visita a Wandering Luna en Instagram', bookingStatus: 'Novedades sobre las reservas',
      expectations: { title: 'Movimiento. Respiración. Presencia.', body: 'Nuestra práctica abre espacio para el movimiento, la atención a la respiración y el momento presente. También es un espacio de comunidad: una oportunidad para reunirnos, conectar y volver a nosotros mismos.' },
      cta: { title: 'Tu próxima práctica comienza aquí.', body: 'Explora el horario y conoce cómo reservar con Wandering Luna.' },
      photoCaption: 'Un momento de la comunidad de práctica de Wandering Luna. El punto de encuentro se confirma con cada actividad.',
      detailLabels: { venue: 'Lugar', address: 'Dirección', directions: 'Cómo llegar', parking: 'Estacionamiento', whatToBring: 'Qué traer', weatherNotes: 'Información sobre el tiempo' },
    },
  },
};

/** Semantic path only; callers first validate the locale URL via resolveRoute. */
export function secondaryMetadata(locale: Locale, semanticPath: string): PageSEO | undefined {
  const copy = secondaryContent[locale];
  if (semanticPath === 'schedule') return copy.schedule.seo;
  if (semanticPath === 'locations') return copy.locations.seo;
  if (semanticPath.startsWith('locations/')) return copy.places[semanticPath.slice(10) as LocationSlug]?.seo;
}

export function visibleVenueDetails(details?: VenueDetails): [keyof VenueDetails, string][] {
  return (Object.entries(details ?? {}) as [keyof VenueDetails, string][]).filter(([, value]) => value.trim().length > 0);
}
