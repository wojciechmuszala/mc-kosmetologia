const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    console.log('klik')
    menuMobile.classList.toggle("menu__list--active");
});
