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

    $('.maria_slider').slick({
        arrows: false,
        dots: true
    });

    $('.digital').slick({
        arrows: false,
        dots: true
    });

    $('#responsiveTabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        var lat = $('.pointer').attr('data-lat');
        var lng = $('.pointer').attr('data-lng');

        var mapOptions = {
            zoom: 17,
            center: new google.maps.LatLng(lat, lng), // Melbourne
            styles: [{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c9ccc6"},{"visibility":"on"}]}]
        };

        var mapElement = document.getElementById('map');

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            title: 'hello, world!',
            icon: {
                url: "img/marker.png",
                scaledSize: new google.maps.Size(56, 62)
            }
        });
    }

    $('.smooth-scroll').on('click','a', function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 700 мс
        $('body,html').animate({scrollTop: top}, 700);
    });




});
