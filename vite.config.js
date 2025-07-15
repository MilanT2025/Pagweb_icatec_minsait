import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 MUY IMPORTANTE para que las rutas funcionen correctamente en producción
  plugins: [react()],
  server: {
    host: true,
  },
});
