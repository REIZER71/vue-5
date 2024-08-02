import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url"
export default defineConfig({
  resolve: { 
    alias: {  
        "@": fileURLToPath(new URL('./src/components', import.meta.url)),
    },  
}, 
  plugins: [vue()],
})
