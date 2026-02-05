/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': 'var(--color-background)', // Maps to #000000
        'background-light': 'var(--color-secondary)', // Maps to #333333
        'text-light': 'var(--color-text-main)', // Maps to #ffffff
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': 800, // Explicitly define extrabold
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
