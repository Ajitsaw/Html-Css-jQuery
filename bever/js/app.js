
/* Equalizer */

$.fn.extend({
    equalizer: function() {
        var minHeight = 0;
        $(this).each(function() {
            if($(this).outerHeight() > minHeight) {
                minHeight = $(this).outerHeight();
            }
        });
        $(this).css('min-height', minHeight + 'px');
    }
  });
  
  
  $('.news .text .desc').equalizer();
  $('.home-product-holder__single-text').equalizer();
  $('.home-product-holder__single').equalizer();
  $('.product-holder__single').equalizer();
  $('.product-holder__single-text').equalizer();
  $('.karriere-vorteile-single').equalizer();
  

  

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

// Search function
jQuery('.searchButton').on('click', function() {
    jQuery(this).parents('.searchBox').toggleClass('open-box');
});

/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        var height = $('header').outerHeight();
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - height
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
tl.add(gsap.to(".overlay .overlay__right", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.1");
tl.addLabel("secondary-nav", ">");
tl.add(gsap.to(".overlay .overlay__right .bottom", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.3");
tl.addLabel("slogan", ">");

tl.add(gsap.from(".overlay .main-nav > ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "main-nav-=0.2");
tl.add(gsap.from(".overlay .main-nav .button", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3}), ">-=0.3");

tl.add(gsap.to(".overlay .overlay__close", {opacity: 1, ease: Sine.easeInOut, duration: 0.3}), "secondary-nav-=0.2");
tl.add(gsap.from(".overlay .secondary-nav ul li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "secondary-nav-=0.2");

tl.add(gsap.from(".overlay .slogan", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3}), "slogan-=0.2");

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


/* -----------------------------
// Overlay (Sub menu)
-------------------------------*/

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

/* -----------------------------
// CountUp
-------------------------------*/

function counterUp(element, startAtPercentage) {
    if (startAtPercentage == null) {
        startAtPercentage = 0;
    }
  
    var numericValue = getNumericValue(element);
  
    jQuery(element).counterUp({
        beginAt: (numericValue > 0)
            ? (numericValue * startAtPercentage / 100)
            : undefined,
    });
  }
  
  function getNumericValue(element) {
    try {
        return Number(element.innerText
            // Remove decimal points
            .replace(/.\D+/g, '')
            // Remove thousands separator and other symbols
            .replace(/\D/g, ''));
    } catch (error) {
        return 0;
    }
  }
  jQuery('.countup span').each(function (index, element) {
      counterUp(element,{
        delay: 100,
        time: 2000,
      });
  });

/* -----------------------------
// Home Banner (Slider)
-------------------------------*/

var total = $(".home-banner__slider .home-banner__slider-single").length;
$(".home-banner .total").html(total);
$(".home-banner .current").html("1");

var banner_slider = new Swiper(".home-banner__slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  effect: "fade",
  on: {
    init: function () {
      $(".home-banner .swiper-progress-bar").removeClass("animate");
      $(".home-banner .swiper-progress-bar").removeClass("active");
      $(".home-banner .swiper-progress-bar").eq(0).addClass("animate");
      $(".home-banner .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".home-banner .swiper-progress-bar").removeClass("animate");
      $(".home-banner .swiper-progress-bar").removeClass("active");
      $(".home-banner .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".home-banner .swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});
$(".home-banner__slider").hover(
  function () {
    swiper.autoplay.stop();
    $(".home-banner .swiper-progress-bar").removeClass("animate");
  },
  function () {
    swiper.autoplay.start();
    $(".home-banner .swiper-progress-bar").addClass("animate");
  }
);

banner_slider.on("transitionEnd", function () {
  $(".home-banner .current").html(banner_slider.realIndex + 1);
});


/* -----------------------------
// Product Slider
-------------------------------*/

new Swiper(".product-slider", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".image-slider-arrow .right",
      prevEl: ".image-slider-arrow .left",
    },
});


/* Career page (Slider) */

new Swiper('.karriere-testimonial-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 'auto',
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* Custom Select */

$('.custom-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});

/* News Filter */

$('.news-dropdown [data-filter]').change(function() {
    var value = $(this).val();

    $('[data-news]').each(function() {
        if(value == '*' || $(this).data('cat') == value) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


// News letter Popup

$('.newsletter').on('click', function(e){
    e.preventDefault();
    $('.newsletter-holder').fadeToggle();
    $('body').toggleClass('menu-open');
});

$('.newsletter-holder').on('click', function(e){
    e.preventDefault();
    $(this).fadeToggle();
    $('body').toggleClass('menu-open');
});

$('.newsletter-holder__content').on('click', function(e){
    e.stopPropagation();
});


// kontakt poup

$('.call-back').on('click', function(e){
    e.preventDefault();
    $('.kontakt-form').fadeToggle();
    $('body').toggleClass('menu-open');
});

$('.kontakt-form').on('click', function(e){
    e.preventDefault();
    $(this).fadeToggle();
    $('body').toggleClass('menu-open');
});

$('.kontakt-form__content').on('click', function(e){
    e.stopPropagation();
});

// Register Popup

$('.register').on('click', function(e){
    e.preventDefault();
    $('.register-block').toggleClass('open');
    $('body').toggleClass('menu-open');
});

$('.pop-close').on('click', function(e){
    e.preventDefault();
    $('.register-block').toggleClass('open');
    $('body').toggleClass('menu-open');
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



    size_li = $(".news-page__news .row [class^='col-']").length;
    console.log(size_li);
    x=1;
    $('.news-page__news [class^="col-"]:lt('+x+')').show();
    $('.home-news__button .button').click(function(e) {
        e.preventDefault();
        x= (x+4 <= size_li) ? x+4 : size_li;
        $('.news-page__news [class^="col-"]:lt('+x+')').show();
    });
    if(x=size_li) {
        $('.home-news__button .button').hide();
    }