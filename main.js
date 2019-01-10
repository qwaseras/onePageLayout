const searchBtn = document.querySelector("#search");
const overlay = document.querySelector(".overlay");

searchBtn.addEventListener("click", function(){
    overlay.classList.remove("hidden");
})

const navBtn = document.querySelector("#menu");
let navIsClose = true;

navBtn.addEventListener("click", function(){
    const responsiveNav = document.querySelector("#responsive-nav");
    if (navIsClose) {
        responsiveNav.classList.remove("hidden");
        navIsClose = false;
    } else {
        responsiveNav.classList.add("hidden");
        navIsClose = true;
    };
});

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", function(){
    overlay.classList.add("hidden");
})