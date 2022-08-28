// ----------- burger menu -----------

const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
    console.log("klik");
    menuMobile.classList.toggle("menu__list--active");
});

// ----------- drop down offer -----------

// const offerContainers = document.querySelectorAll(".offer__container");
const offerHands = document.querySelector(".offer__container--hands");
const offerFace = document.querySelector(".offer__container--face");
const offerEyes = document.querySelector(".offer__container--eyes");
const offerPackages = document.querySelector(".offer__container--packages");

offerHandsService = offerHands.children[0];
offerFaceService = offerFace.children[0];
offerEyesService = offerEyes.children[0];
offerPackagesService = offerPackages.children[0];

offerArray = [
    offerHandsService,
    offerFaceService,
    offerEyesService,
    offerPackagesService,
];

function checkClass(checkedClass) {
    for (item of offerArray) {
        if (item.classList.value.includes("test")) {
            item.classList.remove("test");
        } else {
            // item.classList.add('hoho')
        }
    }
}

offerArray.forEach((offer) => {
    checkClass("offer");

    offer.addEventListener("click", () => {
        offer.classList.add("klasa");
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
