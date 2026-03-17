<script setup lang="ts">
defineProps<{
  headline: string;
  buttonText: string;
  buttonLink: string;
}>();
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="mx-auto max-w-4xl px-6">
      <!-- CTA card -->
      <div
        v-reveal
        class="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-12 text-center md:p-20"
      >
        <!-- Dot grid background inside card -->
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.04]"
          style="
            background-image: radial-gradient(
              circle,
              #71717a 1px,
              transparent 1px
            );
            background-size: 24px 24px;
          "
        />
        <!-- Corner bracket decorations -->
        <div
          class="absolute left-5 top-5 h-6 w-6 border-l border-t border-emerald-500/25"
        />
        <div
          class="absolute right-5 top-5 h-6 w-6 border-r border-t border-emerald-500/25"
        />
        <div
          class="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-emerald-500/25"
        />
        <div
          class="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-emerald-500/25"
        />
        <!-- Top emerald accent -->
        <div class="mb-6 flex justify-center">
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
          >
            Get in touch
          </span>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {{ headline }}
        </h2>
        <div
          class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 [&>p]:mt-4 first:[&>p]:mt-0"
        >
          <slot />
        </div>

        <!-- Risk reversal micro-copy -->
        <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div class="flex items-center gap-2 text-sm text-zinc-500">
            <UIcon name="i-heroicons-shield-check" class="text-emerald-500" />
            <span>No obligation</span>
          </div>
          <span class="hidden h-3 w-px bg-zinc-700 sm:block" />
          <div class="flex items-center gap-2 text-sm text-zinc-500">
            <UIcon name="i-heroicons-document-minus" class="text-emerald-500" />
            <span>No pitch deck</span>
          </div>
          <span class="hidden h-3 w-px bg-zinc-700 sm:block" />
          <div class="flex items-center gap-2 text-sm text-zinc-500">
            <UIcon name="i-heroicons-clock" class="text-emerald-500" />
            <span>30 minutes, focused</span>
          </div>
        </div>

        <div class="mt-10">
          <UButton
            :label="buttonText"
            :to="buttonLink"
            size="xl"
            color="primary"
            class="transition-all duration-200 hover:brightness-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>
