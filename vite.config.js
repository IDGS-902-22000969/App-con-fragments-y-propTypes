
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['favicon.svg'],

      manifest: {
        name: 'Lenguajes de programación',
        short_name: 'Lenguajes',
        description:
          'Aplicación para explorar lenguajes de programación, conocer para qué se usan y cuándo aparecieron.',
        theme_color: '#863bff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'imagen192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'imagen512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'imagen512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webmanifest}',
        ],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
