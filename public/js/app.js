$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 1000,
        autoplaySpeed: 100,
        autoplayHoverPause: true
    });
  });

  const category_header = document.querySelector('.category-header');
  const category_bar = document.querySelector('.category-bar');
  category_bar.style.display = "block";
  category_header.addEventListener('click',function () {
    if (category_bar.style.display == "block") {
        category_bar.style.display = "none";
    }
    else{
        category_bar.style.display = "block"
    }
  })