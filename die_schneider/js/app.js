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

// Submit Button Value ""
jQuery('.submit-form input').attr('value', '');




// Banner Slider

$('.banner-home-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.banner-home-slider__controls span').click(function() {
    var slide = $(this).data("slide") - 1;
    $('.banner-home-slider').slick('slickGoTo', slide)
});

$('.banner-home-slider').on('afterChange', function() {
    var currentSlide = $('.banner-home-slider').slick('slickCurrentSlide') + 1;
    $('.banner-home-slider__controls span').removeClass("active")
    $('.banner-home-slider__controls span[data-slide="' + currentSlide + '"]').addClass("active");
});

// Career Location Slider
var post_count = jQuery('.testimonial-slider').find('.testimonial-slider-single').length;
if (post_count >= 3) {
    $('.testimonial-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
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


// News Slider
var news_count = jQuery('.news-block').find('.news-block-single').length;
if (news_count >= 4) {
    $('.news-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
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

// news page slider
var news_page_count = jQuery('.news-page-slide').find('.news-block-single').length;
if (news_page_count >= 4 && news_page_count <= 7) {
    $('.news-page-slide').slick({
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
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
} else if (news_page_count >= 8 && news_page_count <= 11) {
    $('.news-page-slide').slick({
        rows: 2,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
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
} else if (news_page_count >= 12 && news_page_count <= 15) {
    $('.news-page-slide').slick({
        rows: 3,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
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
} else if (news_page_count >= 16) {
    $('.news-page-slide').slick({
        rows: 4,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
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
// Company slider

$('.company-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.company-small-slider'
});

$('.company-small-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.company-slider',
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }, ],
});

// Landing slider

$('.surrounding-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    asNavFor: '.surrounding-holder-slider',
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: false
        },
    }, ],
});

$('.surrounding-holder-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.surrounding-slider',
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: true
        },
    }, ],
});


// slider arrow change
jQuery('.slick-prev').html('<i class="ti-arrow-left"></i>');
jQuery('.slick-next').html('<i class="ti-arrow-right"></i>');


// service page accordion 
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


// Refarenze slider 

jQuery('.carrer-tab .tab-single:first-child').addClass('selected').find('i').addClass('ti-angle-down').removeClass('ti-angle-up');
jQuery('.career-tab-content .career-tab-content-single:first-child').addClass('active');
jQuery('.carrer-tab .tab-single').on('click', function() {

    jQuery('.carrer-tab .tab-single').removeClass('selected').find('i').addClass('ti-angle-up').removeClass('ti-angle-down');
    jQuery(this).addClass('selected').find('i').addClass('ti-angle-down').removeClass('ti-angle-up');

    let index = jQuery(this).index();
    console.log(index);
    jQuery('.career-tab-content .career-tab-content-single').removeClass('active');
    jQuery('.career-tab-content').find('.career-tab-content-single').eq(index).addClass('active');
});