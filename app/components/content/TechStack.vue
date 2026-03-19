<script setup lang="ts">
const technologies = [
  // {
  //   title: "Amazon Web Services (AWS)",
  //   iconUrl: "https://cdn.simpleicons.org/amazonwebservices",
  // },
  // {
  //   title: "Microsoft Azure",
  //   iconUrl: "https://cdn.simpleicons.org/microsoftazure",
  // },
  {
    title: "Google Cloud",
    iconUrl: "https://cdn.simpleicons.org/googlecloud",
  },
  {
    title: "Microsoft Azure",
    iconUrl:
      "https://az-icons.com/export/icons/6ae48fcbb84214de68fcba2540913934.svg",
  },
  {
    title: "PostgreSQL",
    iconUrl: "https://cdn.simpleicons.org/postgresql",
  },
  {
    title: "SAP",
    iconUrl: "https://cdn.simpleicons.org/sap",
  },
  { title: "Kubernetes", iconUrl: "https://cdn.simpleicons.org/kubernetes" },
  { title: "Docker", iconUrl: "https://cdn.simpleicons.org/docker" },
  { title: "Terraform", iconUrl: "https://cdn.simpleicons.org/terraform" },
  { title: "Cloudflare", iconUrl: "https://cdn.simpleicons.org/cloudflare" },
  { title: "Snowflake", iconUrl: "https://cdn.simpleicons.org/snowflake" },
  { title: "Datadog", iconUrl: "https://cdn.simpleicons.org/datadog" },
  { title: "Red Hat", iconUrl: "https://cdn.simpleicons.org/redhat" },
];
</script>

<template>
  <section class="border-y border-zinc-800/60 py-20 lg:py-24 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 mb-12">
      <!-- Label -->
      <div v-reveal class="mb-4 flex justify-center">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-400"
        >
          Technology agnostic
        </span>
      </div>

      <h2
        v-reveal="80"
        class="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl"
      >
        Your Stack Is Not a Barrier.
      </h2>
      <p
        v-reveal="160"
        class="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg"
      >
        We engineer solutions around the infrastructure you have. Not the
        infrastructure we prefer. Whatever ERP, cloud platform, or development
        environment you've inherited, we have a proven path forward.
      </p>
    </div>

    <!-- Marquee track -->
    <div v-reveal="220" class="relative" aria-label="Technologies we work with">
      <!-- Edge fade masks -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-zinc-950 to-transparent"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-zinc-950 to-transparent"
      />

      <!-- Scrolling strip -->
      <div
        class="flex w-max animate-marquee gap-12 px-6 motion-reduce:animate-none motion-reduce:justify-center motion-reduce:w-full motion-reduce:flex-wrap"
      >
        <!-- First set -->
        <div
          v-for="tech in technologies"
          :key="tech.title"
          class="flex shrink-0 flex-col items-center gap-3 group"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 p-3 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-zinc-800"
          >
            <img
              :src="tech.iconUrl"
              :alt="tech.title"
              class="h-7 w-7 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-90 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <span
            class="text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400 whitespace-nowrap"
          >
            {{ tech.title }}
          </span>
        </div>

        <!-- Duplicate set for seamless loop (aria-hidden) -->
        <div
          v-for="tech in technologies"
          :key="`dup-${tech.title}`"
          aria-hidden="true"
          class="flex shrink-0 flex-col items-center gap-3 group"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 p-3 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-zinc-800"
          >
            <img
              :src="tech.iconUrl"
              :alt="tech.title"
              class="h-7 w-7 object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-90 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <span
            class="text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400 whitespace-nowrap"
          >
            {{ tech.title }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
