import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**",
    }),
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        date: z.string(),
        cta: z
          .object({
            heading: z.string(),
            body: z.string(),
            buttonText: z.string(),
          })
          .optional(),
      }),
    }),
  },
});
