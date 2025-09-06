import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(), 
    tailwindcss(), 
    ...(process.env.NODE_ENV !== 'production' ? [ViteImageOptimizer({
      /* pass your config */
    })] : []),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
