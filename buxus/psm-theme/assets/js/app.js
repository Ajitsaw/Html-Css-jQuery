jQuery(".wpcf7-form").removeAttr('novalidate');


// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
});



/* Smooth Scroll */
var width = jQuery(window).width();
jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
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

// Show Content

jQuery(document).on('click', '.expand', function(e) {
    e.preventDefault();
    jQuery(this).siblings('.block-para').toggleClass('open-block');
    jQuery(this).toggleClass('expand-open');
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

// tab slider 

jQuery('.slider-list .slider-list-single:first-child').addClass('selected');
jQuery('.selected').next().addClass('next');
jQuery('.slider-content .slider-content-single:first-child').addClass('active');

var post_count = jQuery('.active .sliders-holder .sliders-holder-single').length;
if (post_count > 1) {
    jQuery('.active .sliders-holder-arrow').css('display', 'flex');
    jQuery('.active .sliders-holder').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        nextArrow: '.active .sliders-holder-arrow__right',
        prevArrow: '.active .sliders-holder-arrow__left',
        adaptiveHeight: false,
    });
}
jQuery('.slider-list .slider-list-single .dots').on('click', function() {

    jQuery('.slider-list .slider-list-single').removeClass('selected prev next');
    jQuery(this).parents('.slider-list-single').addClass('selected');
    jQuery('.selected').next().addClass('next');
    jQuery(this).parents('.slider-list-single').prevAll().addClass('prev');
    let index = jQuery(this).parents('.slider-list-single').index();
    jQuery('.slider-content .slider-content-single').removeClass('active');
    jQuery('.slider-content').find('.slider-content-single').eq(index).addClass('active');

    var post_c = jQuery('.active .sliders-holder').find('.sliders-holder-single').length;
    if (post_c > 1) {
        jQuery('.active .sliders-holder-arrow').css('display', 'flex');
        jQuery('.active .sliders-holder').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: true,
            dots: false,
            nextArrow: '.active .sliders-holder-arrow__right',
            prevArrow: '.active .sliders-holder-arrow__left',
            adaptiveHeight: false,
        });
    }
});

// Language Dropdown
jQuery(document).on('click', '.language', function(e) {
    e.preventDefault();
    jQuery(this).find('i').toggleClass('ti-world ti-close')
    jQuery('.language-box').fadeToggle();
});

// newsletter
jQuery(document).on('click', '.newsletter', function(e) {
    e.preventDefault();
    jQuery('.side-popup').fadeIn(100);
});
jQuery(document).on('click', '.close-pop', function(e) {
    e.preventDefault();
    jQuery('.side-popup').fadeOut(100);
});