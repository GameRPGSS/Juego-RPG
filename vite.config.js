import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  assetsDir: 'assets',
  server: {
    port: 443 // Cambiar el puerto por defecto
  }
})
