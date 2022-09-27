import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.CI ? "/firebase/" : undefined,
  server: {
    port: 3000,
  },
  plugins: [react(),VitePWA({ registerType: 'autoUpdate', includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-icon.webp',
            sizes: '512x512',
            type: 'image/png'
          }
  ]}
})
],
});
