// Select elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle'); // animate burger lines
});
