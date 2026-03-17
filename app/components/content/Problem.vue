<script setup lang="ts">
defineProps<{
  headline: string;
}>();
</script>

<template>
  <section class="relative overflow-hidden py-24 lg:py-32">
    <!-- Dot grid background -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.035]"
      style="
        background-image: radial-gradient(circle, #71717a 1px, transparent 1px);
        background-size: 28px 28px;
      "
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <div
        v-reveal
        class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <!-- Left: copy -->
        <div>
          <div
            class="mb-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
          >
            The Problem
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {{ headline }}
          </h2>
          <div class="mt-4 h-px w-20 bg-emerald-500" />
          <div
            class="mt-8 text-base leading-relaxed text-zinc-400 [&>p]:mt-4 first:[&>p]:mt-0"
          >
            <slot />
          </div>
        </div>

        <!-- Right: terminal decoration (desktop only) -->
        <div class="hidden lg:block">
          <div
            class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-zinc-950/80"
          >
            <!-- Window chrome -->
            <div
              class="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3"
            >
              <span class="h-3 w-3 rounded-full bg-zinc-700" />
              <span class="h-3 w-3 rounded-full bg-zinc-700" />
              <span class="h-3 w-3 rounded-full bg-zinc-700" />
              <span class="ml-3 font-mono text-xs text-zinc-600"
                >dct-connect — audit</span
              >
            </div>
            <!-- Terminal output -->
            <div class="space-y-0.5 p-6 font-mono text-xs leading-6">
              <p class="text-zinc-600">
                $ dct audit --erp legacy --mode non-disruptive
              </p>
              <p class="mt-2 text-zinc-500">
                ▸&nbsp; Scanning infrastructure...
              </p>
              <p class="text-zinc-500">▸&nbsp; Mapping data boundaries...</p>

              <div class="mt-3 space-y-1">
                <p>
                  <span class="text-emerald-400">[ ✓ ]</span>
                  <span class="ml-2 text-zinc-400">Financial ledger</span>
                  <span class="ml-2 text-zinc-600">— protected, untouched</span>
                </p>
                <p>
                  <span class="text-red-400">[ ✗ ]</span>
                  <span class="ml-2 text-zinc-400">Sales pipeline</span>
                  <span class="ml-2 text-zinc-600">— inaccessible</span>
                </p>
                <p>
                  <span class="text-red-400">[ ✗ ]</span>
                  <span class="ml-2 text-zinc-400">Commercial data</span>
                  <span class="ml-2 text-zinc-600">— locked in ERP</span>
                </p>
                <p>
                  <span class="text-yellow-500">[ ! ]</span>
                  <span class="ml-2 text-zinc-400">Field operations</span>
                  <span class="ml-2 text-zinc-600">— manual process</span>
                </p>
              </div>

              <p class="mt-3 text-zinc-500">
                ▸&nbsp; Architecture proposal ready.
              </p>
              <p class="mt-3 text-zinc-600">
                $ dct extract --no-disruption --output modern-api
              </p>

              <div class="mt-2 space-y-1">
                <p>
                  <span class="text-emerald-400">[ ✓ ]</span>
                  <span class="ml-2 text-zinc-400"
                    >Middleware layer deployed</span
                  >
                </p>
                <p>
                  <span class="text-emerald-400">[ ✓ ]</span>
                  <span class="ml-2 text-zinc-400"
                    >Secure API bridge active</span
                  >
                </p>
                <p>
                  <span class="text-emerald-400">[ ✓ ]</span>
                  <span class="ml-2 text-zinc-400"
                    >Real-time sync established</span
                  >
                </p>
              </div>

              <p class="mt-4 text-zinc-700">
                // 0 disruptions &middot; core ledger intact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
