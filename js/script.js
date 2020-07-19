$(function () {

circle()
   setInterval(circle,10000)


function circle() {
   $('.vision_sub01_ill2').transition({rotate:'-=360deg'},10000);
}

$('.service_sub_slide>ul').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
});
