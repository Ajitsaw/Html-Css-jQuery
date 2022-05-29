// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function() {
    if (jQuery(this).parents('header').find('.main-menu').is(':visible')) {
        jQuery(this).removeClass('open');
        jQuery(this).parents('header').find('.main-menu').removeClass('open-menu');
    } else {
        jQuery(this).addClass('open');
        jQuery(this).parents('header').find('.main-menu').addClass('open-menu');
    }
    jQuery('body').toggleClass('menu-open');
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
        jQuery('body').addClass('body-scroll');
    } else {
        jQuery('header').removeClass('scroll');
        jQuery('body').removeClass('body-scroll');
    }
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header.scroll-header').addClass('visible');
    } else {
        jQuery('header.scroll-header').removeClass('visible');
    }
});

// Show Content

jQuery(document).on('click', '.information-button a', function(e) {
    e.preventDefault();
    jQuery('.information .text-block').addClass('open-text');
    jQuery('.information-button').fadeOut(100);
});

/* Smooth Scroll */
var width = jQuery(window).width();
jQuery(function() {
    if (width < 767) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 768 && width < 1399) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 1400) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 110
                    }, 1000);
                    return false;
                }
            }
        });
    }
});

/* losungen Menu */
jQuery(document).on('click', '.losungen-anchor a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-menu').removeClass('open-menu');
    jQuery('.losungen-menu').toggleClass('overlay-open');
    jQuery('.info-menu, .partner-menu').removeClass('overlay-open');
    //jQuery('body').toggleClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery('.losungen').toggleClass('losungen-li');
    jQuery('.info-center').removeClass('losungen-li');
});
jQuery(document).on('click', '.overlay-menu .cross', function(e) {
    jQuery('.losungen-menu, .info-menu, .partner-menu').removeClass('overlay-open');
    jQuery('body').removeClass('overflow-hidden');
});

/* Info Menu */
jQuery(document).on('click', '.info-center a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-menu').removeClass('open-menu');
    jQuery('.info-menu').toggleClass('overlay-open');
    jQuery('.losungen-menu, .partner-menu').removeClass('overlay-open');
    //jQuery('body').toggleClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery(this).parent('.info-center').toggleClass('losungen-li');
    jQuery('.losungen-anchor, .partner-anchor').removeClass('losungen-li');
});

/* Info Menu */
jQuery(document).on('click', '.partner-anchor a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-menu').removeClass('open-menu');
    jQuery('.partner-menu').toggleClass('overlay-open');
    jQuery('.losungen-menu, .info-menu').removeClass('overlay-open');
    //jQuery('body').toggleClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery(this).parent('.partner-anchor').toggleClass('losungen-li');
    jQuery('.losungen-anchor, .info-center').removeClass('losungen-li');
});

/* Kontact manu */
jQuery(document).on('click', '.contact-form', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-nav').removeClass('open-nav');
    jQuery('.kontakt-menu').slideDown(500);
    jQuery('body').addClass('menu-open');
});
jQuery(document).on('click', '.cross-kontakt-menu', function() {
    jQuery('.kontakt-menu').slideUp(500);
    jQuery('body').removeClass('menu-open');
});

// accordion
var accordionHead = jQuery('.accordion-list-head');
jQuery(document).on('click', '.accordion-list-head', function() {
    if (jQuery(this).hasClass("active")) {
        accordionHead.removeClass('active');
        jQuery('.accordion-list-content').slideUp();
    } else {
        accordionHead.removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.accordion-list-content').slideUp();
        jQuery(this).siblings('.accordion-list-content').slideToggle();
    }
});

// Partner slider
var post_count = jQuery('.product-partner-slider').find('.product-partner-slider-single').length;
if (post_count > 4) {
    jQuery('.product-partner-slider-arrow').css('display', 'flex');
    jQuery('.product-partner-slider').slick({
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