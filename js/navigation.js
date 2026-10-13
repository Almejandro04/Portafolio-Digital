const DESKTOP_BREAKPOINT = 768;

export function initNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-menu-panel]");
  const navigationLinks = [...document.querySelectorAll("[data-nav-link]")];
  const sections = [...document.querySelectorAll("[data-nav-section]")];

  if (!header || !toggle || !panel || navigationLinks.length === 0 || sections.length === 0) {
    return false;
  }

  let menuOpen = false;
  let frameRequested = false;

  const setMenuState = (open, { restoreFocus = false } = {}) => {
    menuOpen = open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    panel.dataset.open = String(open);
    header.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("nav-open", open);

    if (!open && restoreFocus) {
      toggle.focus();
    }
  };

  const focusSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const hadTabIndex = target.hasAttribute("tabindex");
    if (!hadTabIndex) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    if (!hadTabIndex) {
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
    }
  };

  toggle.addEventListener("click", () => {
    setMenuState(!menuOpen);
  });

  panel.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link) return;

    const targetId = link.getAttribute("href").slice(1);
    setMenuState(false);
    window.setTimeout(() => focusSection(targetId), 80);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      event.preventDefault();
      setMenuState(false, { restoreFocus: true });
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (menuOpen && !header.contains(event.target)) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT && menuOpen) {
      setMenuState(false);
    }
  });

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  const updateActiveLink = () => {
    const marker = window.scrollY + header.offsetHeight + window.innerHeight * 0.26;
    let activeTarget = sections[0].dataset.navSection;

    for (const section of sections) {
      if (section.offsetTop <= marker) {
        activeTarget = section.dataset.navSection;
      } else {
        break;
      }
    }

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      activeTarget = "contacto";
    }

    navigationLinks.forEach((link) => {
      const isActive = link.dataset.navLink === activeTarget;
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateOnScroll = () => {
    if (frameRequested) return;
    frameRequested = true;

    window.requestAnimationFrame(() => {
      updateHeader();
      updateActiveLink();
      frameRequested = false;
    });
  };

  window.addEventListener("scroll", updateOnScroll, { passive: true });
  updateHeader();
  updateActiveLink();

  return true;
}
