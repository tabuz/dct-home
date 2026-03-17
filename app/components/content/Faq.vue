<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}>();

const openIndex = ref<number | null>(0);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="mx-auto max-w-3xl px-6">
      <!-- Label -->
      <div v-reveal class="mb-4 flex justify-center">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
        >
          Common questions
        </span>
      </div>

      <h2
        v-reveal="80"
        class="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl"
      >
        {{ headline }}
      </h2>
      <p
        v-reveal="160"
        class="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-zinc-400"
      >
        {{ subheadline }}
      </p>

      <!-- Accordion -->
      <div
        v-reveal="240"
        class="mt-12 divide-y divide-zinc-800 rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden"
      >
        <div v-for="(item, i) in items" :key="i">
          <button
            class="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors duration-150 hover:bg-zinc-800/50"
            @click="toggle(i)"
          >
            <span class="text-sm font-semibold text-white sm:text-base">{{
              item.question
            }}</span>
            <UIcon
              :name="
                openIndex === i
                  ? 'i-heroicons-minus-small'
                  : 'i-heroicons-plus-small'
              "
              class="mt-0.5 h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-200"
            />
          </button>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div
              v-if="openIndex === i"
              class="border-t border-zinc-800 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-400"
            >
              {{ item.answer }}
            </div>
          </Transition>
        </div>
      </div>

      <!-- Post-FAQ CTA -->
      <div v-reveal="320" class="mt-12 text-center">
        <p class="mb-5 text-base text-zinc-400">
          Still have questions? We're happy to answer them on a quick call.
        </p>
        <UButton
          to="#contact"
          size="lg"
          color="primary"
          label="Book a Free 30-Min Call"
          trailing-icon="i-heroicons-arrow-right-16-solid"
          class="transition-all duration-200 hover:brightness-110"
        />
      </div>
    </div>
  </section>
</template>
