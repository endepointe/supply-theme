const slideList = document.querySelectorAll('.slideshow-img-custom');
const slideHoverTextList = document.querySelectorAll('.hover-text');

$(document).ready(function() {
  $('.slides-custom').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true, 
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3100,
    arrows: false,
  });
});


// Actions
slideList.forEach((slide, i) => {
  // might use for analytics to see which image the visitor clicked on
});