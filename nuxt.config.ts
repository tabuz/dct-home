// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/ui",
    "nuxt-studio",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",

  site: {
    url: "https://digitalconstruction.technology",
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-MHPLHP6G",
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  colorMode: {
    preference: "dark",
  },
  studio: {
    repository: {
      provider: "github",
      owner: "tabuz",
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
        {
          property: "og:url",
          content: "https://digitalconstruction.technology",
        },
        {
          property: "og:image",
          content: "https://digitalconstruction.technology/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          name: "twitter:image",
          content: "https://digitalconstruction.technology/og-image.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: "https://digitalconstruction.technology",
        },
      ],
    },
  },
});
