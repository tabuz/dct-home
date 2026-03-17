<script setup lang="ts">
useSeoMeta({
  title: "Blog — DCT Engineering Intelligence",
  description:
    "Perspectives on headless ERP architecture, AI orchestration, and the future of construction technology from the team building it.",
});

const { data: posts } = await useAsyncData("blog-list", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

function readingTime(body: unknown): string {
  const text = JSON.stringify(body ?? "");
  const words = text.split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

const featured = computed(() => posts.value?.[0] ?? null);
const rest = computed(() => posts.value?.slice(1) ?? []);
</script>

<template>
  <div class="min-h-screen py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Page header -->
      <div class="mb-16 max-w-2xl">
        <div class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400">
          Insights
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Engineering Intelligence,<br class="hidden sm:block"> Shared Openly.
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-zinc-400">
          Perspectives on headless ERP architecture, AI orchestration, and the future of construction technology — from the team building it.
        </p>
      </div>

      <!-- Featured post -->
      <NuxtLink
        v-if="featured"
        :to="featured.path"
        class="group mb-12 grid grid-cols-1 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-200 hover:border-emerald-500/40 lg:grid-cols-5"
      >
        <!-- Left: large text block -->
        <div class="flex flex-col justify-between p-10 lg:col-span-3 lg:p-14">
          <div>
            <div class="mb-5 flex items-center gap-3">
              <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Latest
              </span>
              <time v-if="featured.date" class="text-xs text-zinc-500">
                {{ new Date(featured.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }) }}
              </time>
              <span class="text-xs text-zinc-600">·</span>
              <span class="text-xs text-zinc-600">{{ readingTime(featured.body) }}</span>
            </div>
            <h2 class="text-2xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-emerald-400 sm:text-3xl">
              {{ featured.title }}
            </h2>
            <p v-if="featured.description" class="mt-4 text-base leading-relaxed text-zinc-400">
              {{ featured.description }}
            </p>
          </div>
          <div class="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-400">
            Read article
            <UIcon name="i-heroicons-arrow-right-16-solid" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>

        <!-- Right: decorative terminal panel -->
        <div class="hidden items-center justify-center border-l border-zinc-800 bg-zinc-950 p-10 lg:col-span-2 lg:flex">
          <div class="w-full max-w-xs font-mono text-xs leading-6">
            <p class="text-zinc-600">$ dct read --latest</p>
            <p class="mt-2 text-zinc-500">▸&nbsp; Fetching latest insight...</p>
            <p class="mt-3 text-emerald-400">[ ✓ ] Article ready</p>
            <p class="mt-1 text-zinc-400 line-clamp-2">{{ featured.title }}</p>
            <p class="mt-3 text-zinc-700">// {{ new Date(featured.date).toISOString().slice(0, 10) }}</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Rest of posts -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in rest"
          :key="post.path"
          :to="post.path"
          class="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40"
        >
          <div class="mb-4 flex items-center gap-2">
            <time v-if="post.date" class="text-xs text-zinc-500">
              {{ new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }) }}
            </time>
            <span class="text-xs text-zinc-700">·</span>
            <span class="text-xs text-zinc-600">{{ readingTime(post.body) }}</span>
          </div>
          <h2 class="flex-1 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-emerald-400">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
            {{ post.description }}
          </p>
          <div class="mt-6 flex items-center gap-1 text-sm font-medium text-emerald-400">
            Read article
            <UIcon name="i-heroicons-arrow-right-16-solid" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </NuxtLink>
      </div>

      <div v-if="!posts?.length" class="mt-16 text-zinc-500">
        No posts yet. Check back soon.
      </div>

    </div>
  </div>
</template>
