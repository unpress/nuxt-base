// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // 'template-nuxt-layer'
    // '../nuxt-layer',
    '@unpress/nuxt-layer',
    // 'nuxt-umami'
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/style.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  unocss: {
    nuxtLayers: true,
  },

})
