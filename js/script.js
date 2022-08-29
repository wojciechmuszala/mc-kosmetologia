// ----------- burger menu -----------
const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    console.log("klik");
    menuMobile.classList.toggle("menu__list--active");
});

// ----------- drop down offer -----------
const offerContainers = document.querySelectorAll(".offer__container");
const pricesLists = document.querySelectorAll(".offer__wrapper > ul");
const pricesListActive = "prices__list--active";

function removeClass(classToRemove) {
    pricesLists.forEach((pricesList) => {
        pricesList.classList.remove(classToRemove);
    });
}

offerContainers.forEach((offerContainer) => {
    offerContainer.addEventListener("click", function () {
        const pricesListToOpen = this.nextElementSibling;
        if (pricesListToOpen.classList.value.includes(pricesListActive)) {
            removeClass(pricesListActive);
        } else {
            removeClass(pricesListActive);
            pricesListToOpen.classList.add(pricesListActive);
        }
    });
});
