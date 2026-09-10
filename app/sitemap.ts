import type { MetadataRoute } from 'next';
import { locales, localizedPath, indexablePaths } from '@/lib/routes';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, alternates: { languages: { en: `${SITE_URL}/en`, es: `${SITE_URL}/es`, 'x-default': `${SITE_URL}/` } } },
    ...indexablePaths.flatMap((path) => {
      const languages = {
        en: `${SITE_URL}${localizedPath('en', path)}`,
        es: `${SITE_URL}${localizedPath('es', path)}`,
        'x-default': `${SITE_URL}/`,
      };
      return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
    }),
  ];
}
