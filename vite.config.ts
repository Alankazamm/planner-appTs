import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },

    },
   
  },
  
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      'react-dom/client': 'react-dom/client',
    },
  },
})
