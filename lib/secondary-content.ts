import { schedulerUrl } from './acuity.ts';
import type { Locale, LocationSlug } from './routes';

export type PageSEO = { title: string; description: string };
export type EditorialCopy = { title: string; body: string };
export type PageIntro = { eyebrow: string; title: string; intro: string; seo: PageSEO };
export type VenueDetails = Partial<Record<'venue' | 'address' | 'directions' | 'parking' | 'whatToBring' | 'weatherNotes', string>>;
export type LocationContent = PageIntro & { name: string; summary: string; practice: EditorialCopy; details?: VenueDetails };
export type PublicPageKey = 'gatherings' | 'retreats' | 'about' | 'contact';
export type SecondaryContent = {
  gatherings: PageIntro & { introduction: EditorialCopy; meaningTitle: string; meaning: readonly EditorialCopy[]; community: EditorialCopy; upcoming: EditorialCopy };
  retreats: PageIntro & { introduction: EditorialCopy; philosophy: EditorialCopy; details: EditorialCopy; upcoming: EditorialCopy };
  about: PageIntro & { introduction: EditorialCopy; approachTitle: string; approach: readonly EditorialCopy[]; place: EditorialCopy };
  contact: PageIntro & { reachOut: EditorialCopy; topicsTitle: string; topics: readonly (EditorialCopy & { path: 'schedule' | 'gatherings' | 'retreats'; label: string })[] };
  publicShared: { instagramLabel: string; contactLabel: string; photoCaption: string; portraitCaption: string; retreatCaption: string; channelLabels: Record<'email' | 'phone' | 'whatsapp', string> };
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

// BUSINESS_FACT_REQUIRED: extend Nicole’s personal story, training, certifications
// and teaching history only after confirmation. No credential claims are published.
// BUSINESS_FACT_REQUIRED: event/retreat records need confirmed details before any
// dates, destinations, pricing, inclusions or detail routes can be introduced.
// BUSINESS_FACT_REQUIRED: confirm venues, addresses, directions, parking, what to
// bring and weather notes before populating optional details. Omitted data is not rendered.
// Existing business material names these four areas; no photograph is attributed
// to a specific venue or town without confirmation.
export const secondaryContent: Record<Locale, SecondaryContent> = {
  en: {
"gatherings": {
    "eyebrow": "Ritual · Reflection · Community",
    "title": "Gather beyond the mat.",
    "intro": "Intentional gatherings shaped by movement, ritual, reflection and community.",
    "seo": {
      "title": "Moon Circles & Gatherings in Puerto Rico | Wandering Luna",
      "description": "Explore Wandering Luna’s approach to moon circles and intentional gatherings in Puerto Rico: shared practice, reflection and community. Follow upcoming announcements."
    },
    "introduction": {
      "title": "A little space, shared.",
      "body": "Some moments invite us to come together without rushing on to the next thing. Wandering Luna’s gatherings make room for shared practice, a pause for reflection and the simple experience of being in community."
    },
    "meaningTitle": "What it means to gather",
    "meaning": [
      {
        "title": "Share a practice",
        "body": "Movement and attention to the breath offer a way to arrive in the moment together. The gathering begins with making space for presence."
      },
      {
        "title": "Pause and reflect",
        "body": "Ritual can be a simple act of attention: noticing what matters, marking a moment or taking time to listen. There is room for your own meaning."
      },
      {
        "title": "Make a connection",
        "body": "Community grows through shared moments. These gatherings invite conversation, reflection and connection beyond the rhythm of a weekly class."
      }
    ],
    "community": {
      "title": "Around the circle.",
      "body": "Moon-circle imagery is part of Wandering Luna’s story of gathering. A circle, a candle, a moment outdoors: familiar details that create a setting for attention and connection, without asking everyone to experience it in the same way."
    },
    "upcoming": {
      "title": "Upcoming gatherings will be shared here.",
      "body": "There are no upcoming gatherings announced on this page yet. Follow Wandering Luna on Instagram for news, or reach out with a question. For weekly yoga, explore the schedule."
    }
  },
  "retreats": {
    "eyebrow": "Practice · Place · Time",
    "title": "Step away. Come closer.",
    "intro": "Make room for practice, place and connection beyond the rhythm of a weekly class.",
    "seo": {
      "title": "Retreats & Longer-Form Practice | Wandering Luna Puerto Rico",
      "description": "Discover the philosophy behind Wandering Luna’s retreats: slowing down, presence and community. Learn what future announcements will share and get in touch."
    },
    "introduction": {
      "title": "Time to be here.",
      "body": "A change of pace can open up a different way of paying attention. Wandering Luna’s vision for retreats centers on space for practice, connection with others and time outside the usual routine."
    },
    "philosophy": {
      "title": "A slower rhythm for practice.",
      "body": "Longer-form experiences offer room to stay with movement and breath, notice the place around us and let connection unfold. The intention is presence: time to practice, reflect and gather without fitting it all between the demands of an ordinary day."
    },
    "details": {
      "title": "The details come with the invitation.",
      "body": "When a retreat is ready to share, its page will describe the experience, confirmed dates and location, what is included and how to reserve. Read those details before making plans; there are no retreat bookings available on this page."
    },
    "upcoming": {
      "title": "The next retreat is still to come.",
      "body": "No retreat dates or destinations are announced here yet. If this way of practicing speaks to you, get in touch with a question or follow Wandering Luna on Instagram for future announcements."
    }
  },
  "about": {
    "eyebrow": "The person behind Wandering Luna",
    "title": "Meet Nicole.",
    "intro": "Movement, presence and community, with Puerto Rico as the setting for the practice.",
    "seo": {
      "title": "About Wandering Luna & Nicole | Yoga in Puerto Rico",
      "description": "Meet Nicole, the person behind Wandering Luna. Explore an approach to yoga and gathering shaped by movement, presence, place and community in Puerto Rico."
    },
    "introduction": {
      "title": "A practice with a human center.",
      "body": "Nicole is the person behind Wandering Luna. Through yoga and intentional gathering, she creates space for movement, presence and connection. Wandering Luna brings these threads together in a practice rooted in the everyday experience of being here, in Puerto Rico."
    },
    "approachTitle": "The approach",
    "approach": [
      {
        "title": "Begin with movement",
        "body": "Make space to notice the body and the breath. Practice is a chance to pay attention to the moment you are in."
      },
      {
        "title": "Stay present",
        "body": "A pause can be part of the practice, too. Wandering Luna invites room for reflection alongside movement."
      },
      {
        "title": "Gather in community",
        "body": "Sharing a practice offers a point of connection. Weekly yoga and intentional gatherings bring people together around time, attention and presence."
      }
    ],
    "place": {
      "title": "A relationship with place.",
      "body": "Puerto Rico is part of Wandering Luna’s context: the places where practice happens and the people who gather there. The community connects through offerings associated with Luquillo, Palmas del Mar, Río Grande and Naguabo. Explore the areas to find your way into the practice."
    }
  },
  "contact": {
    "eyebrow": "Questions · Connection · Possibility",
    "title": "Let’s connect.",
    "intro": "Questions about practice, gatherings, collaborations or future retreats? Reach out and we’ll point you in the right direction.",
    "seo": {
      "title": "Contact Wandering Luna | Yoga in Eastern Puerto Rico",
      "description": "Connect with Wandering Luna on Instagram for questions about yoga, gatherings, collaborations and future retreats. Explore the schedule and find the right next step."
    },
    "reachOut": {
      "title": "Start a conversation.",
      "body": "Instagram is the place to reach Wandering Luna directly. Let us know what you are interested in and any questions you have. If you are asking about a practice area, include the area’s name so the conversation starts in the right place."
    },
    "topicsTitle": "What brings you here?",
    "topics": [
      {
        "title": "Find a practice",
        "body": (schedulerUrl ? "Explore the schedule and the four practice areas. Review session details and reserve on the schedule page, or ask about practice through Instagram." : "Explore the schedule and the four practice areas. Online reservations are not connected yet; you can ask about practice through Instagram."),
        "path": "schedule",
        "label": "Explore the schedule"
      },
      {
        "title": "Gather or collaborate",
        "body": "Curious about intentional gatherings or an idea you would like to share? Read about the gatherings, then start a conversation on Instagram.",
        "path": "gatherings",
        "label": "Discover the gatherings"
      },
      {
        "title": "Ask about future retreats",
        "body": "Learn about Wandering Luna’s approach to longer-form experiences. Confirmed announcements will be shared when they are ready.",
        "path": "retreats",
        "label": "Explore the retreat approach"
      }
    ]
  },
  "publicShared": {
    "instagramLabel": "Connect on Instagram",
    "contactLabel": "Get in touch",
    "photoCaption": "From Wandering Luna’s community. A moment shared, rather than an announcement of an upcoming event.",
    "portraitCaption": "Nicole, the person behind Wandering Luna.",
    "retreatCaption": "From the Wandering Luna photo collection. Future retreat settings and details will be announced separately.",
    "channelLabels": {
      "email": "Email",
      "phone": "Phone",
      "whatsapp": "WhatsApp"
    }
  },
    schedule: {
      eyebrow: 'Yoga · Eastern Puerto Rico', title: 'Find your next practice.',
      intro: 'Make room for movement, breath and a little time for yourself.',
      seo: { title: 'Yoga Schedule in Eastern Puerto Rico | Wandering Luna', description: (schedulerUrl ? "Explore yoga with Wandering Luna in Eastern Puerto Rico. Find practice areas, review session details and reserve your practice online." : 'Explore weekly yoga with Wandering Luna in Eastern Puerto Rico. Find practice areas and learn how online reservations will work when booking opens.') },
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
        practice: { title: 'Make space in Luquillo.', body: (schedulerUrl ? "Wandering Luna’s offerings include practice in the Luquillo area. Visit the schedule to review booking options; check the meeting place and practical details for your chosen session." : 'Wandering Luna’s offerings include practice in the Luquillo area. Visit the schedule to learn how to reserve when booking opens; the meeting place and practical details will accompany each offering.') },
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
"gatherings": {
    "eyebrow": "Ritual · Reflexión · Comunidad",
    "title": "Más allá de la práctica, el encuentro.",
    "intro": "Encuentros con intención, donde el movimiento, el ritual y la reflexión nos reúnen en comunidad.",
    "seo": {
      "title": "Círculos de Luna y Encuentros en Puerto Rico | Wandering Luna",
      "description": "Conoce los círculos de luna y encuentros de Wandering Luna en Puerto Rico: práctica compartida, reflexión y comunidad. Entérate de las próximas convocatorias."
    },
    "introduction": {
      "title": "Un espacio para compartir.",
      "body": "Hay momentos que nos invitan a reunirnos sin pensar de inmediato en lo próximo. Los encuentros de Wandering Luna abren espacio para compartir una práctica, hacer una pausa y disfrutar de estar en comunidad."
    },
    "meaningTitle": "Lo que significa encontrarnos",
    "meaning": [
      {
        "title": "Compartir la práctica",
        "body": "El movimiento y la atención a la respiración nos ayudan a llegar juntos al momento presente. El encuentro comienza al hacer espacio para estar aquí."
      },
      {
        "title": "Hacer una pausa",
        "body": "Un ritual puede ser un gesto sencillo de atención: reconocer lo que importa, marcar un momento o dedicar tiempo a escuchar. Cada persona puede darle su propio significado."
      },
      {
        "title": "Crear conexión",
        "body": "La comunidad crece con los momentos compartidos. Estos encuentros invitan a conversar, reflexionar y conectar más allá del ritmo de una clase semanal."
      }
    ],
    "community": {
      "title": "En torno al círculo.",
      "body": "Las imágenes de círculos de luna forman parte de la historia de Wandering Luna. Un círculo, una vela, un momento al aire libre: detalles que acompañan la atención y la conexión, sin esperar que todas las personas vivan lo mismo."
    },
    "upcoming": {
      "title": "Los próximos encuentros se compartirán aquí.",
      "body": "Todavía no hay próximos encuentros anunciados en esta página. Sigue a Wandering Luna en Instagram para conocer las novedades o escribirnos con tus preguntas. Para yoga semanal, explora el horario."
    }
  },
  "retreats": {
    "eyebrow": "Práctica · Lugar · Tiempo",
    "title": "Sal de la rutina. Acércate a ti.",
    "intro": "Haz espacio para la práctica, el entorno y la conexión, más allá del ritmo de una clase semanal.",
    "seo": {
      "title": "Retiros y Práctica con Más Tiempo | Wandering Luna Puerto Rico",
      "description": "Conoce la intención de los retiros de Wandering Luna: bajar el ritmo, estar presente y compartir en comunidad. Descubre qué incluirán los anuncios y cómo contactarnos."
    },
    "introduction": {
      "title": "Tiempo para estar aquí.",
      "body": "Cambiar de ritmo puede abrir otra manera de prestar atención. La visión de Wandering Luna para los retiros parte de hacer espacio para practicar, conectar con otras personas y salir por un momento de la rutina."
    },
    "philosophy": {
      "title": "Otro ritmo para la práctica.",
      "body": "Las experiencias con más tiempo permiten detenernos en el movimiento y la respiración, observar el entorno y compartir sin prisa. La intención es estar presentes: practicar, reflexionar y reunirnos sin acomodarlo todo entre las exigencias del día a día."
    },
    "details": {
      "title": "Los detalles llegan con la invitación.",
      "body": "Cuando haya un retiro listo para compartir, su página describirá la experiencia, las fechas y el lugar confirmados, lo que incluye y cómo reservar. Revisa esa información antes de hacer planes; esta página todavía no ofrece reservas de retiros."
    },
    "upcoming": {
      "title": "El próximo retiro está por venir.",
      "body": "Aquí todavía no se han anunciado fechas ni destinos de retiros. Si te interesa esta forma de practicar, escríbenos con tus preguntas o sigue a Wandering Luna en Instagram para conocer las próximas novedades."
    }
  },
  "about": {
    "eyebrow": "La persona detrás de Wandering Luna",
    "title": "Conoce a Nicole.",
    "intro": "Movimiento, presencia y comunidad, con Puerto Rico como entorno de la práctica.",
    "seo": {
      "title": "Sobre Wandering Luna y Nicole | Yoga en Puerto Rico",
      "description": "Conoce a Nicole, la persona detrás de Wandering Luna. Descubre una manera de practicar yoga y reunirnos desde el movimiento, la presencia y la comunidad en Puerto Rico."
    },
    "introduction": {
      "title": "Una práctica que nace de la conexión.",
      "body": "Nicole es la persona detrás de Wandering Luna. A través del yoga y los encuentros con intención, abre espacio para el movimiento, la presencia y la conexión. Wandering Luna une estos elementos en una práctica que parte de la experiencia cotidiana de estar aquí, en Puerto Rico."
    },
    "approachTitle": "Nuestra manera de practicar",
    "approach": [
      {
        "title": "Comenzar con el movimiento",
        "body": "Hacer espacio para observar el cuerpo y la respiración. La práctica es una oportunidad de prestar atención al momento que estás viviendo."
      },
      {
        "title": "Estar presentes",
        "body": "La pausa también forma parte de la práctica. Wandering Luna invita a darle espacio a la reflexión junto al movimiento."
      },
      {
        "title": "Reunirnos en comunidad",
        "body": "Compartir una práctica crea un punto de conexión. El yoga semanal y los encuentros con intención nos reúnen en torno al tiempo, la atención y la presencia."
      }
    ],
    "place": {
      "title": "Una relación con el lugar.",
      "body": "Puerto Rico forma parte del contexto de Wandering Luna: los lugares donde practicamos y las personas que se reúnen. La comunidad se conecta a través de actividades vinculadas a Luquillo, Palmas del Mar, Río Grande y Naguabo. Explora las áreas para encontrar tu manera de acercarte a la práctica."
    }
  },
  "contact": {
    "eyebrow": "Preguntas · Conexión · Posibilidades",
    "title": "Conversemos.",
    "intro": "¿Tienes preguntas sobre la práctica, los encuentros, las colaboraciones o futuros retiros? Escríbenos y te orientamos.",
    "seo": {
      "title": "Contacta a Wandering Luna | Yoga en el Este de Puerto Rico",
      "description": "Conecta con Wandering Luna en Instagram para preguntar sobre yoga, encuentros, colaboraciones y futuros retiros. Explora el horario y encuentra tu próximo paso."
    },
    "reachOut": {
      "title": "Comienza la conversación.",
      "body": "Instagram es el canal para contactar directamente a Wandering Luna. Cuéntanos qué te interesa y qué preguntas tienes. Si consultas sobre un área de práctica, incluye su nombre para ayudarnos a orientarte desde el principio."
    },
    "topicsTitle": "¿Qué te gustaría explorar?",
    "topics": [
      {
        "title": "Encontrar una práctica",
        "body": (schedulerUrl ? "Explora el horario y las cuatro áreas de práctica. Revisa los detalles de cada sesión y reserva desde el horario, o consulta sobre la práctica por Instagram." : "Explora el horario y las cuatro áreas de práctica. Las reservas en línea todavía no están conectadas; puedes consultar sobre la práctica por Instagram."),
        "path": "schedule",
        "label": "Explora el horario"
      },
      {
        "title": "Reunirnos o colaborar",
        "body": "¿Te interesan los encuentros con intención o tienes una idea que compartir? Conoce nuestra propuesta y comienza la conversación en Instagram.",
        "path": "gatherings",
        "label": "Conoce los encuentros"
      },
      {
        "title": "Preguntar por futuros retiros",
        "body": "Conoce la visión de Wandering Luna para las experiencias con más tiempo. Los anuncios se compartirán cuando sus detalles estén confirmados.",
        "path": "retreats",
        "label": "Explora la propuesta de retiros"
      }
    ]
  },
  "publicShared": {
    "instagramLabel": "Conecta por Instagram",
    "contactLabel": "Escríbenos",
    "photoCaption": "De la comunidad de Wandering Luna. Un momento compartido, no el anuncio de un próximo evento.",
    "portraitCaption": "Nicole, la persona detrás de Wandering Luna.",
    "retreatCaption": "De la colección de fotos de Wandering Luna. Los lugares y detalles de futuros retiros se anunciarán por separado.",
    "channelLabels": {
      "email": "Correo electrónico",
      "phone": "Teléfono",
      "whatsapp": "WhatsApp"
    }
  },
    schedule: {
      eyebrow: 'Yoga · Este de Puerto Rico', title: 'Encuentra tu próxima práctica.',
      intro: 'Haz espacio para moverte, respirar y dedicarte un momento.',
      seo: { title: 'Horario de Yoga en el Este de Puerto Rico | Wandering Luna', description: (schedulerUrl ? "Conoce la práctica de yoga de Wandering Luna en el este de Puerto Rico. Explora las áreas, revisa los detalles y reserva tu práctica en línea." : 'Conoce la práctica semanal de yoga de Wandering Luna en el este de Puerto Rico. Explora las áreas y cómo reservarás cuando se habiliten las reservas en línea.') },
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
        practice: { title: 'Haz espacio en Luquillo.', body: (schedulerUrl ? "Wandering Luna ofrece prácticas en el área de Luquillo. Consulta el horario para reservar y revisa el punto de encuentro y los detalles de la sesión que elijas." : 'Wandering Luna ofrece prácticas en el área de Luquillo. Consulta el horario para conocer cómo reservar cuando se habiliten las reservas. Cada actividad incluirá su punto de encuentro y los detalles necesarios.') },
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
  if (semanticPath === 'gatherings' || semanticPath === 'retreats' || semanticPath === 'about' || semanticPath === 'contact') return copy[semanticPath].seo;
  if (semanticPath === 'schedule') return copy.schedule.seo;
  if (semanticPath === 'locations') return copy.locations.seo;
  if (semanticPath.startsWith('locations/')) return copy.places[semanticPath.slice(10) as LocationSlug]?.seo;
}

export function visibleVenueDetails(details?: VenueDetails): [keyof VenueDetails, string][] {
  return (Object.entries(details ?? {}) as [keyof VenueDetails, string][]).filter(([, value]) => value.trim().length > 0);
}
