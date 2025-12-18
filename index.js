/**
 * Event handler harmburger icon
 */
const harmburgerIcon = document.getElementById("hermburger");
const mobileNav = document.getElementById("nav__item");
harmburgerIcon.addEventListener("click", () => {
  const check = mobileNav.classList.contains("active");
  if (!check) {
    mobileNav.classList.add("active");
  } else {
    mobileNav.classList.remove("active");
  }
});

/**
 * Event handler for closing mobile navigation
 */
mobileNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

/**
 * event handler for scrollbar
 */
window.addEventListener("scroll", () => {
  // handler for header class toggle
  const header = document.getElementById("header");
  if (header) {
    header.classList.toggle("header", window.pageYOffset > 40);
  }

  // handler for progress bar
  const progressBar = document.getElementById("progress__bar");
  if (!progressBar) return;

  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  progressBar.style.display = scrolled === 0 ? "none" : "block";
  progressBar.style.backgroundColor = "#cc0066";
  progressBar.style.width = `${scrolled}%`;
});

// current year for footer
const currentYear = new Date().getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

// company link span handler
document.querySelectorAll(".link-span").forEach((el) => {
  const url = "https://topvu.ca/";

  el.setAttribute("role", "link");
  el.setAttribute("tabindex", "0");
  el.style.cursor = "pointer";

  const open = () => window.open(url, "_blank", "noopener,noreferrer");

  el.addEventListener("click", open);

  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      open();
    }
  });
});
