// ----------- burger menu -----------
const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    console.log("klik");
    menuMobile.classList.toggle("menu__list--active");
});

// ----------- drop down offer -----------
const offerHands = document.querySelector(".offer__container--hands");
const offerFace = document.querySelector(".offer__container--face");
const offerEyes = document.querySelector(".offer__container--eyes");
const offerPackages = document.querySelector(".offer__container--packages");

const priceLists = document.querySelectorAll(".offer__wrapper > ul")

offerHandsService = offerHands.nextElementSibling;
offerFaceService = offerFace.nextElementSibling;
offerEyesService = offerEyes.nextElementSibling;
offerPackagesService = offerPackages.nextElementSibling;

offerArray = [
    offerHandsService,
    offerFaceService,
    offerEyesService,
    offerPackagesService,
];

function removeClass(classToRemove) {
    for (item of offerArray) {
        if (item.classList.value.includes(classToRemove)) {
            item.classList.remove(classToRemove);
            console.log("usuwam")
        } else {
            console.log("nie ma")
            // item.classList.add('hoho')
        }
    }
}

offerArray.forEach(offer => {
    const pricesListActive = "prices__list--active"
    
    offer.addEventListener("click", () => {
        removeClass(pricesListActive)
        offer.classList.add(pricesListActive);
    });
});

// trzeba sprawdzac wszystkie elmeenty czy posiadaja klase
// offerContainers.forEach((offerContainer) => {
//      const offerService = offerContainer.children[0];
//
//     offerContainer.addEventListener("click", function () {
//         if (
//             offerService.classList[offerService.classList.length - 1] == "test"
//         ) {
//             offerService.classList.remove("test");
//             console.log("ma klase");
//         } else {
//             console.log("nie ma");
//         }
//         // const offerService = offerContainer.children[0];
//         // offerService.classList.toggle("test");
//         console.log(offerService.classList);
//     });
// });
