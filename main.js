const searchBtn = document.querySelector("#search");
const overlay = document.querySelector(".overlay");

searchBtn.addEventListener("click", function(){
    overlay.classList.remove("hidden");
})

const navBtn = document.querySelector("#menu");

navBtn.addEventListener("click", function(){
    const responsiveNav = document.querySelector("#responsive-nav");
    responsiveNav.classList.remove("hidden");
})

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", function(){
    overlay.classList.add("hidden");
})