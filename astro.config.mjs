import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), sitemap()],
  site: 'https://javieralburges.vercel.app/'
});