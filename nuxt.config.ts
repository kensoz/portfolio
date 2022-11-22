import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'RenHou',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'renhou portfolio site' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/portfolio/favicon.png' }]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/fontawesome.ts'],
  css: ['@/style/index.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome']
  }
})
