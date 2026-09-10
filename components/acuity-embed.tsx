'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { acuityEmbedScript, bookingCopy } from '@/lib/acuity';
import { social } from '@/lib/site-config';
import type { Locale } from '@/lib/routes';

export function AcuityEmbed({ url, locale }: { url: string; locale: Locale }) {
  const copy = bookingCopy[locale];
  const [status, setStatus] = useState<'loading' | 'loaded' | 'unavailable'>('loading');
  useEffect(() => {
    const timer = window.setTimeout(() => setStatus(current => current === 'loading' ? 'unavailable' : current), 15000);
    return () => window.clearTimeout(timer);
  }, []);
  return <div className="min-w-0 py-8">
    <div className="mb-6 px-5">
      <h2 className="font-display text-4xl text-forest">{copy.title}</h2>
      <p className="mt-4 leading-7 text-charcoal/75">{copy.intro}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4">{copy.direct}</a>
      <a href={social.instagram.url} className="ml-5 inline-flex min-h-11 items-center text-forest underline">Instagram</a>
      <p role="status" className="mt-3 text-sm leading-6 text-charcoal/75">{status === 'loading' ? copy.loading : status === 'unavailable' ? copy.unavailable : null}</p>
    </div>
    <iframe src={url} title={copy.frameTitle} width="100%" height="800" frameBorder="0" allow="payment"
      className="block w-full border-0 bg-white" onLoad={() => setStatus('loaded')} onError={() => setStatus('unavailable')} />
    <Script id="acuity-embed" src={acuityEmbedScript} strategy="afterInteractive" onError={() => setStatus('unavailable')} />
  </div>;
}
