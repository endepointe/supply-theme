const slideList = document.querySelectorAll('.slideshow-img-custom');
const hoverList = document.querySelectorAll('.hover-text');
const slideHoverTextList = document.querySelectorAll('.hover-text');

$(document).ready(function() {
  $('.slides-custom').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: false, 
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3100,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          fade: false,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      },
    ]
  });
});
// Actions
hoverList.forEach((link, i) => {
  if ((i+1) % 2 === 0) {
    link.textContent = 'See more';
  }
  if ((i+1) % 3 === 0) {
    link.textContent = 'Shop all';
  }
  console.log(link);
});