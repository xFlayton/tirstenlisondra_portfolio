const navToggle = document.querySelector(".nav-toggle");
const navClose  = document.querySelector(".nav-close");
const overlay   = document.querySelector(".menu-overlay");

function setNavOpen(isOpen) {
  document.documentElement.classList.toggle("nav-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.classList.toggle("is-open", isOpen);

  navToggle.setAttribute("aria-expanded", String(isOpen));
  overlay.setAttribute("aria-hidden", String(!isOpen));
}

// hamburger click
navToggle.addEventListener("click", () => {
  const isOpen = !document.body.classList.contains("nav-open");
  setNavOpen(isOpen);
});

// close button click
navClose.addEventListener("click", () => {
  setNavOpen(false);
});

// (optional) close when clicking background
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) setNavOpen(false);
});