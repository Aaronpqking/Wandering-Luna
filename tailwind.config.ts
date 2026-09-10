import type { Config } from 'tailwindcss';

const config: Config = { darkMode: ['class'], content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ivory: '#F6F3EB', 'soft-white': '#FBFAF7', green: '#496B43', forest: '#2F4A34', blue: '#31536B', night: '#112A45', clay: '#A66E4B', gold: '#B79A5E', charcoal: '#252823' }, fontFamily: { display: ['var(--font-display)', 'Georgia', 'serif'], sans: ['var(--font-sans)', 'sans-serif'] }, borderRadius: { lg: '1rem', md: '0.75rem', sm: '0.5rem' } } }, plugins: [] };
export default config;
