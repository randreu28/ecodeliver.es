import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: { service: sharpImageService({ limitInputPixels: false }) },
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      redirectToDefaultLocale: true,
      prefixDefaultLocale: true,
    },
  },
});
