<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => {
  return queryCollection("blog").path(`/blog/${route.params.slug}`).first();
});

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

useSeoMeta({
  title: () =>
    post.value?.title ? `${post.value.title} — DCT Blog` : "DCT Blog",
  description: () => post.value?.description ?? "",
  ogTitle: () => post.value?.title ?? "",
  ogDescription: () => post.value?.description ?? "",
  ogType: "article",
});
</script>

<template>
  <article class="py-24 lg:py-32">
    <div class="mx-auto max-w-3xl px-6">
      <NuxtLink
        to="/blog"
        class="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-emerald-400"
      >
        <UIcon name="i-heroicons-arrow-left" class="text-base" />
        Back to Blog
      </NuxtLink>

      <header class="mb-12">
        <time v-if="post?.date" class="text-sm text-gray-500">
          {{
            new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </time>
        <h1
          class="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {{ post?.title }}
        </h1>
        <p v-if="post?.description" class="mt-4 text-xl text-gray-400">
          {{ post.description }}
        </p>
        <div class="mt-6 h-px bg-zinc-800" />
      </header>

      <div
        class="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-p:text-zinc-400 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-li:text-zinc-400"
      >
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </div>
  </article>
</template>
