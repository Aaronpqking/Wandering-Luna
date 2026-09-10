'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const { locale } = useParams<{ locale: string }>();
  const spanish = locale === 'es';
  return (
    <main className="min-h-[70vh] bg-night px-5 pb-24 pt-36 text-center text-ivory">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Wandering Luna · 404</p>
      <h1 className="mt-5 font-display text-5xl">{spanish ? 'Página no encontrada' : 'Page not found'}</h1>
      <Link href={spanish ? '/es' : '/en'} className="mt-8 inline-block underline">{spanish ? 'Volver al inicio' : 'Return home'}</Link>
    </main>
  );
}
