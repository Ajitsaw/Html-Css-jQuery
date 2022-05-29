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
// Home System (Slider)
-------------------------------*/


var total1 = $(".home-system__slider .home-system__slider-single").length;
$(".home-system .total").html(total1);
$(".home-system .current").html("1");

var system_slider = new Swiper(".home-system__slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  on: {
    init: function () {
      $(".home-system .swiper-progress-bar").removeClass("animate");
      $(".home-system .swiper-progress-bar").removeClass("active");
      $(".home-system .swiper-progress-bar").eq(0).addClass("animate");
      $(".home-system .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".home-system .swiper-progress-bar").removeClass("animate");
      $(".home-system .swiper-progress-bar").removeClass("active");
      $(".home-system .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".home-system .swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});
$(".home-system__slider").hover(
  function () {
    swiper.autoplay.stop();
    $(".home-system .swiper-progress-bar").removeClass("animate");
  },
  function () {
    swiper.autoplay.start();
    $(".home-system .swiper-progress-bar").addClass("animate");
  }
);

system_slider.on("transitionEnd", function () {
  $(".home-system .current").html(system_slider.realIndex + 1);
});


/* -----------------------------
// Common Banner (Slider)
-------------------------------*/

var total = $(".common-banner-slider .common-banner__slider-single").length;
$(".common-banner-slider .total").html(total);
$(".common-banner-slider .current").html("1");

var banner_slider = new Swiper(".common-banner__slider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  effect: "fade",
  on: {
    init: function () {
      $(".common-banner-slider .swiper-progress-bar").removeClass("animate");
      $(".common-banner-slider .swiper-progress-bar").removeClass("active");
      $(".common-banner-slider .swiper-progress-bar").eq(0).addClass("animate");
      $(".common-banner-slider .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".common-banner-slider .swiper-progress-bar").removeClass("animate");
      $(".common-banner-slider .swiper-progress-bar").removeClass("active");
      $(".common-banner-slider .swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".common-banner-slider .swiper-progress-bar").eq(0).addClass("animate");
    },
  },
});
$(".common-banner__slider").hover(
  function () {
    swiper.autoplay.stop();
    $(".common-banner-slider .swiper-progress-bar").removeClass("animate");
  },
  function () {
    swiper.autoplay.start();
    $(".common-banner-slider .swiper-progress-bar").addClass("animate");
  }
);

banner_slider.on("transitionEnd", function () {
  $(".common-banner-slider .current").html(banner_slider.realIndex + 1);
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

// $(".countup span").counterUp({
//   delay: 100,
//   time: 2000,
// });


/* -----------------------------
// Partner Slider
-------------------------------*/

new Swiper(".partners__slider", {
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
// History Year (Slider)
-------------------------------*/

var history_right = new Swiper(".history-right-slider", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: "5",
  navigation: {
    nextEl: ".history-arrow-down",
    prevEl: ".history-arrow-up",
  },
  breakpoints: {
    767: {
      direction: "horizontal",
      slidesPerView: "1",
    },
  },
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


/* Jobs */

$('.jobs-overview .jobs-overview__jobs .select-view button').click(function() {
  var view = $(this).data('view');

  $('.jobs-overview .jobs-overview__jobs .select-view button').removeClass('active');
  $(this).addClass('active');

  $('.jobs-overview .jobs-overview__jobs .overview').hide();
  $('.jobs-overview .jobs-overview__jobs .overview[data-view="'+view+'"]').show();

  $('.jobs-overview .jobs-overview__jobs .overview .job .info .title').equalizer();
});

/* -----------------------------
// History Content (Slider)
-------------------------------*/

var history_left = new Swiper('.history-left-slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: "auto",
});

history_right.controller.control = this.history_left;

// Products and Branchen scroll Js

var product_total = $(".produkte-holder .produkte-holder__single, .branchen-holder .branchen-holder__single").length;
$(".produkte-section .total, .branchen-section .total").html(product_total);
$(".produkte-section .current, .branchen-section .current").html("1");

// Height of progress bar

$('.produkte_progress-bar, .branchen_progress-bar').css('height', 100/product_total + '%');

// Check the scroll
var sec = $('.produkte-section, .branchen-section')
if (sec.length) {
  var produkte_scroll = sec.offset().top;
}
let produkte_height =  $('.produkte-section, .branchen-section').height();


// Show Progress bar on scroll

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > produkte_scroll - 150) {
    jQuery(".produkte-progress, .branchen-progress").addClass("show");
  } else {
    jQuery(".produkte-progress, .branchen-progress").removeClass("show");
  }
  if (jQuery(document).scrollTop() > produkte_scroll + produkte_height - produkte_height/product_total) {
    jQuery(".produkte-progress, .branchen-progress").removeClass('show');
  }
});


// Previous Click

var i = 0;
jQuery(document).on("click", ".produkte__left, .branchen__left", function (e) {
  e.preventDefault();
  i--;
  let offset = $(".produkte-holder__single, .branchen-holder__single").eq(i).offset().top;
  $('html, body').stop().animate({
    scrollTop: offset
  }, 400);
});

// Next Click

jQuery(document).on("click", ".produkte__right, .branchen__right", function (e) {
  e.preventDefault();
  i++;
  let offset = $(".produkte-holder__single, .branchen-holder__single").eq(i).offset().top;
  $('html, body').stop().animate({
    scrollTop: offset
  }, 400);
});

// scroll function

jQuery(window).scroll(function () {
  var scrollPos = $(document).scrollTop();
  $('.produkte-holder__single, .branchen-holder__single').each(function () {
      var currLink = $(this);
      if (currLink.offset().top < scrollPos && scrollPos < currLink.offset().top + currLink.height() - 100) {
        currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
      let active = $('.produkte-holder__single.active, .branchen-holder__single.active');
      let index = active.attr('data-id');
      $('.produkte-progress .current, .branchen-progress .current').html(index);

      $('.produkte_progress-bar, .branchen_progress-bar').css('height', 100/product_total*index + '%');
  });
});
