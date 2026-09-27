//======================================================
// FOR NAVBAR SCROLL EFECT
//======================================================

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


//======================================================
// FOR SUBTITLE TYPEWRITER EFFECT
//======================================================

const subtitleElement = document.getElementById('subtitle');
const textToType = "I'm a CS Undergrad, specialising in Machine Learning and Full Stack Development.";

let index = 0;
const typingSpeed = 50;

function typeEffect() {
    if (index < textToType.length) {
        subtitleElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 500);
});