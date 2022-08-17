const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu-mobile__list");

burger.addEventListener("click", () => {
    console.log('klik')
    menuMobile.classList.toggle("menu-mobile__list--active");
});
