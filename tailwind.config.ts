import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'site-bg': 'rgb(var(--site-bg) / <alpha-value>)',
        'site-fg': 'rgb(var(--site-fg) / <alpha-value>)',
        'site-muted': 'rgb(var(--site-muted) / <alpha-value>)',
        'site-border': 'rgb(var(--site-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--site-font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--site-font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
