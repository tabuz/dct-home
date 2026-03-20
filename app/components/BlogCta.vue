<script setup lang="ts">
import { trackCtaClick } from "~/composables/useTracking";

defineProps<{
  heading: string;
  body: string;
  buttonText: string;
}>();
</script>

<template>
  <aside
    class="relative my-16 overflow-hidden rounded-xl border border-emerald-500/20 bg-zinc-900 p-10"
  >
    <!-- Dot grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="
        background-image: radial-gradient(circle, #71717a 1px, transparent 1px);
        background-size: 24px 24px;
      "
    />
    <!-- Corner brackets -->
    <div
      class="absolute left-4 top-4 h-5 w-5 border-l border-t border-emerald-500/30"
    />
    <div
      class="absolute right-4 top-4 h-5 w-5 border-r border-t border-emerald-500/30"
    />
    <div
      class="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-emerald-500/30"
    />
    <div
      class="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-emerald-500/30"
    />

    <div
      class="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="max-w-xl">
        <div
          class="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
        >
          How DCT can help
        </div>
        <h3 class="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {{ heading }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-zinc-400">
          {{ body }}
        </p>
      </div>
      <div class="shrink-0">
        <UButton
          to="/#contact"
          size="lg"
          color="primary"
          :label="buttonText"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="transition-all duration-200 hover:brightness-110"
          @click="trackCtaClick(buttonText, 'blog_cta')"
        />
      </div>
    </div>
  </aside>
</template>
