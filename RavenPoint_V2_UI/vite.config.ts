import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000
    
  },
  preview:{
    host:"0.0.0.0",
    port:8080
  },

  plugins: [react()],
})
