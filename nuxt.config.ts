// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/ui",
    "nuxt-studio",
  ],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",
  colorMode: {
    preference: "dark",
  },
  studio: {
    repository: {
      provider: "github",
      owner: "digicontech",
      repo: "dct-home",
    },
  },
  app: {
    head: {
      title: "DCT — Elite Software Engineering for the Built Environment",
      htmlAttrs: { lang: "en-GB" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Digital Construction Technology architects AI-native workflows and headless ERP integrations for the UK's most demanding construction supply chains.",
        },
        { name: "author", content: "Digital Construction Technology" },
        {
          property: "og:site_name",
          content: "Digital Construction Technology",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "DCT — Elite Software Engineering for the Built Environment",
        },
        {
          property: "og:description",
          content:
            "Digital Construction Technology architects AI-native workflows and headless ERP integrations for the UK's most demanding construction supply chains.",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "DCT — Elite Software Engineering for the Built Environment",
        },
        {
          name: "twitter:description",
          content:
            "Digital Construction Technology architects AI-native workflows and headless ERP integrations for the UK's most demanding construction supply chains.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
