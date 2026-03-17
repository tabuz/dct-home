<script setup lang="ts">
defineProps<{
  headline: string;
  pillars: Array<{
    title: string;
    icon: string;
    body: string;
    outcome?: string;
  }>;
}>();
</script>

<template>
  <section id="capabilities" class="relative overflow-hidden py-24 lg:py-32">
    <!-- Dot grid background -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025]"
      style="
        background-image: radial-gradient(circle, #71717a 1px, transparent 1px);
        background-size: 28px 28px;
      "
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <div v-reveal class="mb-4">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
        >
          What we build
        </span>
      </div>
      <h2
        v-reveal="80"
        class="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
      >
        {{ headline }}
      </h2>

      <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="(pillar, i) in pillars"
          :key="i"
          v-reveal="i * 100"
          class="group relative rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40"
        >
          <!-- Monospace index counter -->
          <span class="absolute right-6 top-6 font-mono text-xs text-zinc-700">
            {{ String(i + 1).padStart(2, "0") }}&nbsp;/
          </span>

          <div
            class="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800"
          >
            <UIcon :name="pillar.icon" class="text-xl text-emerald-400" />
          </div>
          <h3 class="text-lg font-semibold text-white">
            {{ pillar.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-zinc-400">
            {{ pillar.body }}
          </p>
          <!-- Outcome result chip -->
          <div
            v-if="pillar.outcome"
            class="mt-5 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 w-fit"
          >
            <UIcon
              name="i-heroicons-arrow-trending-up"
              class="text-sm text-emerald-400"
            />
            <span class="text-xs font-medium text-emerald-400">{{
              pillar.outcome
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
