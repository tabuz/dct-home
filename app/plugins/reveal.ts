export default defineNuxtPlugin((nuxtApp) => {
  // IntersectionObserver only exists in the browser
  const observer = import.meta.client
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -52px 0px" },
      )
    : null;

  nuxtApp.vueApp.directive("reveal", {
    // Required by Vue SSR — return empty props so the server skips the directive
    getSSRProps() {
      return {};
    },
    mounted(el: HTMLElement, binding) {
      el.classList.add("reveal");
      if (typeof binding.value === "number" && binding.value > 0) {
        el.style.setProperty("--reveal-delay", `${binding.value}ms`);
      }
      if (observer) requestAnimationFrame(() => observer.observe(el));
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el);
    },
  });
});
