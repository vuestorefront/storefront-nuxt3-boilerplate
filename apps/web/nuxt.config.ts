// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'VSF x Nuxt3 (Boilerplate)' },
        { name: 'theme-color', content: '#018937' },
      ]
    },
  },
  appConfig: {
    titleSuffix: 'Vue Storefront Nuxt3 Boilerplate',
  },
})
