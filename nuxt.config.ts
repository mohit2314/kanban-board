// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:["@nuxtjs/tailwindcss","@vueuse/nuxt"], // here define those dependcies which you are going to use globally in application, rest dependencies which we'll directly use inside file by importing don't need to register them over here
  ssr:false
})
