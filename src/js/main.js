document.querySelector(".toggle").addEventListener("click", (e) => {
    console.log("click");
    let menuButtonIcon = document.querySelector("i.toggle-icon");

    if (menuButtonIcon.classList.contains("fa-bars")) {
        menuButtonIcon.classList.remove("fa-bars");
        menuButtonIcon.classList.add("fa-times");
    } else {
        menuButtonIcon.classList.remove("fa-times");
        menuButtonIcon.classList.add("fa-bars");
    }

    let mobileMenuElements = document.querySelectorAll(".item");

    mobileMenuElements.forEach(function(menuItem) {
        if (menuItem.classList.contains("active")) {
            menuItem.classList.remove("active");
        } else {
            menuItem.classList.add("active");
        }
    });
});
