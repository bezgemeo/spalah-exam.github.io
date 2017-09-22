$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoplay: false
                }
            }
        ]
    });

    new WOW().init();

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('#lines').one(animationEnd, function(){
        $('.orange_line').addClass('slideInLeft');

        $(".spincrement").spincrement({
            duration: 3000
        });
    });

});
