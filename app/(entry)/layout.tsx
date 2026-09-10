import '@/app/globals.css';
import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site-config';
import { localizedMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...localizedMetadata('en'),
  metadataBase: new URL(SITE_URL),
  title: 'Wandering Luna',
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: { en: `${SITE_URL}/en`, es: `${SITE_URL}/es`, 'x-default': `${SITE_URL}/` },
  },
  openGraph: { ...localizedMetadata('en').openGraph, url: `${SITE_URL}/` },
};

export default function EntryLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={fontVariables}>{children}</body></html>;
}
