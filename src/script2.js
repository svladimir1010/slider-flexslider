$(document).ready(function() {
 
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 200,
    itemMargin: 5,
    asNavFor: '#slider',
    easing: 'easeInElastic'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    easing: 'easeInElastic'
  });
});