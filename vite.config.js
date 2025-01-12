import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://primevue.org/autoimport/
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jakekohl.github.io/',
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
