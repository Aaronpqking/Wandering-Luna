/** Public scheduling links only. Account setup and live activation require owner confirmation. */
export function parseSchedulerUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash) return null;
    const host = url.hostname;
    const branded = /^[a-z0-9-]+\.(as\.me|acuityscheduling\.com)$/.test(host) && !['www.acuityscheduling.com', 'embed.acuityscheduling.com', 'developers.acuityscheduling.com'].includes(host);
    const general = host === 'acuityscheduling.com' || host === 'www.acuityscheduling.com';
    if (!(branded || general)) return null;
    if (!['/', '/schedule.php'].includes(url.pathname)) return null;
    // V1 accepts a general scheduling link, never client data, admin tokens or filters.
    for (const key of url.searchParams.keys()) if (key !== 'owner') return null;
    const owners = url.searchParams.getAll('owner');
    if (owners.length > 1 || (owners.length === 1 && !/^\d+$/.test(owners[0]))) return null;
    if (general && (url.pathname !== '/schedule.php' || owners.length !== 1)) return null;
    return url.href;
  } catch { return null; }
}

export const schedulerUrl = parseSchedulerUrl(process.env.NEXT_PUBLIC_ACUITY_SCHEDULER_URL);
export const acuityEmbedScript = 'https://embed.acuityscheduling.com/js/embed.js';

export const bookingCopy = {
  en: {
    title: 'Reserve your practice',
    intro: 'Choose a session and review its location, time and booking details before reserving.',
    frameTitle: 'Wandering Luna appointment booking',
    loading: 'Loading booking options…',
    unavailable: 'Having trouble loading booking? Open the booking page directly or contact us on Instagram.',
    direct: 'Open booking page',
    status: 'View booking options',
    stepsTitle: 'Make room for practice',
    reserve: 'Review the session details and complete your reservation on the booking page.',
  },
  es: {
    title: 'Reserva tu práctica',
    intro: 'Elige una sesión y revisa el lugar, la hora y los detalles antes de reservar.',
    frameTitle: 'Reservas de Wandering Luna',
    loading: 'Cargando opciones de reserva…',
    unavailable: '¿No carga el calendario? Abre la página de reservas directamente o escríbenos por Instagram.',
    direct: 'Abrir página de reservas',
    status: 'Ver opciones de reserva',
    stepsTitle: 'Haz espacio para tu práctica',
    reserve: 'Revisa los detalles de la sesión y completa tu reserva en la página de reservas.',
  },
} as const;
