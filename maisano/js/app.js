// Fancy box init
jQuery(".fancybox, .fancy").fancybox();

// Scroll Header
jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 200) {
    jQuery("header").addClass("scroll");
  } else {
    jQuery("header").removeClass("scroll");
  }
});

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 200) {
    jQuery("header.scroll-header").addClass("visible");
  } else {
    jQuery("header.scroll-header").removeClass("visible");
  }
});

/* Smooth Scroll */
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
            scrollTop: target.offset().top,
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

/* Overlay (Open / Close) */

var tl = gsap.timeline({ paused: true });

tl.add(gsap.to(".overlay", { y: "0", ease: Sine.easeInOut, duration: 0.5 }), 0);
tl.addLabel("main-nav", ">");
tl.add(
  gsap.to(".overlay .overlay__right", {
    y: "0",
    ease: Sine.easeInOut,
    duration: 0.5,
  }),
  "<+=0.1"
);
tl.addLabel("secondary-nav", ">");
tl.add(
  gsap.to(".overlay .overlay__right .bottom", {
    y: "0",
    ease: Sine.easeInOut,
    duration: 0.5,
  }),
  "<+=0.3"
);
tl.addLabel("slogan", ">");

tl.add(
  gsap.from(".overlay .main-nav > ul > li", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
    stagger: 0.1,
  }),
  "main-nav-=0.2"
);
tl.add(
  gsap.from(".overlay .main-nav .button", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  ">-=0.3"
);

tl.add(
  gsap.to(".overlay .overlay__close", {
    opacity: 1,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  "secondary-nav-=0.2"
);
tl.add(
  gsap.from(".overlay .top h2, .overlay .top h2 address", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
    stagger: 0.1,
  }),
  "secondary-nav-=0.2"
);

tl.add(
  gsap.from(".overlay .logo", {
    y: "30px",
    opacity: 0,
    ease: Sine.easeInOut,
    duration: 0.3,
  }),
  "slogan-=0.2"
);

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

/* Overlay (Sub menu) */

$(".overlay .main-nav ul li.menu-item-has-children > a").click(function (e) {
  e.preventDefault();

  var submenu = $(this).next(".sub-menu");

  $(".overlay .main-nav ul li .sub-menu").not(submenu).slideUp(500);
  $(this).next(".sub-menu").slideToggle(500);

  if( $(this).hasClass('open') ) {
    $(".overlay .main-nav ul li a").removeClass('open');
    $(this).removeClass('open');
  }
  else {
    $(".overlay .main-nav ul li a").removeClass('open');
    $(this).addClass('open');
  }
});

/* Video Overlay */

$("[data-overlay-trigger]").click(function () {
  var id = $(this).data("overlay-trigger");
  $('[data-overlay="' + id + '"]')
    .css("display", "flex")
    .hide()
    .fadeIn(500);
});

$(".video-overlay .video-overlay__close").click(function () {
  $(this).parent().fadeOut(500);
});

/* Home Banner (Slider) */

var total = $('.home-banner__slider .home-banner__slider-single').length;
$(".current").html("1");

var banner_slider = new Swiper(".home-banner__slider", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  grabCursor: false,
  slidesPerView: "auto",
  allowTouchMove: true,
  autoplayDisableOnInteraction: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".text-slider-bullet",
    clickable: "true",
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
      );
    },
  },
  // onSlideChangeEnd: function () {
  //   $(".current").html(banner_slider.activeIndex)
  // }
});

var mySwiper = new Swiper(".home-banner-text-slider", {
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  speed: 300,
  effect: 'fade',
  grabCursor: false,
  slidesPerView: "auto",
  allowTouchMove: true,
});

banner_slider.controller.control = this.mySwiper;

// Get the Current slider number

banner_slider.on('transitionEnd', function() {
  $(".current").html(banner_slider.realIndex + 1);
});


/* Home Kompetenzen (Slider) & common for same modules */

new Swiper(".k-slider", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  breakpoints: {
    799: {
      //centeredSlides: true,
    },
  },
});

/* Home Projekte (Slider) */

new Swiper(".home-projekte-slider", {
  direction: "horizontal",
  loop: true,
  speed: 2000,
  grabCursor: false,
  slidesPerView: "auto",
  allowTouchMove: true,
  pagination: {
    el: ".home-projekte-bullets",
    bulletActiveClass: "active",
    bulletClass: "slide",
    modifierClass: "",
    clickable: true,
  },
  navigation: {
    nextEl: ".projekte-right",
    prevEl: ".projekte-left",
  },
});

/* Uber History (Slider) */

new Swiper(".uber-history-slider", {
  direction: "horizontal",
  loop: true,
  speed: 2000,
  grabCursor: false,
  slidesPerView: "auto",
  allowTouchMove: true,
  pagination: {
    el: ".uber-history-bullets",
    bulletActiveClass: "active",
    bulletClass: "slide",
    modifierClass: "",
    clickable: true,
  },
  // autoplay: {
  //     delay: 2,
  //     disableOnInteraction: false,
  //   }
});



/* CountUp */

$(".countup span").counterUp({
  delay: 100,
  time: 2000,
});


/*------------------------------------------
    = Counter Odometter (virticle)
-------------------------------------------*/

function custom_count(){
  var flag = true;
  $('.leistungen-facts, .uber-facts-single').each(function() {
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


// Load more content on click

$(document).ready(function () {
  size_li = $(".boxes .boxes-single").length;
  x=6;
  $('.boxes .boxes-single:lt('+x+')').show();
  if(size_li < x){
    $('.project-listing-button').hide();
  }
  $('#showmore').click(function (e) {
      e.preventDefault();
      x= (x+3 <= size_li) ? x+3 : size_li;
      $('.boxes .boxes-single:lt('+x+')').show();
      if(x == size_li){
          $('.project-listing-button').hide();
      }
  });
});