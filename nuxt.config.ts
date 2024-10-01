// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '',
      apiParent: '',
    }
  },
  compatibilityDate: '2024-04-03',
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  devtools: { enabled: true }
})