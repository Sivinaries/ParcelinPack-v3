import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '192.168.18.156', // Allow external access
    port: 5173, // Coba ubah port

  },
})
