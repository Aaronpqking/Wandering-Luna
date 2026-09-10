import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'] });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] });

export const fontVariables = `${display.variable} ${sans.variable}`;
