// ------------search icon--------------

const toggleImage = document.getElementById('toggleImage');
const inputBox = document.getElementById('inputBox');

toggleImage.addEventListener('click', () => {
    inputBox.classList.toggle('hidden');
    toggleImage.classList.toggle('close');
});
// -----------nav closing button-------------

$(document).ready(function() {
    var isOpen = false;
    $('#toggleButton').click(function() {
      isOpen = !isOpen;
      $(this).html(isOpen ? 'X' : '☰');
    });
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