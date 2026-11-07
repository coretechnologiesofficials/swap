import { defineConfig } from 'vite'
import react from '../frontend/node_modules/@vitejs/plugin-react/dist/index.mjs'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
