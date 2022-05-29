/* Equalizer */

$.fn.extend({
    equalizer: function () {
        let minHeight = 0;
        $(this).each(function () {
            if ($(this).outerHeight() > minHeight) {
                minHeight = $(this).outerHeight();
            }
        });
        $(this).css('min-height', minHeight + 'px');
    }
});

$('.ddedmo').equalizer();


// let hero = $(window).height();
let header = $('header').height();

/* Smooth Scroll */
jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - header
                }, 1000);
                return false;
            }
        }
    });
});

// Scroll Header


jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > header) {
        jQuery("header").addClass("scroll");
    } else {
        jQuery("header").removeClass("scroll");
    }
});

//window Width

let width = $(window).width();


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

$('.overlay .overlay-menu ul li.menu-item-has-children > a').click(function(e) {
    e.preventDefault();
    
    var submenu = $(this).next('.sub-menu');

    $('.overlay .overlay-menu li .sub-menu').not(submenu).slideUp(500);
    $(this).next('.sub-menu').slideToggle(500);

    $('.overlay .overlay-menu ul li.menu-item-has-children > a').removeClass('open');
    $(this).addClass('open');
});

/* Service (Slider) */

let service = new Swiper('.service .image__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
    navigation: {
        prevEl: ".service .arrow .left",
        nextEl: ".service .arrow .right",
    },
});

/* Unternehmen (Slider) */

let unternehmen = new Swiper('.unternehmen .image__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: '1',
    navigation: {
        prevEl: ".unternehmen .arrow .left",
        nextEl: ".unternehmen .arrow .right",
    },
});

/* Sicherheit (Slider) */

let sicherheit = new Swiper('.sicherheit .image__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 'auto',
    navigation: {
        prevEl: ".sicherheit .arrow .left",
        nextEl: ".sicherheit .arrow .right",
    }
});




/* Kunden (Slider) */

new Swiper('.kunden__slider:not(.reversed)', {
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

new Swiper('.kunden__slider.reversed', {
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

/* Similar Products (Slider) */

new Swiper('.product-others .slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 'auto',
});


/* Video Overlay */

$('[data-overlay-trigger]').click(function() {
    var id = $(this).data('overlay-trigger');
    $('[data-overlay="'+id+'"]').css('display', 'flex').hide().fadeIn(500);
});

$('.video-overlay .video-overlay__close').click(function() {
    $(this).parent().fadeOut(500);
});

// Search Popup Js

$('.searchBox').on('click', function(e){
    e.preventDefault();
    $('#search').addClass('open');
});

// Table popup(Service)
$('.service-post .text-button').on('click', function(e){
    e.preventDefault();
    let html = $(this).parents(".single").find(".table");
    console.log(html)
    $('#table').find(".popup-table").html(html);
    $('#table').addClass('open');
});

$('.popup-cross').on('click', function(){
    $('#search, #vertre, #table').removeClass('open');
});


// Product details thumbnail sorting

$('.thumbnail .single').on('click', function(e){
    e.preventDefault();
    const src = $(this).find('img').attr('src');
    console.log(src);

    $('.product-images .image img').attr('src', src);

    $('.thumbnail .single').not(this).removeClass('active');
    $(this).addClass('active');
    
});

// Tabs
$('.tab-nav .item:first-child').addClass('active');
$('.tab-content .single:first-child').addClass('active');
$('.tab-nav .item').on('click', function(e){
    e.preventDefault();
    const index = $(this).index();

    $('.tab-nav .item').not(this).removeClass('active');
    $(this).addClass('active');

    $('.tab-content .single').not(this).removeClass('active');
    $('.tab-content .single').eq(index).addClass('active');
});


// Select 2
$('.custom-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});


// cookie
jQuery(document).ready(function($) {
  
    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if( getCookie('popupCookie') != 'submited'){ 
      if(getCookie('popupCookie') != 'closed' ){
        $('#start').addClass('open');
      }
    }
    
    $('.popup-cross').click(function(){
      $('#start').removeClass('open');
      //sets the coookie to one minute if the popup is closed (whole numbers = days)
      setCookie( 'popupCookie', 'closed', .00069444444 );
    });
    
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
  });


// Lang Menu
var value = $('.current-lang').attr('value');
$('#' + value).hide();

/* Ajax Form */

$('.ajax-form').submit(function (e) {
    e.preventDefault();

    let form = $(this),
        url = $(this).attr("action"),
        data = $(this).serialize();

    console.log(data);

    $.ajax({
        type: "POST",
        url: url,
        data: data,
    }).done(function (response) {
        console.log(response);
        if (response == 1) {
            form.find('.error').hide();
            form.find('.success').show();
        } else {
            form.find('.error').show();
            form.find('.success').hide();
        }
    });
});


$('.sicherheit .image .swiper-slide').equalizer();
$('.sicherheit .image .swiper-slide img').equalizer();