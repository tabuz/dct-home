<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  badgeText?: string;
  readArticleText?: string;
  viewAllButtonText?: string;
  viewAllButtonLink?: string;
}>();

const { data: posts } = await useAsyncData("latest-posts", () =>
  queryCollection("blog").order("date", "DESC").limit(3).all(),
);
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Header -->
      <div v-reveal class="mb-14">
        <div
          class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
        >
          {{ badgeText || "Insights" }}
        </div>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl max-w-2xl"
        >
          {{ headline }}
        </h2>
        <p class="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
          {{ subheadline }}
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <NuxtLink
          v-for="(post, i) in posts"
          :key="post.path"
          v-reveal="i * 100"
          :to="post.path"
          class="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/30"
        >
          <p
            class="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            {{
              new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </p>
          <h3
            class="mb-3 text-lg font-semibold leading-snug text-white group-hover:text-emerald-400 transition-colors duration-200"
          >
            {{ post.title }}
          </h3>
          <p class="mt-auto text-sm leading-relaxed text-zinc-400 line-clamp-3">
            {{ post.description }}
          </p>
          <div
            class="mt-6 flex items-center gap-1 text-sm font-medium text-emerald-400"
          >
            {{ readArticleText || "Read article" }}
            <UIcon
              name="i-heroicons-arrow-right-16-solid"
              class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </NuxtLink>
      </div>

      <!-- View all -->
      <div v-if="viewAllButtonText" class="mt-10">
        <UButton
          :to="viewAllButtonLink || '/blog'"
          variant="ghost"
          color="neutral"
          :label="viewAllButtonText"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800"
        />
      </div>
    </div>
  </section>
</template>
