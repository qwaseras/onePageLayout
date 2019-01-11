const searchBtn = document.querySelector("#search");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#close-btn");
const navBtn = document.querySelector("#menu");
let navIsClosed = true;

navBtn.addEventListener("click", () => {
    const responsiveNav = document.querySelector("#responsive-nav");

    if (navIsClosed) {
        responsiveNav.classList.remove("closed-nav");
        navIsClosed = false;
    } else {
        responsiveNav.classList.add("closed-nav");
        navIsClosed = true;
    };
});

searchBtn.addEventListener("click", () => {
    overlay.classList.remove("closed-overlay");   
});
closeBtn.addEventListener("click", () => {
    overlay.classList.add("closed-overlay");
})