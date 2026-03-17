<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: () => page.value?.title ?? "DCT",
  description: () => page.value?.description ?? "",
});
</script>

<template>
  <article class="py-24 lg:py-32">
    <div class="mx-auto max-w-3xl px-6">
      <header v-if="page?.title" class="mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {{ page.title }}
        </h1>
        <div class="mt-6 h-px bg-zinc-800" />
      </header>

      <div
        class="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-p:text-zinc-400 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-li:text-zinc-400 prose-blockquote:border-emerald-500 prose-blockquote:text-zinc-400 prose-hr:border-zinc-800"
      >
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </div>
  </article>
</template>
