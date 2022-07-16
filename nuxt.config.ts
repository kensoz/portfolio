import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'RenHou',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: ['@/assets/styles/tailwind.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  plugins: ['@/plugins/fontawesome.ts'],

  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],

    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
})
