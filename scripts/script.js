// ------------search icon--------------

const toggleImage = document.getElementById('toggleImage');
const inputBox = document.getElementById('inputBox');

toggleImage.addEventListener('click', () => {
    inputBox.classList.toggle('hidden');
    toggleImage.classList.toggle('close');
});


// -----------nav closing button-------------

var button = document.getElementById("toggleButton");
var openIcon = button.querySelector(".open-icon");
var closeIcon = button.querySelector(".close-icon");

document.querySelector(".navbar-toggler").addEventListener("click", function () {
    if (closeIcon.style.display === "none") {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
    } else {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
});






// -------------carousel------------------

$(document).ready(function () {
    $('.slider-img').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // fade:true,
        // fadeSpeed:1000
    })
})