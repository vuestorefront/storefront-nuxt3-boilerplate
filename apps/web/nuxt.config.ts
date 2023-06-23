// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      title: 'Vue Storefront Nuxt3 Boilerplate',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'VSF x Nuxt3 (Boilerplate)' },
        { name: 'theme-color', content: '#018937' },
      ]
    },
  }
})
