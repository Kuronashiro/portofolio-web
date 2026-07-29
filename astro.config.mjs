import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://muhammadirhamrizq-portoweb.vercel.app",
  integrations: [sitemap()]
});
