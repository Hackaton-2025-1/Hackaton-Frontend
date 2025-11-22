import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Museu Sambaqui',
        short_name: 'Museu',
        description: 'Sistema de acervo para museu',
        theme_color: '#a67c52',
        background_color: '#f7f3ec',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/src/assets/imagens/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/src/assets/imagens/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
