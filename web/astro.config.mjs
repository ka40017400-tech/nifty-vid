import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://ka40017400-tech.github.io",
  base: isProd ? "/nifty-vid" : "/",
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
