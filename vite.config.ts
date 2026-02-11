import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/insa/',
  build: {
    // Especifica el nombre de la carpeta de salida aquí
    outDir: 'docs', 
  },
});
 