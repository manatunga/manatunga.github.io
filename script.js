// Nav Bar transition when scrolling
const navbar = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    // If user scrolls down more than 50px, add 'scrolled class', 
    // otherwise remove it
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});