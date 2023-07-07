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

  const nav = document.querySelector('.header');
  window.addEventListener('scroll',function () {
    if (this.window.pageYOffset>0) {
        nav.style.position = `fixed`;
        nav.style.top = '0px';
        nav.style.width = `100%`;
    }
    else{
        nav.style.position = `static`;
    }
  })

  const dropdownFooter = document.querySelectorAll('.item .header-item span svg');
  const titleItem = document.querySelectorAll('.item .title-item');
  dropdownFooter.forEach((element,index) => {
    element.addEventListener('click',function () {
        if (titleItem[index].style.display==`none`) {
            element.style.transform = `rotate(180deg)`;
            titleItem[index].style.display=`block`;
        }
        else{
            element.style.transform = `rotate(0deg)`;
            titleItem[index].style.display=`none`;
        }
    })
  });