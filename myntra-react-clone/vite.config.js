import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api': "http://localhost:8080",    //jb backend laptop se live kr rhe the
      '/api': "https://myntra-backend-kbnv.onrender.com/",    //backend deploy krne ke baad
    },
  },
  plugins: [react()],
})
