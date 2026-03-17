<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  steps: Array<{
    number: string;
    title: string;
    body: string;
  }>;
}>();
</script>

<template>
  <section
    id="process"
    class="relative overflow-hidden border-t border-zinc-800/60 py-24 lg:py-32"
  >
    <!-- Dot grid background -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025]"
      style="
        background-image: radial-gradient(circle, #71717a 1px, transparent 1px);
        background-size: 28px 28px;
      "
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <!-- Left-aligned header -->
      <div class="max-w-2xl">
        <div v-reveal class="mb-4">
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
          >
            How we work
          </span>
        </div>

        <h2
          v-reveal="80"
          class="text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {{ headline }}
        </h2>
        <p
          v-reveal="160"
          class="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {{ subheadline }}
        </p>
      </div>

      <!-- Steps -->
      <div class="relative mt-16">
        <!-- Connector line (desktop only) -->
        <div
          class="absolute left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] top-8 hidden h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
        />

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div
            v-for="(step, i) in steps"
            :key="i"
            v-reveal="i * 100"
            class="relative flex flex-col items-start gap-5 lg:items-center lg:text-center"
          >
            <!-- Mobile left-line connector (mobile only) -->
            <div
              v-if="i < steps.length - 1"
              class="absolute left-8 top-16 hidden h-full w-px bg-linear-to-b from-zinc-700 to-transparent sm:block lg:hidden"
            />

            <!-- Number bubble -->
            <div
              class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-zinc-900 ring-4 ring-zinc-950 transition-colors duration-200 group-hover:border-emerald-500"
            >
              <span class="text-lg font-bold text-emerald-400">{{
                step.number
              }}</span>
            </div>

            <div>
              <h3 class="text-base font-semibold text-white">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-zinc-400">
                {{ step.body }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div v-reveal="200" class="mt-14 flex justify-center">
        <UButton
          to="#contact"
          size="lg"
          color="primary"
          label="Start with a discovery call"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="transition-all duration-200 hover:brightness-110"
        />
      </div>
    </div>
  </section>
</template>
