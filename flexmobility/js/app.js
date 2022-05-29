// fancybox
jQuery(".fancybox, .fancy").fancybox();

// header animation 
jQuery("header").addClass('header-animation').removeClass('');

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


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('header').outerHeight();

jQuery(window).scroll(function(event) {
    didScroll = true;
    if (jQuery(document).scrollTop() < 170) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        jQuery('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}



// banner Slider

var banner_count = jQuery('.banner-slider .banner-slider-single').length;
if (banner_count > 1) {
    jQuery('.banner-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
    });
}

// About Slider

jQuery('.career-img-slide').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: false,
});

// career Slider

jQuery('.vision-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: false,
});

// Career position  Slider

jQuery('.positions-slider').slick({
    slidesToScroll: 2,
    slidesToShow: 3,
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    //autoplaySpeed: 2000,
    speed: 1000,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: false,
        },
    }, ],
});

jQuery('.listing-slide ul').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
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
    if (width > 768 && width < 1199) {
        jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 81
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
                        scrollTop: target.offset().top - 115
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
                        scrollTop: target.offset().top - 156
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


// Dropdown Menus

jQuery(document).on('click', '.platform-anchor a', function(e) {
    e.preventDefault();
    jQuery('.p-box').fadeToggle(200);
    jQuery('.partner-box, .unternehmen-box, .kontakt-box,.become-box, .case-box').fadeOut(200);
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('body').addClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('body').toggleClass('overflow-hidden');
    jQuery('header').addClass('header-active');
});

jQuery(document).on('click', '.case-anchor a, .case-anchor-a', function(e) {
    e.preventDefault();
    jQuery('.case-box').fadeToggle(200);
    jQuery('.partner-box, .unternehmen-box, .kontakt-box,.become-box,.platform-box').fadeOut(200);
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('body').addClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('body').toggleClass('overflow-hidden');
    jQuery('header').addClass('header-active');

});
jQuery(document).on('click', '.partner-anchor a', function(e) {
    e.preventDefault();
    jQuery('.partner-box').fadeToggle(200);
    jQuery('.case-box, .unternehmen-box, .kontakt-box,.become-box,.platform-box').fadeOut(200);
    jQuery('body').toggleClass('overflow-hidden');
    jQuery('body').addClass('menu-open');
    jQuery('body').removeClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('header').addClass('header-active');
});
jQuery(document).on('click', '.unternehmen-anchor a', function(e) {
    e.preventDefault();
    jQuery('.unternehmen-box').fadeToggle(200);
    jQuery('.case-box, .partner-box, .kontakt-box,.become-box,.platform-box').fadeOut(200);
    jQuery('body').removeClass('menu-open');
    jQuery('body').addClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('header').addClass('header-active');
});

jQuery(document).on('click', '.kontakt-anchor', function(e) {
    e.preventDefault();
    jQuery('.kontakt-box').fadeToggle(200);
    jQuery('.case-box, .partner-box, .unternehmen-box,.become-box,.platform-box').fadeOut(200);
    jQuery('body').removeClass('menu-open');
    jQuery('body').addClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('header').addClass('header-active');
});

jQuery(document).on('click', '.become-anchor', function(e) {
    e.preventDefault();
    jQuery('.become-box').fadeToggle(200);
    jQuery('.case-box, .partner-box, .unternehmen-box,.kontakt-box,.platform-box').fadeOut(200);
    jQuery('body').removeClass('menu-open');
    jQuery('body').addClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
    jQuery('.burger').removeClass('open');
    jQuery('header').addClass('header-active');
});


// cross
jQuery(document).on('click', '.drop-down-menu-cross', function(e) {
    e.preventDefault();
    jQuery('.case-box, .partner-box, .unternehmen-box, .kontakt-box,.become-box,.platform-box').fadeOut(200);
    jQuery('body').removeClass('menu-open overflow-hidden');
    jQuery('header').removeClass('header-active');
});

// tab slider 

jQuery('.slider-tab .slider-single:first-child').addClass('selected');
jQuery('.selected').next().addClass('next');
jQuery('.slider-content .slider-content-single:first-child').addClass('active');

jQuery('.slider-tab .slider-single').on('click', function() {
    jQuery('.slider-tab .slider-single').removeClass('selected');
    jQuery(this).addClass('selected');
    //jQuery('.selected').next().addClass('next');
    //jQuery(this).parents('.slider-list-single').prevAll().addClass('prev');
    let index = jQuery(this).index();
    jQuery('.slider-content .slider-content-single').removeClass('active');
    jQuery('.slider-content').find('.slider-content-single').eq(index).addClass('active');
});

// Mobile slider
if (width <= 767) {
    jQuery('.anfo-info, .slider-content').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: false,
    });
}


// slider tab
jQuery('.slider-tab').slick({
    infinite: true,
    slidesToScroll: 3,
    slidesToShow: 8,
    variableWidth: true,
    arrows: true,
    dots: false,
    nextArrow: '.slider-next',
    prevArrow: '.slider-prev',
    draggable: false,
    swipe: false,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                variableWidth: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: false,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                variableWidth: false,
            },
        },
    ],
});


// Platform application tab
jQuery('.platform-application-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: true,
    dots: false,
    //nextArrow: '.platform-application-arrow-next',
    // prevArrow: '.platform-application-arrow-prev',
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
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
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// platform slider 1
jQuery('.platform-slider-holder-box').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    nextArrow: '.platform-next',
    prevArrow: '.platform-prev',
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


// platform popup
jQuery(document).on('click', '.cloud-anchor', function(e) {
    e.preventDefault();
    jQuery('.cloud-box').fadeToggle(200);
});

jQuery(document).on('click', '.premise-anchor', function(e) {
    e.preventDefault();
    jQuery('.permise-box').fadeToggle(200);
});


// cross
jQuery(document).on('click', '.promise-popup-close', function(e) {
    e.preventDefault();
    jQuery('.promise-popup').fadeOut(200);

});

// Platform popup tab 

jQuery('.promise-popup-tab-list .promise-popup-tab-list-single:first-child').addClass('selected');
jQuery('.promise-popup-tab-content .promise-popup-tab-content-single:first-child').addClass('active');

jQuery('.promise-popup-tab-list .promise-popup-tab-list-single').on('click', function() {
    jQuery(this).parents('.promise-popup-tab').find('.promise-popup-tab-list .promise-popup-tab-list-single').removeClass('selected');
    jQuery(this).addClass('selected');

    let index = jQuery(this).index();
    console.log(index);
    jQuery(this).parents('.promise-popup-tab').find('.promise-popup-tab-content-single').removeClass('active');
    //jQuery('.promise-popup-tab-content-single').removeClass('active');
    jQuery(this).parents('.promise-popup-tab').find('.promise-popup-tab-content-single').eq(index).addClass('active');
});



// faq page accordion 
var accordionHead = jQuery('.faq-accordion-list-head');
jQuery(document).on('click', '.faq-accordion-list-head', function() {
    if (jQuery(this).hasClass("active")) {
        accordionHead.removeClass('active');
        jQuery('.faq-accordion-list-content').slideUp();
    } else {
        accordionHead.removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.faq-accordion-list-content').slideUp();
        jQuery(this).siblings('.faq-accordion-list-content').slideToggle();
    }
});


// case see more
jQuery(document).on('click', '.case-open', function() {
    jQuery(this).hide();
    jQuery(this).parents('ul').find('ul').fadeIn().addClass('d-flex');
});