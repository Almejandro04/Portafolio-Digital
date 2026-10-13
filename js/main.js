import { initNavigation } from "./navigation.js";
import { initRevealAnimations } from "./animations.js";

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  if (!copied) throw new Error("El navegador no permitió copiar el texto.");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Some browsers expose the API but deny it. The local fallback keeps
      // the action usable when possible.
    }
  }

  fallbackCopy(text);
}

function initCopyEmail() {
  const button = document.querySelector("[data-copy-email]");
  const label = button?.querySelector("[data-copy-label]");
  const status = document.querySelector("[data-copy-status]");
  const emailLink = document.querySelector(".contact-card--email");

  if (!button || !label || !status) return;

  const defaultLabel = label.textContent;
  let resetTimer;

  button.addEventListener("click", async () => {
    window.clearTimeout(resetTimer);
    button.classList.remove("is-success", "is-error");

    try {
      await copyText(button.dataset.email);
      label.textContent = "Correo copiado";
      status.textContent = "Correo electrónico copiado al portapapeles.";
      button.classList.add("is-success");
    } catch {
      label.textContent = "No se pudo copiar";
      status.textContent = "No se pudo copiar el correo. El enlace de correo está disponible para seleccionarlo.";
      button.classList.add("is-error");
      emailLink?.focus();
    }

    resetTimer = window.setTimeout(() => {
      label.textContent = defaultLabel;
      button.classList.remove("is-success", "is-error");
    }, 2800);
  });
}

function setCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });
}

function init() {
  try {
    if (initNavigation()) {
      document.documentElement.classList.add("js");
      document.documentElement.dataset.jsReady = "true";
    }
  } catch (error) {
    console.error("No se pudo iniciar la navegación mejorada.", error);
  }

  try {
    initRevealAnimations();
  } catch (error) {
    console.error("No se pudieron iniciar las animaciones progresivas.", error);
  }

  initCopyEmail();
  setCurrentYear();
}

init();
