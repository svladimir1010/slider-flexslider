$(document).ready(function() {

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        itemWidth: 200,
        itemMargin: 5,
        asNavFor: '#slider',
        easing: 'easeInElastic'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        sync: "#carousel",
        easing: 'easeInElastic'
    });

    $('#container img').on('click', function() {
        $('#slider2').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            easing: 'easeInElastic'
        });
        $('.wrapper-popup').css('display', 'block');
    });

    $('.wrapper-popup img').on('click', function(e) {
        e.stopPropagation();
        $('.wrapper-popup').css('display', 'none');
    })

})