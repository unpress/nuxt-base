// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // 'template-nuxt-layer'
    // '../nuxt-layer',
    '@wordup-md/nuxt-layer-shadcn-unocss',
    // 'nuxt-umami'
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/style.css',
  ],

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
    navigation: {
      fields: [
        'description',
        'icon',
        'media',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
        'prevNext',
        'breadcrumb',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  unocss: {
    nuxtLayers: true,
  },
})
