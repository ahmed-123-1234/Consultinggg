/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-mid': '#0f2040',
        'navy-light': '#1a305a',
        'navy-accent': '#1e3a6e',
        gold: '#c9a84c',
        'gold-light': '#e2c47a',
        'gold-pale': '#f5e6c0',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
    },
  },
  plugins: [],
};
