import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: '/library-app/',
  build: {
    outDir: 'dist',       // Ensure this is the directory you want to output
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  }
  
})
