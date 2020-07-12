$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
        $(".navigation-menu").toggleClass("open-menu");
    });

    $(".navigation-menu__link").click(function() {
        $(".hamburger").removeClass("is-active");
        $(".navigation-menu").removeClass("open-menu");
    });


    // On scroll menu fixed

    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 30 ? $('.navigation').addClass('scroll-fixed') : $('.navigation').removeClass('scroll-fixed');
    });

    // код для плавної прокрутки

    $('.anchor[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 200);

    });
    // On scroll menu fixed

    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.toTop').addClass('show') : $('.toTop').removeClass('show');
    });

});