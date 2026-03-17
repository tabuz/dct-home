<script setup lang="ts">
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white antialiased">
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md transition-shadow duration-300"
      :class="scrolled ? 'shadow-xl shadow-zinc-950/60' : ''"
    >
      <div
        class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="group flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Digital Construction Technology — Home"
        >
          <img
            src="/logos/logo_dct.png"
            alt="Digital Construction Technology"
            class="h-8 w-auto"
            style="filter: brightness(0) invert(1)"
          />
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 sm:flex">
          <UButton to="/" variant="ghost" color="neutral" label="Home" />
          <UButton
            to="/#capabilities"
            variant="ghost"
            color="neutral"
            label="Services"
          />
          <UButton to="/blog" variant="ghost" color="neutral" label="Blog" />
          <UButton
            to="/#contact"
            color="primary"
            variant="solid"
            label="Get in Touch"
            trailing-icon="i-heroicons-arrow-right-16-solid"
          />
        </div>

        <!-- Mobile hamburger -->
        <button
          class="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white sm:hidden"
          aria-label="Open navigation"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <UIcon
            :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            class="h-5 w-5"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="border-t border-zinc-800 bg-zinc-950 px-6 pb-6 pt-4 sm:hidden"
        >
          <div class="flex flex-col gap-1">
            <NuxtLink
              to="/"
              class="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              @click="mobileMenuOpen = false"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/#capabilities"
              class="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              @click="mobileMenuOpen = false"
            >
              Services
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              @click="mobileMenuOpen = false"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/#contact"
              class="mt-2 rounded-lg bg-emerald-600 px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-500"
              @click="mobileMenuOpen = false"
            >
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Main content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="border-t border-zinc-800 bg-zinc-950"
      itemscope
      itemtype="https://schema.org/Organization"
    >
      <div class="mx-auto max-w-7xl px-6 py-16">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <!-- Brand column -->
          <div class="lg:col-span-2">
            <NuxtLink to="/" class="inline-block">
              <img
                src="/logos/logo_dct.png"
                alt="Digital Construction Technology"
                class="h-9 w-auto"
                style="filter: brightness(0) invert(1)"
                itemprop="logo"
              />
            </NuxtLink>
            <p
              class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400"
              itemprop="description"
            >
              Elite software engineering for the UK built environment. We
              architect AI-native workflows and headless ERP integrations for
              the UK's most demanding construction supply chains.
            </p>
            <address
              class="mt-5 not-italic text-sm text-zinc-500 leading-relaxed"
              itemprop="address"
              itemscope
              itemtype="https://schema.org/PostalAddress"
            >
              <span itemprop="name">Digital Construction Technology</span><br />
              <span itemprop="streetAddress"
                >Scrapstore House, 21 Sevier Street</span
              ><br />
              <span itemprop="addressLocality">Bristol</span>,
              <span itemprop="postalCode">BS2 9LB</span><br />
              <span itemprop="addressCountry">United Kingdom</span>
            </address>
            <a
              href="mailto:hello@digitalconstruction.technology"
              class="mt-3 inline-block text-sm text-emerald-400 transition-colors hover:text-emerald-300"
              itemprop="email"
            >
              hello@digitalconstruction.technology
            </a>
            <div class="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/digitalconstructiontechnology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DCT on LinkedIn"
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-500 transition-colors hover:border-zinc-700 hover:text-zinc-300"
              >
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Services column -->
          <div>
            <h3
              class="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400"
            >
              Services
            </h3>
            <ul class="space-y-2.5 text-sm text-zinc-500">
              <li>
                <span
                  class="transition-colors hover:text-zinc-300 cursor-default"
                  >Headless ERP Architecture</span
                >
              </li>
              <li>
                <span
                  class="transition-colors hover:text-zinc-300 cursor-default"
                  >Office-Native Integrations</span
                >
              </li>
              <li>
                <span
                  class="transition-colors hover:text-zinc-300 cursor-default"
                  >Field-First Mobile Apps</span
                >
              </li>
              <li>
                <span
                  class="transition-colors hover:text-zinc-300 cursor-default"
                  >AI Workflow Orchestration</span
                >
              </li>
              <li>
                <span
                  class="transition-colors hover:text-zinc-300 cursor-default"
                  >Data Infrastructure</span
                >
              </li>
            </ul>
          </div>

          <!-- Company column -->
          <div>
            <h3
              class="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400"
            >
              Company
            </h3>
            <ul class="space-y-2.5 text-sm">
              <li>
                <NuxtLink
                  to="/blog"
                  class="text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#contact"
                  class="text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/policies/privacy-policy"
                  class="text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/policies/terms-and-conditions"
                  class="text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  Terms &amp; Conditions
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div
          class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center"
        >
          <p class="text-xs text-zinc-600">
            &copy; {{ new Date().getFullYear() }} Digital Construction
            Technology Ltd. All rights reserved.
          </p>
          <p class="text-xs text-zinc-700">
            Registered in England &amp; Wales · Bristol, UK
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
