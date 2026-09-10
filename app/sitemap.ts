import type { MetadataRoute } from 'next';
import { locales, localizedPath, supportedPaths } from '@/lib/routes';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return supportedPaths.flatMap((path) => {
    const languages = {
      en: `${SITE_URL}${localizedPath('en', path)}`,
      es: `${SITE_URL}${localizedPath('es', path)}`,
      'x-default': `${SITE_URL}/`,
    };
    return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
  });
}
