import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/upcse/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
