console.log('ABC');

$(document).ready(function(e) {
    $('.bxslider').bxSlider({
        slideWidth: 450,
        slideHeight: 100,
        minSlides: 1,
        slideMargin: 0,
        controls: false,
        auto: true,

    });
    $(window).scroll(function() {
        $('div.fixed-top').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
});