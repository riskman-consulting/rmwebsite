import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // ffmpeg.wasm spawns its worker via `new URL(..., import.meta.url)`, which
  // breaks if Vite pre-bundles it. Only the Studio's video input uses it.
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
  },
  server: {
    port: 3200,
    host: true,
  },
})
