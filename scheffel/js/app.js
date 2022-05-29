// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
$('header .burger').click(function() {
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
    } else {
        jQuery('header').removeClass('scroll');
    }
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('header.scroll-header').addClass('visible');
    } else {
        jQuery('header.scroll-header').removeClass('visible');
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




/* Standorte Menu */
jQuery(document).on('click', '.standorte a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-menu').removeClass('open-menu');
    jQuery('.karriere-menu').slideUp(500);
    jQuery('.standorte-menu').slideDown(500);
    jQuery('body').addClass('menu-open');
});
/* Karriere Menu */
jQuery(document).on('click', '.karriere a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.main-menu').removeClass('open-menu');
    jQuery('.standorte-menu').slideUp(500);
    jQuery('.karriere-menu').slideDown(500);
    jQuery('body').addClass('menu-open');
});

jQuery(document).on('click', '.cross-overlay', function() {
    jQuery('.standorte-menu, .karriere-menu').slideUp(500);
    jQuery('body').removeClass('menu-open');
});

// Banner Slider

$('.banner-home-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
});

// Career Location Slider
$('.career-location-slider').slick({
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplaySpeed: 5000,
});

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





if (!sessionStorage.firstVisit) {
    $('.open-overlay').css('display', 'flex');
}


// cross age verification button click
$('.cross-home').on('click', function(e) {
    e.preventDefault();
    if ($('.open-overlay input').is(':checked')) {
        $('.open-overlay').fadeOut();
    }
    // Save data to sessionStorage
    sessionStorage.setItem('firstVisit', '1');
});

// Career Details fixed bar
let newsBar = jQuery('.width-deduction').innerWidth();
// Dynamic width added
jQuery('.right-b').css('max-width', newsBar)
    // height of the section 
let newsBarHeight = jQuery('.career-single-block').height();
let newsHeight = jQuery('.right-b').outerHeight();
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll > newsBarHeight - 250) {
        jQuery('.right-b').addClass('newsAbs')
    } else {
        jQuery('.right-b').removeClass('newsAbs')
    }

});