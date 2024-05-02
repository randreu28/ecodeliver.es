import type { Config } from "tailwindcss";
import { ecoDeliverTheme } from "./src/utils/theme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [ecoDeliverTheme],
} satisfies Config;
