import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // Import sitemap integration

// https://astro.build/config
export default defineConfig({
  site: 'https://gunpointtattoostudio.com', // Add the site URL for sitemap generation
  integrations: [react(), sitemap()], // Add sitemap integration
  vite: {
    plugins: [
        tailwindcss()
    ]
  },
  server: {
    port: 3000,
    host: true
  },
  output: 'static'
});