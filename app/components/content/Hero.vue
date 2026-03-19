<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  badgeText?: string;
  trustIndicators?: Array<{ icon: string; text: string }>;
  stats?: Array<{ value: string; label: string }>;
}>();
</script>

<template>
  <section
    class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden"
  >
    <!-- Subtle grid background -->
    <div
      class="pointer-events-none absolute inset-0 opacity-50"
      style="
        background-image:
          linear-gradient(to right, #3f3f46 1px, transparent 1px),
          linear-gradient(to bottom, #3f3f46 1px, transparent 1px);
        background-size: 64px 64px;
      "
    />
    <!-- Fade edges on grid -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,transparent_60%,#09090b)]"
    />

    <!-- Single, minimal emerald glow behind the headline -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-100 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900/20 blur-[100px] animate-glow-breathe"
    />

    <div class="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <!-- Badge -->
      <div
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400 animate-fade-up"
      >
        <span
          class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-dot-pulse"
        />
        {{ badgeText || "Trusted by FTSE 250 Construction Leaders" }}
      </div>
      <h1
        class="bg-linear-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-7xl animate-fade-up"
        style="animation-delay: 120ms"
      >
        {{ headline }}
      </h1>
      <p
        class="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl animate-fade-up"
        style="animation-delay: 240ms"
      >
        {{ subheadline }}
      </p>

      <!-- Urgency micro-copy -->
      <div
        v-if="trustIndicators && trustIndicators.length > 0"
        class="mt-6 flex items-center justify-center gap-6 text-sm text-zinc-500 animate-fade-up"
        style="animation-delay: 310ms"
      >
        <template v-for="(indicator, index) in trustIndicators" :key="index">
          <span class="flex items-center gap-1.5">
            <UIcon :name="indicator.icon" class="text-emerald-500" />
            {{ indicator.text }}
          </span>
          <span
            v-if="index < trustIndicators.length - 1"
            class="h-3 w-px bg-zinc-700"
            :class="{ 'hidden sm:block': index >= 1 }"
          />
        </template>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
        style="animation-delay: 380ms"
      >
        <UButton
          :label="buttonText"
          :to="buttonLink"
          size="xl"
          color="primary"
          class="transition-all duration-200 hover:brightness-110 px-8"
        />
        <UButton
          v-if="secondaryButtonText"
          :label="secondaryButtonText"
          :to="secondaryButtonLink || '#'"
          size="xl"
          variant="ghost"
          color="neutral"
          class="border border-zinc-800 bg-zinc-900 text-white transition-all duration-200 hover:bg-zinc-800"
        />
      </div>

      <!-- Trust strip -->
      <!-- <div
        v-if="stats && stats.length > 0"
        class="mt-16 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 animate-fade-up"
        :class="{
          'grid-cols-2 sm:grid-cols-4': stats.length === 4,
          'grid-cols-2 sm:grid-cols-3': stats.length === 3,
          'grid-cols-2': stats.length === 2,
          'grid-cols-1': stats.length === 1,
        }"
        style="animation-delay: 520ms"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center gap-1 bg-zinc-900 px-6 py-5 text-center"
        >
          <span class="text-2xl font-bold text-emerald-400">{{
            stat.value
          }}</span>
          <span class="text-xs text-zinc-500">{{ stat.label }}</span>
        </div>
      </div> -->
    </div>
  </section>
</template>
