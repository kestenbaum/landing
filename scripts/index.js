const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerMenuLinks = document.querySelectorAll('.header__link');


burgerMenu.onclick = () => {
    headerMenu.classList.toggle('active');
}

headerMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.remove('active');
    })
})