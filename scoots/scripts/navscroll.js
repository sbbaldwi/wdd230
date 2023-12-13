window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Adjust the scroll position to trigger the change
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
