
// Fancy box init
jQuery(".fancybox, .fancy").fancybox();

// Scroll Header
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 50) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }
});


/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 93
                }, 1000);
                return false;
            }
        }
    });
});


// accordion
var accordionHead = jQuery('.accordion-list-head');
jQuery(document).on('click', '.accordion-list-head', function () {
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

/* Overlay (Open / Close) */

var tl = gsap.timeline({paused: true});

tl.add(gsap.to(".overlay", {y: "0", ease: Sine.easeInOut, duration: 0.5}), 0);
tl.addLabel("main-nav", ">");

tl.add(gsap.to(".overlay .overlay-block", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.1");
tl.addLabel("secondary-nav", ">");

tl.add(gsap.from(".overlay-heading, .overlay-menu ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "<-=0.1");

tl.add(gsap.to(".overlay .overlay__close", {opacity: 1, ease: Sine.easeInOut, duration: 0.3}), "secondary-nav-=0.2");





$('header .nav-toggle, .overlay .overlay__close').click(function() {
    toggle_overlay();
});

function toggle_overlay() {
    $('header .nav-toggle').toggleClass('open');
    $('.overlay').toggleClass('open');
    $('body').toggleClass('menu-open');

    if($('.overlay').hasClass("open")) {
        tl.play();
    } else {
        tl.reverse();
    }
}

/* Overlay (Sub menu) */

$('.overlay-menu ul li i').click(function() {
    var submenu = $(this).parents('li').find('.sub-menu');

    $('.overlay ul li .sub-menu').not(submenu).slideUp(500);
    $('.overlay ul li').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    $(this).parents('li').find('.sub-menu').slideToggle(500);

    $('.overlay ul li').not($(this)).removeClass('open');
    $(this).removeClass('fa-angle-down').addClass('fa-angle-up');
});

/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
    $(this).toggleClass('opened');
    $('.contact-overlay .contact-overlay__content').toggle();
});

/* Home Banner (Slider) */
jQuery('.home-banner .image-block').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
});

$(document).on( 'click', '.home-banner__listing-single', function(e) {
    e.preventDefault();
    const selectedSlide = $(this).attr("data-attr");
    $(".home-banner .image-block").slick('slickGoTo', selectedSlide);
});

/* Home losungen (Slider) */
jQuery('.home-losungen__slider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    centerMode: true,
    centerPadding: 60,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            },
        },
    ],
});

$(document).on( 'click', '.home-losungen__listing-single', function(e) {
    e.preventDefault();
    const selectedSlide = $(this).attr("data-attr");
    $(".home-losungen__slider").slick('slickGoTo', selectedSlide);    

    // take the url
    let link = $(this).attr('href');    
    $(".home-losungen__button a").attr('href', link);
});

/* Home Casestudies (Slider) */

jQuery('.home-casesudies__slider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    draggable: true,
    swipe: true,
    centerMode: true,
});

// Losungen Button Active

jQuery('.home-losungen__listing-single').on('click', function(e) {
    e.preventDefault();
    jQuery('.home-losungen__listing-single').removeClass('active');
    jQuery(this).addClass('active');
});


// tab vorteile

jQuery('.home-vorteile__tab .home-vorteile__tab-single[data-id = "tab1" ]').addClass('active');
jQuery('.home-vorteile__content .home-vorteile__content-single:first-child').addClass('active');

jQuery('.home-vorteile__tab .home-vorteile__tab-single').on('click', function() {
    jQuery('.home-vorteile__tab .home-vorteile__tab-single').removeClass('active');
    jQuery('.home-vorteile__tab .home-vorteile__tab-single').find('.content').slideUp();
    jQuery(this).addClass('active');
    jQuery(this).find('.content').slideDown();
    let id = jQuery(this).attr('data-id');
    jQuery('.home-vorteile__content .home-vorteile__content-single').removeClass('active');
    jQuery('#' + id).addClass('active');
});


// Tab Product

jQuery('.product-seedit-listing li:first-child').addClass('active');
jQuery('.product-seedit__content .product-seedit__content-single:first-child').addClass('active');

jQuery('.product-seedit-listing li').on('click', function() {
    jQuery('.product-seedit-listing li').removeClass('active');
    jQuery(this).addClass('active');
    let id = jQuery(this).attr('data-id');
    jQuery('.product-seedit__content .product-seedit__content-single').removeClass('active');
    jQuery('#' + id).addClass('active');
});
