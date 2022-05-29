
// Fancy box init
jQuery(".fancybox, .fancy").fancybox();

// Scroll Header
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > 200) {
        jQuery('header').addClass('scroll');
    } else {
        jQuery('header').removeClass('scroll');
    }
});

jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 200) {
        jQuery('header.scroll-header').addClass('visible');
    }
    else {
        jQuery('header.scroll-header').removeClass('visible');
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

tl.add(gsap.from(".overlay .main-nav > ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}));

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

$('.overlay .main-nav ul li.menu-item-has-children > a').click(function(e) {
    e.preventDefault();
    
    var submenu = $(this).next('.sub-menu');

    if($(this).parents('li').hasClass('opened')) {
        $('.overlay .main-nav ul li.menu-item-has-children').removeClass('opened');
    }
    else {
        $(this).parents('li').addClass('opened');
    }

    $('.overlay .main-nav ul li .sub-menu').not(submenu).slideUp(500);
    $(this).next('.sub-menu').slideToggle(500);
});

$('.overlay .main-nav ul li ul li i').click(function(e) {
    e.preventDefault();
    
    var submenu = $(this).next('ul');

    if($('.overlay .main-nav ul li ul li').hasClass('open')) {
        $('.overlay .main-nav ul li ul li').removeClass('open');
    }
    else {
        $(this).parent('li').addClass('open');
    }

    $('.overlay .main-nav ul li ul li ul').not(submenu).slideUp(500);
    $(this).next('ul').slideToggle(500);
});


/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
    $(this).toggleClass('opened');
    $('.contact-overlay .contact-overlay__content').toggle();
});


/* Video Overlay */

$('[data-overlay-trigger]').click(function() {
    var id = $(this).data('overlay-trigger');
    $('[data-overlay="'+id+'"]').css('display', 'flex').hide().fadeIn(500);
});

$('.video-overlay .video-overlay__close').click(function() {
    $(this).parent().fadeOut(500);
});


/* Home Banner (Slider) */

new Swiper('.home-banner__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: true,
    pagination: {
        el: '.home-bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    // autoplay: {
    //     delay: 2,
    //     disableOnInteraction: false,
    //   }
});

/* Home Behandlungen (Slider) */

new Swiper('.home-behandlungen__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    breakpoints: {
        799: {
            //centeredSlides: true,
        },
    },
});


/* Home Facharzte (Slider) */

new Swiper('.facharzte-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: true,
    pagination: {
        el: '.facharzte-bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    // autoplay: {
    //     delay: 2,
    //     disableOnInteraction: false,
    //   }
});

/* Home Customers (Slider) */

new Swiper('.customer-slider:not(.reversed)', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    }
});

new Swiper('.customer-slider.reversed', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    }
});


/* Home Testimonial (Slider) */

new Swiper('.home-testimonails__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});



/* Vito Testimonail (Slider) */

new Swiper('.vito-testimonail-slider, .behandlungen-testimonail-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: true,
    pagination: {
        el: '.testimonail-bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    },
    // autoplay: {
    //     delay: 2,
    //     disableOnInteraction: false,
    //   }
});

/* CountUp */

$('.countup span').counterUp({
    delay: 100,
    time: 2000
});

/* Sidebar menu js */

$('.sidebar-menu li i').click(function() {

    if($(this).parents('li').hasClass('opened')) {
        $(this).parents('li').removeClass('opened');
        $(this).parents('li').find('.submenu').slideUp();
    }
    else {
        $('.sidebar-menu li').find('.submenu').slideUp();
        $('.sidebar-menu li').removeClass('opened');
        $(this).parents('li').find('.submenu').slideDown();
        $(this).parents('li').addClass('opened');
        
    }
});

/* Custom Select */

$('.custom-select, .netzwerk-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});




