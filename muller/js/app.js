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

// $('.news-overview .news-overview__news .news .text .title').equalizer();




/* -----------------------------
// Fancy box init
-------------------------------*/

jQuery(".fancybox, .fancy").fancybox();

/* -----------------------------
// Scroll Header
-------------------------------*/

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 50) {
    jQuery("header").addClass("scroll");
  } else {
    jQuery("header").removeClass("scroll");
  }
});

/* -----------------------------
// Smooth Scroll
-------------------------------*/

jQuery(function () {
  jQuery('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = jQuery(this.hash);
      target = target.length
        ? target
        : jQuery("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        jQuery("html, body").animate(
          {
            scrollTop: target.offset().top - 93,
          },
          1000
        );
        return false;
      }
    }
  });
});

// accordion

var accordionHead = jQuery(".accordion-list-head");
jQuery(document).on("click", ".accordion-list-head", function () {
  if (jQuery(this).hasClass("active")) {
    accordionHead.removeClass("active");
    jQuery(".accordion-list-content").slideUp();
  } else {
    accordionHead.removeClass("active");
    jQuery(this).addClass("active");
    jQuery(".accordion-list-content").slideUp();
    jQuery(this).siblings(".accordion-list-content").slideToggle();
  }
});

/* -----------------------------
// Overlay (Open / Close)
-------------------------------*/

var tl = gsap.timeline({ paused: true });
tl.add(gsap.to(".overlay", {y: "0", ease: Sine.easeInOut, duration: 0.5}), 0);
tl.addLabel("main-nav", ">");

tl.add(gsap.from(".overlay .main-nav > ul > li", {y: "30px", opacity: 0, ease: Sine.easeInOut, duration: 0.3, stagger: 0.1}));

tl.add(gsap.to(".overlay .overlay__close", {opacity: 1, ease: Sine.easeInOut, duration: 0.3}), "secondary-nav-=0.2");


$("header .nav-toggle, .overlay .overlay__close").click(function () {
  toggle_overlay();
});

function toggle_overlay() {
  $("header .nav-toggle").toggleClass("open");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("menu-open");

  if ($(".overlay").hasClass("open")) {
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

/* -----------------------------
// Common Banner (Slider)
-------------------------------*/

var total = $(".slider-banner__slider .slider-banner__slider-single").length;
$(".slider-banner .total").html(total);
$(".slider-banner .current").html("1");

var banner_slider = new Swiper(".slider-banner__slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  effect: "fade",
  pagination: {
    el: ".slider-banner-bullets",
    bulletActiveClass: "active",
    bulletClass: "slide",
    modifierClass: "",
    clickable: true,
  },
});

banner_slider.on("transitionEnd", function () {
  $(".slider-banner .current").html(banner_slider.realIndex + 1);
});


/* -----------------------------
// CountUp
-------------------------------*/

$(".countup span").counterUp({
  delay: 100,
  time: 2000,
});


/* -----------------------------
// Partner Slider
-------------------------------*/

new Swiper(".home-partners__slider", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".partners__right",
    prevEl: ".partners__left",
  },
});

/* -----------------------------
// Job Video (Slider)
-------------------------------*/

var total = $(".job-video_slider-single").length;
$(".slider-job-count .total").html(total);
$(".slider-job-count .current").html("1");

var banner_slider = new Swiper(".job-video_slider", {
  direction: 'vertical',
  mousewheelControl: true,
  speed: 500,
  loop: true,
  effect: "slide",
  slidesPerView: 1,
  navigation: {
    nextEl: ".bottom",
    prevEl: ".top",
  },
  pagination: {
    el: ".slider-job-bullets",
    bulletActiveClass: "active",
    bulletClass: "slide",
    modifierClass: "",
    clickable: true,
  },
});

banner_slider.on("transitionEnd", function () {
  $(".slider-job-count .current").html(banner_slider.realIndex + 1);
});


/* Custom Select */

$('.news-dropdown select, .filter-dropdown select').select2({
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

/* Demo Overlay */

jQuery('.demo-button').click(function(e) {
	e.preventDefault();
	jQuery('.demo-overlay').css("display", "flex").hide().fadeIn(500);
});

jQuery('.demo-overlay .demo-overlay__close').click(function() {
	jQuery(this).parent().fadeOut(500);
});

