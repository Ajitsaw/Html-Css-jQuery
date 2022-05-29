$(document).on('click', '.notfall a', function(e) {
    e.preventDefault();
    $('.notfall-box').slideToggle();
});

// fancybox
$(".fancybox, .fancy").fancybox();

/* Nav */
$('header .burger').click(function() {
    if ($(this).parents('header').find('.main-menu').is(':visible')) {
        $(this).removeClass('open');
        $(this).parents('header').find('.main-menu').removeClass('open-menu');
    } else {
        $(this).addClass('open');
        $(this).parents('header').find('.main-menu').addClass('open-menu');
    }
    $('body').toggleClass('menu-open');
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('header').addClass('scroll');
        $('body').addClass('body-scroll');
    } else {
        $('header').removeClass('scroll');
        $('body').removeClass('body-scroll');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('header.scroll-header').addClass('visible');
    } else {
        $('header.scroll-header').removeClass('visible');
    }
});

// Show Content

$(document).on('click', '.information-button a', function(e) {
    e.preventDefault();
    $('.information .text-block').addClass('open-text');
    $('.information-button').fadeOut(100);
});

/* Smooth Scroll */
var width = $(window).width();
$(function() {
    if (width < 767) {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 768 && width < 1399) {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 1400) {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 110
                    }, 1000);
                    return false;
                }
            }
        });
    }
});

/* losungen Menu */
$(document).on('click', '.losungen-anchor a', function(e) {
    e.preventDefault();
    $('header .burger').removeClass('open');
    $('.main-menu').removeClass('open-menu');
    $('.losungen-menu').toggleClass('overlay-open');
    $('.info-menu, .partner-menu').removeClass('overlay-open');
    $('body').toggleClass('overflow-hidden');
    $('body').removeClass('menu-open');
    $('.losungen').toggleClass('losungen-li');
    $('.info-center').removeClass('losungen-li');
});
$(document).on('click', '.overlay-menu .cross', function(e) {
    $('.losungen-menu, .info-menu, .partner-menu').removeClass('overlay-open');
    $('body').removeClass('overflow-hidden');
});

/* Info Menu */
$(document).on('click', '.info-center a', function(e) {
    e.preventDefault();
    $('header .burger').removeClass('open');
    $('.main-menu').removeClass('open-menu');
    $('.info-menu').toggleClass('overlay-open');
    $('.losungen-menu, .partner-menu').removeClass('overlay-open');
    $('body').toggleClass('overflow-hidden');
    $('body').removeClass('menu-open');
    $(this).parent('.info-center').toggleClass('losungen-li');
    $('.losungen-anchor, .partner-anchor').removeClass('losungen-li');
});

/* Info Menu */
$(document).on('click', '.partner-anchor a', function(e) {
    e.preventDefault();
    $('header .burger').removeClass('open');
    $('.main-menu').removeClass('open-menu');
    $('.partner-menu').toggleClass('overlay-open');
    $('.losungen-menu, .info-menu').removeClass('overlay-open');
    $('body').toggleClass('overflow-hidden');
    $('body').removeClass('menu-open');
    $(this).parent('.partner-anchor').toggleClass('losungen-li');
    $('.losungen-anchor, .info-center').removeClass('losungen-li');
});

/* Kontact manu */
$(document).on('click', '.contact-form', function(e) {
    e.preventDefault();
    $('header .burger').removeClass('open');
    $('.main-nav').removeClass('open-nav');
    $('.kontakt-menu').slideDown(500);
    $('body').addClass('menu-open');
});
$(document).on('click', '.cross-kontakt-menu', function() {
    $('.kontakt-menu').slideUp(500);
    $('body').removeClass('menu-open');
});

// accordion
var accordionHead = $('.accordion-list-head');
$(document).on('click', '.accordion-list-head', function() {
    if ($(this).hasClass("active")) {
        accordionHead.removeClass('active');
        $('.accordion-list-content').slideUp();
    } else {
        accordionHead.removeClass('active');
        $(this).addClass('active');
        $('.accordion-list-content').slideUp();
        $(this).siblings('.accordion-list-content').slideToggle();
    }
});

// Partner slider
var post_count = $('.product-partner-slider').find('.product-partner-slider-single').length;
if (post_count > 4) {
    $('.product-partner-slider-arrow').css('display', 'flex');
    $('.product-partner-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        nextArrow: '.product-partner-slider-arrow__right',
        prevArrow: '.product-partner-slider-arrow__left',
        adaptiveHeight: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}


// karrier slider
var post_count = $('.karriere-say-slider').find('.karriere-say-slider-single').length;
if (post_count > 3) {
    $('.karriere-say-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}

$(document).on('click', '.open-popup', function(e) {
    e.preventDefault();
    $('.pop-up').fadeToggle(200);
});
$(document).on('click', '.close-popup', function(e) {
    e.preventDefault();
    $('.pop-up').fadeOut(200);

});
