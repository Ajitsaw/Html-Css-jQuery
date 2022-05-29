// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
});

if (jQuery('.scroll-nav').length) {
    var navigationTop = jQuery('.scroll-nav').offset().top;
}
if (jQuery('.scroll-anchor').length) {
    var scroll_anchor = jQuery('.scroll-anchor').offset().top;
}


jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }

    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    } else {
        jQuery('.scroll-up').removeClass('visible');
    }

    var scroll = jQuery(window).scrollTop();

    if (scroll > navigationTop + 130) {
        jQuery('.scroll-nav').addClass('menu-scrolled');
    } else {
        jQuery('.scroll-nav').removeClass('menu-scrolled');
    }
    if (scroll > scroll_anchor - 140) {
        jQuery('.scroll-anchor').addClass('menu-scrolled');
    } else {
        jQuery('.scroll-anchor').removeClass('menu-scrolled');
    }
});



// banner Slider

var banner_count = jQuery('.banner-slider .banner-slider-single').length;
if (banner_count > 1) {
    jQuery('.banner-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: false,
    });
}

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
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 768 && width < 1199) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 75
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if (width > 1200 && width < 1600) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 84
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
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    }
});

/* Scroll Up */

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    } else {
        jQuery('.scroll-up').removeClass('visible');
    }

    var scroll = jQuery(window).scrollTop();

    // position scroll function 
    if (scroll + jQuery(window).height() > jQuery(document).height() - 100) {
        jQuery('.scroll-up').addClass('bottom-position')
    } else {
        jQuery('.scroll-up ').removeClass('bottom-position')
    }
});


// SideMenu Content

jQuery(document).on('click', '.sidemenu', function(e) {
    e.preventDefault();
    jQuery('.side-menu').addClass('side-open');
    jQuery('body').addClass('menu-open');
});
jQuery(document).on('click', '.side-menu-cross', function(e) {
    e.preventDefault();
    jQuery('.side-menu').removeClass('side-open');
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



/* Drop Menu */
jQuery(document).on('click', '.leistungen-anchor a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('.search-box, .partner-box').removeClass('open-d');
    jQuery('.leistungen-box').addClass('open-d');
    jQuery('body').addClass('overflow-hidden');
});

jQuery(document).on('click', '.partner-anchor a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('.search-box, .leistungen-box').removeClass('open-d');
    jQuery('.partner-box').addClass('open-d');
    jQuery('body').addClass('overflow-hidden');
});
jQuery(document).on('click', '.cross-leistungen', function() {
    jQuery('.drop-down-menu').removeClass('open-d');
    jQuery('body').removeClass('overflow-hidden menu-open');
});

jQuery(document).on('click', '.header-search', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('.leistungen-box, .partner-box').removeClass('open-d');
    jQuery('.search-box').addClass('open-d');
    jQuery('body').addClass('overflow-hidden');
});


jQuery(document).on('click', '.search-cross', function() {
    jQuery('.search-box').removeClass('open-d');
    jQuery('body').removeClass('overflow-hidden menu-open');
});

// sidemenu arrow open
jQuery(document).on('click', '.side-menu ul li span', function() {
    jQuery(this).siblings('ul').slideToggle(500);
    jQuery(this).toggleClass('rotate');
});

// Solution Slider
var products = jQuery('.sol-slider-holder .sol-slider-holder-single').length;
if (products > 3) {
    jQuery('.sol-slider-arrow').css('display', 'flex');
    jQuery('.sol-slider-holder').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        nextArrow: '.sol-right',
        prevArrow: '.sol-left',
        adaptiveHeight: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
}

// Solution Single Slider
var products = jQuery('.produktbilder-slider .produktbilder-slider-single').length;
if (products > 3) {
    jQuery('.produktbilder-arrow').css('display', 'flex');

    if (jQuery(window).width() <= 1200) {
        jQuery('.produktbilders-arrow').css('display', 'flex');
    }
    jQuery('.produktbilder-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        nextArrow: '.produktbilder-arrow-right',
        prevArrow: '.produktbilder-arrow-left',
        adaptiveHeight: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    nextArrow: '.produktbilders-arrow-left',
                    prevArrow: '.produktbilders-arrow-right',
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: '.produktbilders-arrow-left',
                    prevArrow: '.produktbilders-arrow-right',
                },
            },
        ],
    });
}


// tabs 

jQuery('.tabs .tabs-single:first-child').addClass('selected');
jQuery('.tab-content .tab-content-single:first-child').addClass('active');

jQuery('.tabs .tabs-single').on('click', function() {

    jQuery('.tabs-single').removeClass('selected');
    jQuery(this).addClass('selected');

    let index = jQuery(this).index();
    jQuery('.tab-content .tab-content-single').removeClass('active');
    jQuery('.tab-content').find('.tab-content-single').eq(index).addClass('active');

});


// Search function
jQuery('.searchButton').on('click', function() {
    jQuery(this).parents('.searchBox').toggleClass('open-box');
    jQuery(this).find('i').toggleClass('ti-close ti-search');
});