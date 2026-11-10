import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-carlosj09.netlify.app",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  // ~8 KB of CSS: inlining it saves a render-blocking request on first paint.
  build: { inlineStylesheets: "always" },
});
