import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wanderingluna.co';
  const paths = ['', '/schedule', '/gatherings', '/retreats', '/about', '/contact', '/locations/luquillo', '/locations/palmas-del-mar', '/locations/rio-grande', '/locations/naguabo'];
  const esMap: Record<string, string> = { '/schedule': '/horario', '/gatherings': '/encuentros', '/retreats': '/retiros', '/about': '/acerca', '/contact': '/contacto', '/locations': '/lugares' };
  return paths.flatMap((path) => [
    { url: `${base}/en${path}`, alternates: { languages: { en: `${base}/en${path}`, es: `${base}/es${esMap[path] ?? path}` } } },
    { url: `${base}/es${esMap[path] ?? path}`, alternates: { languages: { en: `${base}/en${path}`, es: `${base}/es${esMap[path] ?? path}` } } },
  ]);
}
