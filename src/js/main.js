document.querySelector(".header__menu__toggle").addEventListener("click", (e) => {
    let menuButtonIcon = document.querySelector("i.header__menu__toggle-icon");

    if (menuButtonIcon.classList.contains("fa-bars")) {
        menuButtonIcon.classList.remove("fa-bars");
        menuButtonIcon.classList.add("fa-times");
    } else {
        menuButtonIcon.classList.remove("fa-times");
        menuButtonIcon.classList.add("fa-bars");
    }

    let mobileMenuElements = document.querySelectorAll(".header__menu__item");

    mobileMenuElements.forEach(function(menuItem) {
        if (menuItem.classList.contains("active")) {
            menuItem.classList.remove("active");
        } else {
            menuItem.classList.add("active");
        }
    });
});
