import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    port:3000
    
  },
  preview:{
    host:"0.0.0.0",
    port:8080
  },

  plugins: [react()],
})
