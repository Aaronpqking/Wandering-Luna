export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

// Semantic English keys are the route authority. Only the section is translated;
// location slugs remain unchanged in both languages.
export const routeSegments = {
  schedule: { en: 'schedule', es: 'horario' },
  gatherings: { en: 'gatherings', es: 'encuentros' },
  retreats: { en: 'retreats', es: 'retiros' },
  about: { en: 'about', es: 'acerca' },
  contact: { en: 'contact', es: 'contacto' },
  locations: { en: 'locations', es: 'lugares' },
} as const;

export type RouteKey = keyof typeof routeSegments;
export const locationSlugs = ['luquillo', 'palmas-del-mar', 'rio-grande', 'naguabo'] as const;
export const supportedPaths = [
  '', ...Object.keys(routeSegments), ...locationSlugs.map((slug) => `locations/${slug}`),
];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

/** Convert a semantic or localized path to its target locale exactly once. */
export function localizedPath(locale: Locale, path = ''): string {
  const suffixStart = path.search(/[?#]/);
  const pathname = suffixStart === -1 ? path : path.slice(0, suffixStart);
  const suffix = suffixStart === -1 ? '' : path.slice(suffixStart);
  const segments = pathname.split('/').filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  const key = (Object.keys(routeSegments) as RouteKey[]).find((key) =>
    Object.values(routeSegments[key]).some((segment) => segment === segments[0]),
  );
  if (key) segments[0] = routeSegments[key][locale];
  return `/${locale}${segments.length ? `/${segments.join('/')}` : ''}${suffix}`;
}

export function alternatePath(locale: Locale, path = ''): string {
  return localizedPath(locale === 'en' ? 'es' : 'en', path);
}

/** Strict validation: wrong-language aliases and unconfirmed detail slugs 404. */
export function resolveRoute(locale: Locale, segments: readonly string[] = []): 'home' | 'location' | RouteKey | null {
  if (segments.length === 0) return 'home';
  const key = (Object.keys(routeSegments) as RouteKey[]).find((key) => routeSegments[key][locale] === segments[0]);
  if (!key) return null;
  if (segments.length === 1) return key;
  if (key === 'locations' && segments.length === 2 && locationSlugs.some((slug) => slug === segments[1])) return 'location';
  return null;
}
