import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://guido2288.github.io/pokeApp/",
  plugins: [react()]
})
