import { defineConfig } from 'vite' // Importar la función defineConfig de Vite export comun
import react from '@vitejs/plugin-react' // Importar el plugin de React para Vite export default

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Agregar alias @ para la carpeta src
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
