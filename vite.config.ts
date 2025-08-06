import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss()],
  base: '/', // Ensure this is set correctly for your deployment
  server: {
    fs:{
      strict: false, // Allow serving files outside of the root directory
    },
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Organize assets properly
    emptyOutDir: true, // Clear dist folder before build
  },
  
})
