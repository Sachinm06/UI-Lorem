

$(document).ready(function () {

  // -----------nav closing button---------

  var isOpen = false;
  $('#toggleButton').click(function () {
    isOpen = !isOpen;
    $(this).html(isOpen ? 'X' : '☰');
  });

  // -------------carousel------------------

  $('.slider-img').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    // fade:true,
    // fadeSpeed:1000
  })
});

// ------------search icon--------------

const toggleImage = document.getElementById('toggleImage');
const inputBox = document.getElementById('inputBox');

toggleImage.addEventListener('click', () => {
  inputBox.classList.toggle('hidden');
  toggleImage.classList.toggle('close');
});