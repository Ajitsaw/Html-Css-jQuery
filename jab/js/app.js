// fancybox
jQuery(".fancybox, .fancy").fancybox();

/* Nav */
jQuery('header .burger').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('body').find('.side-menu').toggleClass('open-menu');
    jQuery('body').toggleClass('menu-open');
});

// if (jQuery('.scroll-nav').length) {
//     var navigationTop = jQuery('.scroll-nav').offset().top;
// }
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

    // if (scroll > navigationTop + 130) {
    //     jQuery('.scroll-nav').addClass('menu-scrolled');
    // } else {
    //     jQuery('.scroll-nav').removeClass('menu-scrolled');
    // }
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
        dots: false,
        adaptiveHeight: false,
    });
}

// jQuery('.slider-tab').slick({
//     slidesToScroll: 1,
//     slidesToShow: 6,
//     arrows: false,
//     dots: false,
//     adaptiveHeight: false,
// });

/* Smooth Scroll */
var width = jQuery(window).width();

jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            headerHeight = $("header").height() - 10; // Get fixed header height
            nav_height = jQuery('.pageNavigation').height();
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - headerHeight
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

jQuery('.slider-list .slider-list-single .dots').on('click', function() {

    jQuery('.slider-list .slider-list-single').removeClass('selected prev next');
    jQuery(this).parents('.slider-list-single').addClass('selected');
    jQuery('.selected').next().addClass('next');
    jQuery(this).parents('.slider-list-single').prevAll().addClass('prev');
    let index = jQuery(this).parents('.slider-list-single').index();
    jQuery('.slider-content .slider-content-single').removeClass('active');
    jQuery('.slider-content').find('.slider-content-single').eq(index).addClass('active');

    var post_c = jQuery('.active .sliders-holder').find('.sliders-holder-single').length;

});

let slider_list = jQuery('.slider-list');
let slider_list_single = jQuery('.slider-list-single');
let slider_content = jQuery('.slider-content');
let slider_content_single = jQuery('.slider-content-single');

// Tab Arrow Click 
jQuery('.slider-arrow-left').on('click', function() {
    let index = jQuery('.slider-list-single.selected').index();
    let index_c = jQuery('.slider-content-single.active').index();

    if (index > 0) {
        jQuery('.slider-list-single.selected').removeClass('selected').prev().addClass('selected');
        jQuery('.slider-list-single').removeClass('prev');
        jQuery('.selected').prevAll().addClass('prev');
    }
    if (index_c > 0) {
        jQuery('.slider-content-single.active').removeClass('active').prev().addClass('active');
    }

    if (jQuery(window).width() > 1200) {
        if (index > 4) {
            let index = jQuery('.slider-list-single.selected').index();
            jQuery('.slider-list-single').eq(index - 5).removeClass('hide-tab');
        }
    }

    if (jQuery(window).width() < 1200) {
        if (index > 2) {
            let index = jQuery('.slider-list-single.selected').index();
            jQuery('.slider-list-single').eq(index - 2).removeClass('hide-tab');
        }
    }
    jQuery(".slider-list-single").removeClass('next')
    jQuery('.selected').next().addClass('next');


});

jQuery('.slider-arrow-right').on('click', function() {
    let lenght = jQuery(".slider-list-single").length;
    let lenght_c = jQuery(".slider-content-single").length;
    let index = jQuery('.slider-list-single.selected').index();
    console.log('this is' + index);
    let index_c = jQuery('.slider-content-single.active').index();
    if (index < lenght - 1) {
        jQuery('.slider-list-single.selected').removeClass('selected').next().addClass('selected');
        jQuery('.selected').prevAll().addClass('prev');
    }
    if (index_c < lenght_c - 1) {
        jQuery('.slider-content-single.active').removeClass('active').next().addClass('active');
    }
    if (jQuery(window).width() > 1200) {
        if (index > 4 && index < lenght - 1) {
            let index = jQuery('.slider-list-single.selected').index();

            jQuery('.slider-list-single').eq(index - 6).addClass('hide-tab');
        }
    }

    if (jQuery(window).width() < 1200) {
        if (index > 2 && index < lenght - 1) {
            let index = jQuery('.slider-list-single.selected').index();
            jQuery('.slider-list-single').eq(index - 4).addClass('hide-tab');
        }
    }
    jQuery(".slider-list-single").removeClass('next')
    jQuery('.selected').next().addClass('next');

});


// Hightlights click Js
let equip = jQuery('.highlights-listings .highlights-listings-single');
// Add Active class to first child
jQuery('.highlights-listings .highlights-listings-single:first-child').addClass('active');
// click function
jQuery(document).on('click', '.highlights-listings-single', function() {
    equip.removeClass('active');
    jQuery(this).addClass('active');
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


var products = jQuery('.product-image-slider .product-image-slider-single').length;
if (products > 3) {
    jQuery('.product-image-text .arrow-p').css('display', 'flex');
    jQuery('.product-image-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        nextArrow: '.arrow-p-right',
        prevArrow: '.arrow-p-left',
        adaptiveHeight: false,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
}

// Case studies section slider

$('.section-container').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
});

/* Mediatak Menu */
jQuery(document).on('click', '.ressourcen a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('.case-study-d').removeClass('open-d');
    jQuery('.ressourcen-d').addClass('open-d');
    jQuery('body').addClass('overflow-hidden');
});
jQuery(document).on('click', '.case-study a', function(e) {
    e.preventDefault();
    jQuery('header .burger').removeClass('open');
    jQuery('.side-menu').removeClass('open-menu');
    jQuery('.ressourcen-d').removeClass('open-d');
    jQuery('.case-study-d').addClass('open-d');
    jQuery('body').addClass('overflow-hidden');
});
jQuery(document).on('click', '.cross-ressourcen', function() {
    jQuery('.drop-down-menu').removeClass('open-d');
    jQuery('body').removeClass('overflow-hidden');
    jQuery('body').removeClass('menu-open');
});

// sidemenu arror add
jQuery(document).on('click', '.side-menu ul li span', function() {
    jQuery(this).siblings('ul').slideToggle(500);
    jQuery(this).toggleClass('rotate');
});



jQuery('.merkmale-slider-trigger').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    autoplay:true,
    speed:5000,
    //infinite: true,
    pauseOnHover:true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
        },
    }, ],
});



var products = jQuery('.product-image-slider-info .product-image-slider-single-info').length;
if (products > 3) {
    jQuery('.product-image-text-ino .arrow-p').css('display', 'flex');
    jQuery('.product-image-slider-info').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        nextArrow: '.arrow-p-right-ino',
        prevArrow: '.arrow-p-left-ino',
        asNavFor: '.home-about-ino-slider',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
    jQuery('.home-about-ino-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade:true,
        asNavFor: '.product-image-slider-info',
    });
}

// Details page tab style
jQuery('.aufbau-left .text-block:first-child()').show();
jQuery(document).on('click', '.aufbau-right-points-single' , function(){
    let id = jQuery(this).attr('data-id');
    jQuery('.aufbau-left .text-block').hide();
    jQuery('#' + id).show();
});

// filter open 

jQuery(document).on('click', '.filter-right' , function(){
    jQuery(this).find('i').toggleClass('ti-angle-up ti-angle-down');
    jQuery('.filter-overlay').toggleClass('filter-open');
    jQuery('.product').toggleClass('filter-open');

    if(jQuery(window).width() < 767) {
        jQuery('body').toggleClass('menu-open');
    }
});
jQuery(document).on('click', '.product, header' , function(){
    jQuery('.filter-overlay').removeClass('filter-open');
    jQuery('.product').removeClass('filter-open');
    if(jQuery(window).width() < 767) {
        jQuery('body').removeClass('menu-open');
    }
});