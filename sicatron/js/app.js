
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
tl.add(gsap.from(".overlay .overlay-logo", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "ul-=0.2");

tl.add(gsap.to(".overlay .overlay-block", {y: "0", ease: Sine.easeInOut, duration: 0.5}), "<+=0.1");
tl.addLabel("secondary-nav", ">");

tl.add(gsap.from(".overlay-heading,.overlay ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}), "ul-=0.2");

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

$('.overlay .main-nav ul li a').click(function() {
    var submenu = $(this).next('.sub-menu');

    $('.overlay .main-nav ul li .sub-menu').not(submenu).slideUp(500);
    $(this).next('.sub-menu').slideToggle(500);

    $('.overlay .main-nav ul li').not($(this)).removeClass('open');
    $(this).toggleClass('open');
});

/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
    $(this).toggleClass('opened');
    $('.contact-overlay .contact-overlay__content').toggle();
});


/* Home Customers (Slider) */

new Swiper('.home-customers__slider:not(.reversed)', {
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

new Swiper('.home-customers__slider.reversed', {
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


/* Home Solutions (Slider) */

new Swiper('.home-product__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    breakpoints: {
        799: {
            //centeredSlides: true,
            spaceBetween: 15,
        },
    },
});

/* Home Solutions (Slider) */

new Swiper('.testimonial__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.testimonial__slider-right',
        prevEl: '.testimonial__slider-left'
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
});

/* CountUp */

$('.countup span').counterUp({
    delay: 100,
    time: 2000
});

// Referanze tab Slider


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

// tab slider 

jQuery('.slider-tab .slider-single[data-id = "tab1" ]').addClass('selected');
jQuery('.selected').next().addClass('next');
jQuery('.slider-content .slider-content-single:first-child').addClass('active');

jQuery('.slider-tab .slider-single').on('click', function() {
    jQuery('.slider-tab .slider-single').removeClass('selected');
    jQuery(this).addClass('selected');
    //jQuery('.selected').next().addClass('next');
    //jQuery(this).parents('.slider-list-single').prevAll().addClass('prev');
    let id = jQuery(this).attr('data-id');
    jQuery('.slider-content .slider-content-single').removeClass('active');
    jQuery('#' + id).addClass('active');
});




/*------------------------------------------
    = Counter
-------------------------------------------*/

function custom_count(){
    var flag = true;
    $('.home-facts').each(function() {
        if ($(this).isInViewport()) {   // Here we check perticular section is in the viewport or number-counter-section
            if (flag) {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
                flag = false;
            }
        } else {}
    });
}

// for check the section in view port or not;
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
    console.log(elementBottom > viewportTop && elementTop < viewportBottom);
};

$(document).ready(function() {
    //  odometer section is on view-port or not
    custom_count();
    //resize-function
    $(window).resize(function() {
        custom_count();
    });
    
    $(window).on("scroll",function(){
      custom_count();
    });
});


// Dropdown menu js

$('.overlay-block-toggle').on('click', function(){
    $(this).parents('.overlay-block').find('.overlay-menu-small').slideToggle('slow');
    $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
});


// Custom drop down js
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});