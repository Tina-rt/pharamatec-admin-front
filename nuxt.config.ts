// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vee-validate/nuxt'],
  devtools: { enabled: true }
})