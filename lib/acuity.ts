/** Public scheduling links only. Account setup and live activation require owner confirmation. */
export function parseSchedulerUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash) return null;
    const host = url.hostname;
    const shared = ['acuityscheduling.com', 'www.acuityscheduling.com', 'app.acuityscheduling.com'].includes(host);
    const branded = /^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?\.(as\.me|acuityscheduling\.com)$/.test(host)
      && !['www.acuityscheduling.com', 'app.acuityscheduling.com', 'embed.acuityscheduling.com', 'developers.acuityscheduling.com', 'secure.acuityscheduling.com', 'help.acuityscheduling.com'].includes(host);
    if (!shared && !branded) return null;
    const customPath = host.endsWith('.as.me') && /^\/[a-zA-Z0-9-]{1,255}$/.test(url.pathname)
      && !['/admin', '/login', '/account'].includes(url.pathname.toLowerCase());
    if (shared ? url.pathname !== '/schedule.php' : !['/', '/schedule.php'].includes(url.pathname) && !customPath) return null;
    // Only reviewed public selectors; never customer prefill, forms or coupon data.
    const allowed: Record<string, RegExp> = {
      owner: /^[1-9]\d*$/,
      ref: /^embedded_csp$/,
      appointmentType: /^(?:class|[1-9]\d*)$/,
      calendarID: /^[1-9]\d*$/,
    };
    for (const [key, value] of url.searchParams) {
      if (!Object.hasOwn(allowed, key) || !allowed[key].test(value) || url.searchParams.getAll(key).length !== 1) return null;
    }
    if (shared && !url.searchParams.has('owner')) return null;
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
