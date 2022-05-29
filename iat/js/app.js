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

/* Scroll up */

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 500) {
      jQuery('.scroll-up').addClass('scroll');
  } else {
      jQuery('.scroll-up').removeClass('scroll');
  }
});

jQuery(window).on('load', function () {
  jQuery('.loader').fadeOut('slow');
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

// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".fact", {
//   scrollTrigger: {
//     trigger: ".fact",
//     triggerActions: "restart none none none"
//   },
//   y: "300px",
//   opacity: 1,
//   ease: Sine.easeInOut,
//   duration: 1,
//   stagger: 0.1,
// });

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
  pagination: {
    el: '.bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
  },
  navigation: {
    nextEl: '.homebanner-button-next',
    prevEl: '.homebanner-button-prev',
  }, 
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


/* projekte-banner__slider (Slider) */

var projectBannerImage = new Swiper('.projekte-banner__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  // autoplay: {
  //     delay: 5000,
  //     pauseOnMouseEnter: true
  // },
  autoplay: false,
  pagination: {
    el: '.bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
  },
  navigation: {
    nextEl: '.projekte-button-next',
    prevEl: '.projekte-button-prev',
  }, 
});

var projectBannerContent = new Swiper('.projekte-banner__content', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  // autoplay: {
  //     delay: 5000,
  //     pauseOnMouseEnter: true
  // },
  autoplay: false,
  pagination: {
    el: '.bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
  },
  navigation: {
    nextEl: '.projekte-button-next',
    prevEl: '.projekte-button-prev',
  }, 
});


projectBannerImage.on('slideChangeTransitionStart', function() {
  projectBannerContent.slideTo(projectBannerImage.activeIndex);
});

projectBannerContent.on('transitionStart', function(){
  projectBannerImage.slideTo(projectBannerContent.activeIndex);
});


/* erfolgs-banner__slider (Slider) */

new Swiper('.erfolgs-banner__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  // autoplay: {
  //     delay: 5000,
  //     pauseOnMouseEnter: true
  // },
  autoplay: false,
  pagination: {
    el: '.bullets',
    bulletActiveClass: 'active',
    bulletClass: 'slide',
    modifierClass: '',
    clickable: true
  },
  navigation: {
    nextEl: '.erfolgsbanner-button-next',
    prevEl: '.erfolgsbanner-button-prev',
  },
});



/* home-events__slider (Slider) */

new Swiper('.home-events__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  // autoplay: {
  //     delay: 5000,
  //     pauseOnMouseEnter: true
  // },
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 0 + (index + 1) + "<b><i></i></b></span>";
    },
  },
  navigation: {
    nextEl: '.event-button-next',
    prevEl: '.event-button-prev',
  }, 
});


/* uberuns-die__slider (Slider) */

new Swiper('.uberuns-die__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  // autoplay: {
  //     delay: 5000,
  //     pauseOnMouseEnter: true
  // },
  autoplay: false,
  navigation: {
    nextEl: '.ubernus-button-next',
    prevEl: '.ubernus-button-prev',
  }, 
});

/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
  $(this).toggleClass('opened');
  $('.contact-overlay .contact-overlay__content').toggle();
});




/* CountUp */

$(".countup span").counterUp({
  delay: 100,
  time: 2000,
});

/* Fancybox */
$('.fancybox').fancybox({
  padding : 0,
  openEffect  : 'elastic'
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

// tab slider 

$('.slider-tab .slider-single:first-child').addClass('selected');
$('.selected').next().addClass('next');
$('.slider-content .slider-content-single:first-child').addClass('active');

// slider tab
$('.slider-tab').slick({
  infinite: true,
  slidesToScroll: 3,
  slidesToShow: 5,
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
              variableWidth: true,
          },
      },
      {
          breakpoint: 575,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
          },
      },
  ],
});

$(document).on('click', '.filter-option .slider-single', function(){
  $('.filter-option .slider-single').removeClass('selected');
  $(this).addClass('selected');

  var cat = $(this).attr('data-category');
  if(cat !== 'all'){
    $('.slider-content .filter-item').each(function(){
      $(this).removeClass('selected');
    });
    $('.slider-content .filter-item[data-match='+ cat +']').addClass('selected');
  }

  else{
    $('.slider-content .filter-item').each(function(){
      $(this).addClass('selected');
    });
  }
});

// Custom drop down js
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.filter-select').change(function () {
  console.log("object");

  var filter = $(this).val();
  if (!filter == '1') {
      console.log("test");
      $('download-single').show();


  } else {
      $('download-single').hide();

      $('download-single[data-filter="' + filter + '"]').show();

  }
});

// Custom drop down js
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function () {
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

  $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});


$('.home-slide_single').mouseenter(function(){
    $(this).addClass('isActive');
    $('.home-slide_holder').addClass('isExpanded');
});

$('.home-slide_single').mouseleave(function(){
  $('.home-slide_single').removeClass('isActive');
  $('.home-slide_holder').removeClass('isExpanded');
});

$('.home-slide_item').click(function(){
  $(this).next().slideToggle();
  $('.home-slide_content').not($(this).next()).slideUp();
});

$('.home-investment_item').mouseenter(function(){
  $(this).parent().addClass('isActive');
  $('.home-investment_wrapper').addClass('isExpanded');
  $('.home-investment').addClass('isActive');
  var imageDataSource = $(this).attr('data-src');
  $('#bgimage').attr('src', imageDataSource);
  $('.home-investment_image').addClass('isActive');
});
$('.home-investment_item').mouseleave(function(){
  $('.home-investment_single').removeClass('isActive');
  $('.home-investment_wrapper').removeClass('isExpanded');
  $('.home-investment').removeClass('isActive');
  $('.home-investment_image').removeClass('isActive');
  $('#bgimage').attr('src', '');
});

/* Lightbox */

// lightbox.option({
//   'albumLabel': "Bild %1 von %2"
// });

$(function () {
  $(".events__list__single").slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".events__list__single:hidden").slice(0, 3).slideDown();
      if ($(".events__list__single:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 700
      }, 1500);
  });
});


$(function () {
  $(".eventsone__list__single").slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".eventsone__list__single:hidden").slice(0, 3).slideDown();
      if ($(".eventsone__list__single:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 700
      }, 1500);
  });
});

// $('.portfolio-wrap_box').mouseenter(function(){
//   $('.portfolio-wrap_content_wrap').slideToggle();
// });
// $('.portfolio-wrap_box').mouseleave(function(){
//   $('.portfolio-wrap_content_wrap').slideToggle();
// });

$(".nav-search a").click(function(){
  $(".header-search").addClass("active");
});
$(".search__close").click(function(){
  $(".header-search").removeClass("active");
});

$('.event-wrap_block [data-filter]').click(function(e) {
  e.preventDefault();
  var value = $(this).attr('id');

  $('[data-events]').each(function() {
      if(value == '*' || $(this).data('cat') == value) {
          $(this).show();
      } else {
          $(this).hide();
      }
  });
});


$(function () {
  $(".suche-event__wrap__single").slice(0, 2).css('display', 'flex');
  if ($(".suche-event__wrap__single:hidden").length == 0) {
    $("#sucheload").fadeOut('slow');
    $('.suche-event__wrap').addClass('complete');
  }
  $("#sucheloadMore").on('click', function (e) {
      e.preventDefault();
      $(".suche-event__wrap__single:hidden").slice(0, 2).css('display', 'flex');
      if ($(".suche-event__wrap__single:hidden").length == 0) {
          $("#sucheload").fadeOut('slow');
          $('.suche-event__wrap').addClass('complete');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 700
      }, 1500);
  });
});

$(function () {
  $(".erfolgs-event__wrap__single").slice(0, 2).css('display', 'flex');
  if ($(".erfolgs-event__wrap__single:hidden").length == 0) {
    $("#erfolgsload").fadeOut('slow');
    $('.erfolgs-event__wrap').addClass('complete');
  }
  $("#erfolgsloadMore").on('click', function (e) {
      e.preventDefault();
      $(".erfolgs-event__wrap__single:hidden").slice(0, 2).css('display', 'flex');
      if ($(".erfolgs-event__wrap__single:hidden").length == 0) {
          $("#erfolgsload").fadeOut('slow');
          $('.erfolgs-event__wrap').addClass('complete');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 700
      }, 1500);
  });
});

$(function () {
  $(".projekte-event__wrap__single").slice(0, 2).css('display', 'flex');
  if ($(".projekte-event__wrap__single:hidden").length == 0) {
    $("#projekteload").fadeOut('slow');
    $('.projekte-event__wrap').addClass('complete');
  }
  $("#projekteloadMore").on('click', function (e) {
      e.preventDefault();
      $(".projekte-event__wrap__single:hidden").slice(0, 2).css('display', 'flex');
      if ($(".projekte-event__wrap__single:hidden").length == 0) {
          $("#projekteload").fadeOut('slow');
          $('.projekte-event__wrap').addClass('complete');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 700
      }, 1500);
  });
});