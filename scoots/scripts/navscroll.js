const navbar = document.querySelector(".navbar");
let scrolled = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
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