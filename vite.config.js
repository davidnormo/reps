import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Reps",
        short_name: "Reps",
        description: "Repeated Exercise Tracker",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/reps/android-chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/reps/android-chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/reps/",
  build: {
    outDir: "docs",
  },
});
