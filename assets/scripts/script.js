
/* https://www.youtube.com/watch?v=ThSaI0kuez8 */

const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {

    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkEl.classList.add('active');
    }
})