export function initRevealAnimations() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  if (elements.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsObserver = "IntersectionObserver" in window;

  if (reduceMotion || !supportsObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    },
  );

  elements.forEach((element) => observer.observe(element));
  document.documentElement.classList.add("reveal-ready");

  // Elements already visible when the enhancement starts should never wait
  // for a full observer cycle before becoming readable.
  window.requestAnimationFrame(() => {
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.94) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    });
  });
}
