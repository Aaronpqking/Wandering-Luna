import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'] });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] });

export const metadata: Metadata = { metadataBase: new URL('https://wanderingluna.co'), title: 'Wandering Luna', description: 'Yoga, ritual and connection in Puerto Rico.' };

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
