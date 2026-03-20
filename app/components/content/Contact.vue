<script setup lang="ts">
import {
  trackCtaClick,
  trackFormStart,
  trackFormFieldInteract,
  trackFormSubmit,
  trackFormAbandon,
} from "~/composables/useTracking";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  challenge: "",
  message: "",
});

const state = ref<"idle" | "loading" | "success" | "error">("idle");
const errorMessage = ref("");
const formStarted = ref(false);
const lastField = ref("");

function onFieldFocus(fieldName: string) {
  if (!formStarted.value) {
    formStarted.value = true;
    trackFormStart();
  }
  lastField.value = fieldName;
  trackFormFieldInteract(fieldName);
}

async function submit() {
  state.value = "loading";
  errorMessage.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        challenge: form.challenge,
        message: form.message,
      },
    });
    state.value = "success";
    formStarted.value = false;
    trackFormSubmit();
  } catch (err: unknown) {
    state.value = "error";
    errorMessage.value =
      (err as { data?: { message?: string } })?.data?.message ||
      "Something went wrong. Please try again or email us directly.";
  }
}

onMounted(() => {
  const handleVisibilityChange = () => {
    if (
      document.visibilityState === "hidden" &&
      formStarted.value &&
      state.value !== "success"
    ) {
      trackFormAbandon(lastField.value);
    }
  };
  document.addEventListener("visibilitychange", handleVisibilityChange);
  onUnmounted(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  });
});
</script>

<template>
  <section id="contact" class="py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <!-- Left: copy -->
        <div v-reveal>
          <div
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Get in Touch
          </div>
          <h2
            class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let's talk.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-zinc-400">
            Whether you need to unlock a legacy ERP, build a Microsoft 365
            integration, or deploy an AI-driven field application — we'd love to
            hear about the challenge.
          </p>

          <dl class="mt-10 space-y-5 text-sm">
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-envelope"
                class="mt-0.5 shrink-0 text-lg text-emerald-400"
                aria-hidden="true"
              />
              <dt class="text-xs uppercase tracking-widest text-zinc-500">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hello@digitalconstruction.technology"
                  class="text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  hello@digitalconstruction.technology
                </a>
              </dd>
            </div>
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-map-pin"
                class="mt-0.5 shrink-0 text-lg text-emerald-400"
                aria-hidden="true"
              />
              <dt class="text-xs uppercase tracking-widest text-zinc-500">
                Office
              </dt>
              <dd class="text-zinc-300 leading-relaxed">
                Scrapstore House, 21 Sevier Street<br />
                Bristol, BS2 9LB<br />
                United Kingdom
              </dd>
            </div>
          </dl>
        </div>

        <!-- Right: form -->
        <div
          v-reveal="120"
          class="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 lg:p-10"
        >
          <!-- Success state -->
          <div
            v-if="state === 'success'"
            class="flex flex-col items-center justify-center gap-4 py-12 text-center"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30"
            >
              <UIcon
                name="i-heroicons-check"
                class="text-2xl text-emerald-400"
              />
            </div>
            <h3 class="text-xl font-semibold text-white">Message received.</h3>
            <p class="max-w-xs text-sm text-zinc-400">
              Thanks for reaching out. We'll be in touch shortly.
            </p>
            <UButton
              variant="ghost"
              color="neutral"
              label="Send another message"
              class="mt-2"
              @click="
                state = 'idle';
                Object.assign(form, {
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                });
              "
            />
          </div>

          <!-- Form -->
          <form
            v-else
            novalidate
            class="flex flex-col gap-5"
            @submit.prevent="submit"
          >
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <!-- Name -->
              <div class="flex flex-col gap-1.5">
                <label
                  for="contact-name"
                  class="text-xs font-medium uppercase tracking-widest text-zinc-400"
                >
                  Name <span class="text-emerald-400">*</span>
                </label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  placeholder="Jane Smith"
                  class="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  @focus="onFieldFocus('name')"
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-1.5">
                <label
                  for="contact-email"
                  class="text-xs font-medium uppercase tracking-widest text-zinc-400"
                >
                  Email <span class="text-emerald-400">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  placeholder="jane@company.com"
                  class="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  @focus="onFieldFocus('email')"
                />
              </div>
            </div>

            <!-- Phone -->
            <div class="flex flex-col gap-1.5">
              <label
                for="contact-phone"
                class="text-xs font-medium uppercase tracking-widest text-zinc-400"
              >
                Phone <span class="text-zinc-600">(optional)</span>
              </label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                autocomplete="tel"
                placeholder="+44 117 000 0000"
                class="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                @focus="onFieldFocus('phone')"
              />
            </div>

            <!-- Primary Challenge -->
            <div class="flex flex-col gap-1.5">
              <label
                for="contact-challenge"
                class="text-xs font-medium uppercase tracking-widest text-zinc-400"
              >
                Primary Challenge <span class="text-zinc-600">(optional)</span>
              </label>
              <select
                id="contact-challenge"
                v-model="form.challenge"
                name="challenge"
                class="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 [&>option]:bg-zinc-800"
                @focus="onFieldFocus('challenge')"
              >
                <option value="" disabled>
                  Select your primary challenge...
                </option>
                <option value="Legacy ERP data extraction">
                  Legacy ERP data extraction
                </option>
                <option value="Microsoft 365 / Google Workspace integration">
                  Microsoft 365 / Google Workspace integration
                </option>
                <option value="Field app development">
                  Field app development
                </option>
                <option value="AI workflow automation">
                  AI workflow automation
                </option>
                <option value="Database migration or modernisation">
                  Database migration or modernisation
                </option>
                <option value="Other">Other / Not sure yet</option>
              </select>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
              <label
                for="contact-message"
                class="text-xs font-medium uppercase tracking-widest text-zinc-400"
              >
                Message <span class="text-emerald-400">*</span>
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                required
                rows="5"
                placeholder="Tell us about your project, challenge, or question..."
                class="resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                @focus="onFieldFocus('message')"
              />
            </div>

            <!-- Error -->
            <p v-if="state === 'error'" class="text-sm text-red-400">
              {{ errorMessage }}
            </p>

            <!-- Submit -->
            <UButton
              type="submit"
              color="primary"
              size="lg"
              :loading="state === 'loading'"
              :disabled="!form.name || !form.email || !form.message"
              label="Submit"
              trailing-icon="i-heroicons-paper-airplane"
              class="w-full justify-center"
            />

            <p class="text-center text-xs text-zinc-600">
              By submitting this form you agree to our
              <NuxtLink
                to="/policies/privacy-policy"
                class="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
                >Privacy Policy</NuxtLink
              >.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
