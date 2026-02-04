const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const mobileNav = document.getElementById("nav-mobile")


hamburger.addEventListener("click", () => {
  handleToggle();
})

// Set inert when menu not visible to prevent the tab from accessing the links, and only make accessible when visible.

const setInert = (el, inert) => {
  if (!el) return;

  // check if browser supports native API
  if ('inert' in HTMLElement.prototype) {
    // set the native property to true/false - the subtree becomes non-interactive
    el.inert = inert;
  } else {
    // polyfill listens for attribute changes
    if (inert) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
  }

  el.setAttribute('aria-hidden', inert ? 'true' : 'false');
};


const handleToggle = () => {
  if (hamburger.getAttribute("aria-expanded") == "false") {

    hamburger.setAttribute("aria-expanded", true)

    overlay.classList.remove("hidden")

    nav.classList.remove('translate-x-full');
    nav.classList.add("pointer-events-auto");
    nav.classList.remove("pointer-events-none");

    menuIcon.classList.add("fa-close");
    menuIcon.classList.remove("fa-bars");

    setInert(mobileNav, false);

    console.log('expanded')
  }
  else {
    hamburger.setAttribute("aria-expanded", false)

    overlay.classList.add("hidden")

    nav.classList.add("translate-x-full")
    nav.classList.remove("pointer-events-auto");
    nav.classList.add("pointer-events-none");

    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");

    setInert(mobileNav, true);

    console.log('hidden')

  }
}