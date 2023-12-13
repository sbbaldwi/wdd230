const navbar = document.querySelector(".navbar");
let scrolled = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the effect to start
        if (!scrolled) {
            navbar.classList.add("scrolled");
            scrolled = true;
        }
    } else {
        if (scrolled) {
            navbar.classList.remove("scrolled");
            scrolled = false;
        }
    }
});