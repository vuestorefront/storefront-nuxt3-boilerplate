// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Red Hat Display': [400, 500, 700],
        'Red Hat Text': [300, 400, 500, 700]
      }
    }]
  ],
})
