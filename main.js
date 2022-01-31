// Button scroll 
let up = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrollY >= 700) {
        up.classList.add("show");
    } else{
        up.classList.remove("show");
    }
};  
up.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

// dark theme

let dark = document.querySelector(".fa-moon");
let logo = document.querySelector(".logo")
let logof = document.querySelector(".logof")
let navi = document.getElementById("nav-icon")

dark.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        dark.classList.add("fa-sun");
        dark.classList.remove("fa-moon");
        logo.src = "images/logo_white.png";
        logof.src = "images/logo_white.png";
        navi.style.color = "white";
    }else {
        dark.classList.remove("fa-sun");
        dark.classList.add("fa-moon");
        logo.src = "images/logo_black.png";
        logof.src = "images/logo_black.png";
        navi.style.color = "black";
    }
};

let ull = document.querySelector(".ul2")
navi.onclick = function () {
    ull.classList.toggle("ul2-show");

}