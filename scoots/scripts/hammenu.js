const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const heroHeader = document.querySelector(".hero-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    heroHeader.classList.toggle("menu-open");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    heroHeader.classList.remove("menu-open");
}))