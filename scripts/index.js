const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerMenuLinks = document.querySelectorAll('.header__link');

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const columns = section.querySelector('.wrapper');
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            columns.classList.add('shrink');
        } else {
            columns.classList.remove('shrink');
        }
    });
});

burgerMenu.onclick = () => {
    headerMenu.classList.toggle('active');
}

headerMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.remove('active');
    })
})