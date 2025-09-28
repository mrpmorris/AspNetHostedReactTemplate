import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [plugin()],
   server: {
      port: Number(process.env.PORT) || 65002,
      strictPort: true,
      host: true,
      proxy: {
         '/api': {
            target: process.env.VITE_API_BASE,
            changeOrigin: true,
            secure: false
         }
      }
   },
   build: {
      outDir: '../AspNetHostedReactTemplate.WebServer/wwwroot',
      emptyOutDir: true
   }
});
