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
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },
  appConfig: {
    titleSuffix: 'Vue Storefront Nuxt3 Boilerplate',
  },
  css: ['~/assets/style.scss'],
  image: {
    screens: {
      '4xl': '1920',
      '3xl': '1536',
      '2xl': '1366',
      xl: '1280',
      lg: '1024',
      md: '767',
      sm: '640',
      xs: '376',
      '2xs': '360',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Red Hat Display': [400, 500, 700],
          'Red Hat Text': [300, 400, 500, 700],
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
      },
    ],
    '@nuxt/image',
  ],
});
