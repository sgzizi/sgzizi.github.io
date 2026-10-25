/* The only interaction is the small-screen navigation menu. */
(() => {
  "use strict";
  document.documentElement.classList.replace("no-js", "js");
  const nav = document.getElementById("site-nav");
  const toggle = nav?.querySelector(".menu-toggle");
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("close", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };
  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });
})();
/* Maintenance annotation; functional content is unchanged. */
