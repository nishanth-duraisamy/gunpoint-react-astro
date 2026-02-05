/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontWeight: {
        'extrabold': 800, // Explicitly define extrabold
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
