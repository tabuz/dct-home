<script setup lang="ts">
const route = useRoute();

// Fetch current post
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection("blog").path(`/blog/${route.params.slug}`).first(),
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

// Fetch all posts sorted by date desc for prev/next
const { data: allPosts } = await useAsyncData("blog-nav", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

const currentIndex = computed(
  () => allPosts.value?.findIndex((p) => p.path === post.value?.path) ?? -1,
);
const prevPost = computed(() =>
  currentIndex.value < (allPosts.value?.length ?? 0) - 1
    ? allPosts.value![currentIndex.value + 1]
    : null,
);
const nextPost = computed(() =>
  currentIndex.value > 0 ? allPosts.value![currentIndex.value - 1] : null,
);

// Build ToC from h2/h3 nodes in the body AST
type TocItem = { id: string; text: string; depth: number };
function extractToc(body: unknown): TocItem[] {
  if (!body || typeof body !== "object") return [];
  const items: TocItem[] = [];
  function walk(node: unknown) {
    if (!node || typeof node !== "object") return;
    const n = node as Record<string, unknown>;
    if (n.type === "element" && (n.tag === "h2" || n.tag === "h3")) {
      const id = (n.props as Record<string, string>)?.id ?? "";
      const text = extractText(n.children);
      if (text) items.push({ id, text, depth: n.tag === "h2" ? 2 : 3 });
    }
    if (Array.isArray(n.children)) n.children.forEach(walk);
    if (Array.isArray(n.body)) n.body.forEach(walk);
  }
  walk(body);
  return items;
}
function extractText(children: unknown): string {
  if (!Array.isArray(children)) return "";
  return children
    .map((c: unknown) => {
      if (!c || typeof c !== "object") return "";
      const ch = c as Record<string, unknown>;
      if (ch.type === "text") return String(ch.value ?? "");
      return extractText(ch.children);
    })
    .join("");
}

const toc = computed(() => extractToc(post.value?.body));

// Reading time
function readingTime(body: unknown): string {
  const words = JSON.stringify(body ?? "").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
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
  <div class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Back link -->
      <NuxtLink
        to="/blog"
        class="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-emerald-400"
      >
        <UIcon name="i-heroicons-arrow-left" class="text-base" />
        Back to Blog
      </NuxtLink>

      <div class="flex gap-16 xl:gap-20 xl:justify-center">
        <!-- ── Main content column ── -->
        <article class="min-w-0 w-full max-w-2xl">
          <!-- Post header -->
          <header class="mb-12">
            <div class="mb-4 flex flex-wrap items-center gap-3">
              <time v-if="post?.date" class="text-sm text-zinc-500">
                {{
                  new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </time>
              <span class="text-zinc-700">·</span>
              <span class="text-sm text-zinc-600">{{
                readingTime(post?.body)
              }}</span>
            </div>
            <h1
              class="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {{ post?.title }}
            </h1>
            <p
              v-if="post?.description"
              class="mt-5 text-xl leading-relaxed text-zinc-400"
            >
              {{ post.description }}
            </p>
            <div class="mt-8 h-px bg-zinc-800" />
          </header>

          <!-- Body -->
          <div
            class="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-zinc-400 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-li:text-zinc-400 prose-code:text-emerald-300 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-emerald-500/40 prose-blockquote:text-zinc-400"
          >
            <ContentRenderer v-if="post" :value="post" />
          </div>

          <!-- Per-post CTA -->
          <BlogCta
            v-if="post?.cta"
            :heading="post.cta.heading"
            :body="post.cta.body"
            :button-text="post.cta.buttonText"
          />

          <!-- Prev / Next navigation -->
          <nav
            class="mt-12 grid grid-cols-1 gap-4 border-t border-zinc-800 pt-10 sm:grid-cols-2"
            aria-label="Post navigation"
          >
            <NuxtLink
              v-if="prevPost"
              :to="prevPost.path"
              class="group flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-emerald-500/40"
            >
              <div class="flex items-center gap-1.5 text-xs text-zinc-500">
                <UIcon name="i-heroicons-arrow-left" class="h-3.5 w-3.5" />
                Previous
              </div>
              <p
                class="text-sm font-semibold leading-snug text-white transition-colors group-hover:text-emerald-400"
              >
                {{ prevPost.title }}
              </p>
            </NuxtLink>
            <div v-else />

            <NuxtLink
              v-if="nextPost"
              :to="nextPost.path"
              class="group flex flex-col items-end gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-right transition-all duration-200 hover:border-emerald-500/40"
            >
              <div class="flex items-center gap-1.5 text-xs text-zinc-500">
                Next
                <UIcon name="i-heroicons-arrow-right" class="h-3.5 w-3.5" />
              </div>
              <p
                class="text-sm font-semibold leading-snug text-white transition-colors group-hover:text-emerald-400"
              >
                {{ nextPost.title }}
              </p>
            </NuxtLink>
          </nav>
        </article>

        <!-- ── ToC sidebar (desktop only) ── -->
        <aside
          v-if="toc.length"
          class="hidden w-56 shrink-0 xl:block"
          aria-label="Table of contents"
        >
          <div class="sticky top-28">
            <p
              class="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500"
            >
              In this article
            </p>
            <nav class="flex flex-col gap-1">
              <a
                v-for="item in toc"
                :key="item.id"
                :href="`#${item.id}`"
                class="group flex items-start gap-2 text-sm leading-snug text-zinc-500 transition-colors hover:text-zinc-200"
                :class="item.depth === 3 ? 'pl-3' : ''"
              >
                <span
                  class="mt-2 h-px w-3 shrink-0 bg-zinc-700 transition-colors group-hover:bg-emerald-500"
                  :class="item.depth === 3 ? 'w-2' : 'w-3'"
                />
                {{ item.text }}
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
