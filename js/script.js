// Cuando la página se desplaza
window.onscroll = function() {
    let navbar = document.querySelector('.port-menu');

    // Si la página se ha desplazado más de 550 píxeles
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};