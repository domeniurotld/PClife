// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue-3/dist/bootstrap-vue-3.css',
    '~/assets/css/global.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap-vue.js', mode: 'client' }
  ],
  build: {
    transpile: ['bootstrap-vue-3']
  },

  modules: ['@nuxt/icon']
})
