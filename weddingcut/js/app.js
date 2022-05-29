// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
$('header .burger').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }
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

/* Scroll Up */

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 600) {
        jQuery('.scroll-up').addClass('visible');
    } else {
        jQuery('.scroll-up').removeClass('visible');
    }
});

// Testimonial slider

$('.testimonial-left-slider').slick({
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: '.testimonial-right-slider'
});

$('.testimonial-right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.testimonial-left-slider',
});


// slider arrow change
jQuery('.slick-prev').html('<i class="ti-arrow-left"></i>');
jQuery('.slick-next').html('<i class="ti-arrow-right"></i>');

// logo slider 
var post_count = jQuery('.logo-slider_holder').find('.logo-slider_holder-single').length;
if (post_count >= 4) {
    $('.logo-slider_holder').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
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

// news page slider
var blog = jQuery('.blog-slider').find('.blog-slider-single').length;
if (blog > 6) {
    $('.blog-slider').slick({
        rows: 2,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    rows: 1,
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

var rellax = new Rellax('.rellax', {
    center: true
});