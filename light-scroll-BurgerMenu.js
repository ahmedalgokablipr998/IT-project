// 1. Unified Theme Toggle
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "light" ? "dark" : "light";
    
    htmlElement.setAttribute("data-theme", targetTheme);
    
    // Update button text
    const btn = document.querySelector(".theme-btn") || document.getElementById("theme-btn");
    if (btn) {
        btn.innerHTML = targetTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
}

    localStorage.setItem("theme", targetTheme);

// Optional: To keep the theme after page refresh
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    const btn = document.querySelector(".theme-btn") || document.getElementById("theme-btn");
    if (btn) {
        btn.innerHTML = savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
});

// 2. Header & Mobile Menu Scroll Effect
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");

function handleScroll() {
  const scrollPos = window.scrollY || (mobileMenu ? mobileMenu.scrollTop : 0);
  if (scrollPos > 20) {
    if (header) header.classList.add("shrink");
    if (mobileMenu) mobileMenu.classList.add("shrink");
  } else {
    if (header) header.classList.remove("shrink");
    if (mobileMenu) mobileMenu.classList.remove("shrink");
  }
}

window.addEventListener("scroll", handleScroll);
if (mobileMenu) mobileMenu.addEventListener("scroll", handleScroll);

// 3. Burger Menu Logic
function burg() {
  const menu = document.getElementById("mobile-menu");
  const body = document.body;
  const footer = document.getElementById("footer");

  if (menu) menu.classList.toggle("active");
  if (body) body.classList.toggle("no-scroll");
  if (footer) footer.classList.toggle("active");
}

// 4. Dropdown Logic
function btn_drop() {
  const dbtn = document.getElementById("dbtn");
  if (dbtn) {
    const parentContainer = dbtn.closest(".dropdown");
    if (parentContainer) parentContainer.classList.toggle("dehover");
  }
}