<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  cases: Array<{
    company: string;
    body: string;
    metrics?: Array<{
      value: string;
      label: string;
    }>;
  }>;
}>();
</script>

<template>
  <section id="case-studies" class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Partner logos strip -->
      <div v-reveal class="mb-20 border-y border-zinc-800 py-10">
        <!-- <p
          class="mb-8 text-center text-xs font-medium uppercase tracking-widest text-zinc-500"
        >
          Trusted by UK construction leaders
        </p> -->
        <h2
          class="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {{ headline }}
        </h2>
        <p class="mt-6 max-w-3xl text-base text-zinc-400 sm:text-lg">
          {{ subheadline }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-16">
          <!-- Travis Perkins plc -->
          <a
            href="https://www.travisperkinsplc.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src="/logos/travis-perkins-plc-logo.png"
              alt="Travis Perkins plc"
              class="h-38 w-auto object-contain"
            />
          </a>
          <!-- Pam Building -->
          <a
            href="https://www.pambuilding.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src="/logos/pam-building-logo.png"
              alt="Pam Building"
              class="h-18 w-auto object-contain brightness-200"
            />
          </a>
          <!-- Carter Synergy -->
          <a
            href="https://cartersynergy.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src="/logos/carter-synergy-logo.svg"
              alt="Carter Synergy"
              class="h-12 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <!-- Hidden pending approval -->
      <!-- <div v-reveal="80" class="mb-16">
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
        
          <div v-if="item.metrics" class="mb-5 flex flex-wrap gap-3">
            <div
              v-for="(metric, mi) in item.metrics"
              :key="mi"
              class="flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-3 py-2"
            >
              <span class="text-lg font-bold text-emerald-400">{{ metric.value }}</span>
              <span class="text-xs text-zinc-400">{{ metric.label }}</span>
            </div>
          </div>

          <p class="text-sm leading-relaxed text-zinc-400">
            {{ item.body }}
          </p>
        </div>
      </div>

      <div v-reveal="240" class="mt-12 flex justify-center">
        <UButton
          to="#contact"
          size="lg"
          color="primary"
          label="Get results like these — book a free discovery call"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="transition-all duration-200 hover:brightness-110"
        />
      </div> -->
    </div>
  </section>
</template>
