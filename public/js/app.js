// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 20,
//     autoplay: true,
//     slideTransition: "linear",
//     autoplayTimeout: 1000,
//     autoplaySpeed: 100,
//     autoplayHoverPause: true,
//   });
// });
$("#search").placeholderTypewriter({
  text: [
    "Tìm kiếm sản phẩm...",
    "Tủ lạnh...",
    "Tivi...",
    "Máy giặt....",
    "Tìm kiếm mọi thứ ở đây...",
  ],
});
(function($) {
	$(function() { //on DOM ready
		$(".list-post").simplyScroll({
			customClass: 'vert',
            orientation: 'vertical',
            // orientation: 'horizontal',
            auto: true,
            manualMode: 'auto',
            pauseOnHover: 1,
            speed: 1,
            loop: 0
		});
	});
})(jQuery);
const category_header = document.querySelector(".category-header");
const category_bar = document.querySelector(".category-bar");
category_header.addEventListener("click", function () {
  if (category_bar.style.display == "block") {
    category_bar.style.display = "none";
    category_bar.style.visibility = "hidden";
  } else {
    category_bar.style.display = "block";
    category_bar.style.visibility = "visible";
  }
});

const nav = document.querySelector(".header");
const nav_header = document.querySelector(".nav-header");
const category = document.querySelector(".category .category-header");
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) {
    nav_header.style.position = `fixed`;
    nav_header.style.width = `100%`;
    nav_header.style.transform = `translateY(-44px)`;
    category.style.transform = `translateY(-44px)`;
  } else {
    nav_header.style.position = `static`;
    nav_header.style.transform = `translateY(0)`;
    category.style.transform = `translateY(0)`;
  }
});

const dropdownFooter = document.querySelectorAll(".item .header-item span svg");
const titleItem = document.querySelectorAll(".item .title-item");
dropdownFooter.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (titleItem[index].style.display == `none`) {
      element.style.transform = `rotate(180deg)`;
      titleItem[index].style.display = `block`;
    } else {
      element.style.transform = `rotate(0deg)`;
      titleItem[index].style.display = `none`;
    }
  });
});
