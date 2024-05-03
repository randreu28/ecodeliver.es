import type { Config } from "tailwindcss";
import { ecoDeliverTheme } from "./src/utils/theme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: "selector",
  plugins: [ecoDeliverTheme, typography],
} satisfies Config;
