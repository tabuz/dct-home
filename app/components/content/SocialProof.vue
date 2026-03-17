<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  cases: Array<{
    company: string;
    body: string;
  }>;
}>();

const logos: Record<string, { src: string; invert?: boolean }> = {
  "Travis Perkins plc": { src: "/logos/travis-perkins-plc-logo.png" },
  "Pam Building": { src: "/logos/pam-building-logo.png", invert: true },
};
</script>

<template>
  <section id="case-studies" class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Partner logos strip -->
      <div v-reveal class="mb-20 border-y border-zinc-800 py-10">
        <p
          class="mb-8 text-center text-xs font-medium uppercase tracking-widest text-zinc-500"
        >
          Trusted by UK construction leaders
        </p>
        <div class="flex flex-wrap items-center justify-center gap-16">
          <!-- Travis Perkins plc -->
          <div
            class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src="/logos/travis-perkins-plc-logo.png"
              alt="Travis Perkins plc"
              class="h-34 w-auto object-contain"
            />
          </div>
          <!-- Pam Building -->
          <div
            class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src="/logos/pam-building-logo.png"
              alt="Pam Building"
              class="h-20 w-auto object-contain brightness-200"
            />
          </div>
        </div>
      </div>

      <div v-reveal="80" class="mb-16">
        <div class="mb-4">
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
          >
            Case studies
          </span>
        </div>
        <h2
          class="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {{ headline }}
        </h2>
        <p class="mt-6 max-w-3xl text-base text-zinc-400 sm:text-lg">
          {{ subheadline }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(item, i) in cases"
          :key="i"
          v-reveal="i * 120"
          class="rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/30"
        >
          <div class="mb-5 flex items-center gap-3">
            <template v-if="logos[item.company]">
              <img
                :src="logos[item.company]!.src"
                :alt="item.company"
                :class="[
                  'h-9 w-auto object-contain opacity-90',
                  logos[item.company]!.invert ? 'brightness-200 grayscale' : '',
                ]"
              />
            </template>
            <template v-else>
              <span class="h-2 w-2 rounded-full bg-emerald-500" />
              <h3 class="text-lg font-semibold text-white">
                {{ item.company }}
              </h3>
            </template>
          </div>
          <p class="text-sm leading-relaxed text-zinc-400">
            {{ item.body }}
          </p>
        </div>
      </div>

      <!-- Results CTA -->
      <div v-reveal="240" class="mt-12 flex justify-center">
        <UButton
          to="#contact"
          size="lg"
          color="primary"
          label="Get results like these — book a free discovery call"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="transition-all duration-200 hover:brightness-110"
        />
      </div>
    </div>
  </section>
</template>
