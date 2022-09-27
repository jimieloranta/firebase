import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.CI ? "/firebase/" : undefined,
  server: {
    port: 3000,
  },
  plugins: [react(),VitePWA({ registerType: 'autoUpdate' })]
});
