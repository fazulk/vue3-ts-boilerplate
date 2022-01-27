import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    strictPort: true
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
