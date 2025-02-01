import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './', // La raíz del proyecto es la carpeta actual
  plugins: [react(), tailwindcss(),],
  build: {
    outDir: './dist', // La carpeta de salida está dentro de la raíz del proyecto
    emptyOutDir: true, // Vacía la carpeta de salida antes de construir
  },
});