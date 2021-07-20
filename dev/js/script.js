window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu-mobile'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger--active');
        menu.classList.toggle('menu-mobile--active');
    });
});