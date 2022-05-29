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

/* Scroll up */

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 500) {
      jQuery('.scroll-up').addClass('scroll');
  } else {
      jQuery('.scroll-up').removeClass('scroll');
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

$(".overlay .main-nav ul li.menu-item-has-children > a > i.fal").click(function (e) {
  e.preventDefault();

  var submenu = $(this).parent().next(".sub-menu");

  $(".overlay .main-nav ul li .sub-menu").not(submenu).slideUp(500);
  $(this).parent().next(".sub-menu").slideToggle(500);

  if( $(this).parent().hasClass('open') ) {
    $(".overlay .main-nav ul li a").removeClass('open');
    $(this).parent().removeClass('open');
  }
  else {
    $(".overlay .main-nav ul li a").removeClass('open');
    $(this).parent().addClass('open');
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


/* Home Customers (Slider) */


new Swiper('.customer-slider', {
  direction: 'horizontal',
  loop: true,
  speed: 6000,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  grabCursor: false,
  slidesPerView: 'auto',
  centeredSlides: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  }
});

new Swiper('.customer-slider_reversed', {
  direction: 'horizontal',
  loop: true,
  speed: 6000,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  grabCursor: false,
  slidesPerView: 'auto',
  allowTouchMove: false,
  centeredSlides: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    reverseDirection: true,
	  waitForTransition: true,
    enabled: true,
  }
});


/* Home Solutions (Slider) */

new Swiper('.home-solutions__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});


/* About Solutions (Slider) */

new Swiper('.about-solutions__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});


/* About Solutions (Slider) */

new Swiper('.success-story_slider', {
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  grabCursor: false,
  slidesPerView: 'auto',
  allowTouchMove: true,
  pagination: {
      el: '.bullets',
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

/* wir_legan_slider (Slider) */

new Swiper('.wir_legan_slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});


/* Find Daycare (Slider) */

new Swiper('.find-daycare_slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});


/* About Find Daycare (Slider) */

new Swiper('.about-find-daycare_slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});



/* expert_slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.expert-box').length;
  if(numItems > 2) {
    new Swiper('.expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.expert-box').length;
  if(numItems > 2) {
    new Swiper('.expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* overview expert slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.overview-expert-box').length;
  if(numItems > 2) {
    new Swiper('.overview-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.overview-expert-box').length;
  if(numItems > 2) {
    new Swiper('.overview-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* overview expert slider (Slider) */

if ($(window).width() < 960) {

  new Swiper('.parentoverview-expert_slider', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });
}
else {
  var numItems = $('.expert-box').length;
  if(numItems > 2) {
    new Swiper('.parentoverview-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* about expert slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.expert-box').length;
  if(numItems > 2) {
    new Swiper('.about-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.expert-box').length;
  if(numItems > 2) {
    new Swiper('.about-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}

/* Support expert_slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.support-expert-box').length;
  if(numItems > 2) {
    new Swiper('.support-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.support-expert-box').length;
  if(numItems > 2) {
    new Swiper('.support-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* Pedagogy expert_slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.pedagogy-expert-box').length;
  if(numItems > 2) {
    new Swiper('.pedagogy-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.pedagogy-expert-box').length;
  if(numItems > 2) {
    new Swiper('.pedagogy-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* Daycare expert_slider (Slider) */

if ($(window).width() < 960) {

  new Swiper('.daycare-expert_slider', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });
}
else {
  var numItems = $('.daycare-expert-box').length;
  if(numItems > 2) {
    new Swiper('.daycare-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}


/* about_ref expert_slider (Slider) */

if ($(window).width() < 960) {

  new Swiper('.about_ref-expert_slider', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });
}
else {
  var numItems = $('.about_ref-expert-box').length;
  if(numItems > 2) {
    new Swiper('.about_ref-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}



/* conssulting expert_slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.consulting-expert-box').length;
  if(numItems > 2) {
    new Swiper('.consulting-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.consulting-expert-box').length;
  if(numItems > 2) {
    new Swiper('.consulting-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}



/* conssulting expert_slider (Slider) */

if ($(window).width() < 960) {

  new Swiper('.news-expert_slider', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });
}
else {
  var numItems = $('.news-expert-box').length;
  if(numItems > 2) {
    new Swiper('.news-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}




/* conssulting expert_slider (Slider) */

if ($(window).width() < 960) {

  var numItems = $('.karriere-stell-expert-box').length;
  if(numItems > 2) {
    new Swiper('.karriere-stell-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}
else {
  var numItems = $('.karriere-stell-expert-box').length;
  if(numItems > 2) {
    new Swiper('.karriere-stell-expert_slider', {
      direction: 'horizontal',
      loop: false,
      speed: 1000,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: {
          el: '.bullets',
          bulletActiveClass: 'active',
          bulletClass: 'slide',
          modifierClass: '',
          clickable: true
      }
    });
  }
}

if ($(window).width() > 1120) {
} else {
  new Swiper('.cricle-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.bullets',
        bulletActiveClass: 'active',
        bulletClass: 'slide',
        modifierClass: '',
        clickable: true
    }
  });
}

/* Testimonials (Slider) */

new Swiper('.testimonials__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
  },
  pagination: {
      el: '.bullets',
      bulletActiveClass: 'active',
      bulletClass: 'slide',
      modifierClass: '',
      clickable: true
  }
});

/* Contact Overlay */

$('.contact-overlay .contact-overlay__toggle').click(function() {
  $(this).toggleClass('opened');
  $('.contact-overlay .contact-overlay__content').toggle();
});




/* CountUp */

// $(".countup span").counterUp({
//   delay: 100,
//   time: 2000,
// });

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

// circle progress

var progressBarOptions = {
	startAngle: -1.55,
	size: 152,
  thickness: 5,
  value: 0.8,
  emptyFill: 'rgba(0, 0, 0, 0)',
  fill: {
      color: '#A4D0E5'
	}
}

// $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
// 	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
// });

// $('#circle-b').circleProgress({
// 	value : 0.3,
// 	fill: {
// 		color: '#A4D0E5'
// 	}
// });
// $('#circle-c').circleProgress({
// 	value : 0.8,
// 	fill: {
// 		color: '#A4D0E5'
// 	}
// });
// $('#circle-d').circleProgress({
// 	value : 0.7,
// 	fill: {
// 		color: '#A4D0E5'
// 	}
// });
// $('#circle-e').circleProgress({
// 	value : 0.9,
// 	fill: {
// 		color: '#A4D0E5'
// 	}
// });
// $('#circle-f').circleProgress({
// 	value : 0.5,
//   thickness: 10,
// 	fill: {
// 		color: '#166E9E'
// 	}
// });

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

$(document).on('click', '.select-options .select-option', function(){
  $('.select-options .select-option').removeClass('selected');
  $(this).addClass('selected');

  var cat = $(this).attr('rel');
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

// $(".kita-select").change(function(){
//   $(this).find("option:selected").each(function(){
//       var optionValue = $(this).attr("value");
//       if(optionValue){
//           $(".filter-item").not("." + optionValue).hide();
//           $("." + optionValue).show();
//       } else if(optionValue == all) {
//           $(".filter-item").show();
//       } else {
//           $(".filter-item").show();
//       }
//   });
// }).change();

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

$('.select').each(function () {
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

$('.kita-select').each(function () {
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
          rel: $this.children('option').eq(i).val(),
          class: 'select-option',
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

$(document).ready(function($) {
  function animateElements() {
    $('.progressbar').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var color = $(this).find('.circle').attr('data-color');
      var thickness = $(this).find('.circle').attr('data-thickness');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);
        $('#circle-f').find('.circle').circleProgress({
        	fill: {
        		color: '#166E9E'
        	}
        })
        $(this).find('.circle').circleProgress({
          emptyFill: 'rgba(0, 0, 0, 0)',
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: thickness,
          fill: {
            color: color
          }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});

// var charLimit = 600;

// function truncate(el) {
//   var clone = el.children().first(),
//     originalContent = el.html(),
//     text = clone.text();

//   if (clone[0].innerHTML.trim().length > charLimit) {
//     el.attr("data-originalContent", originalContent);
//     el.addClass("hasHidden");
//     clone.text(text.substring(0, charLimit) + "...");
//     el.empty().append(clone);
//     el.append(
//       $("<div class='read-more'><a href='#' class='more'>Mehr dazu <i class='fal fa-angle-down'></i></a>")
//     );
//   }
// }

// $("body").on("click", "a.more", function (e) {
//   e.preventDefault();
//   var truncateElement = $(this).parent().parent();
//   if (truncateElement.hasClass("hasHidden")) {
//     $(truncateElement).html(truncateElement.attr("data-originalContent"));
//     $(truncateElement).append(
//       $("<div class='read-more'><a href='#' class='more'>Weniger dazu <i class='fal fa-angle-up'></i></a>")
//     );
//     truncateElement.removeClass("hasHidden").slow;
//   } else {
//     $(".read-more", truncateElement).remove();
//     truncate(truncateElement);
//   }
// });

// $(".truncate").each(function () {
//   truncate($(this));
// });
// function myCallback() {
//   setTimeout(function () {
//     $("truncate").removeClass("hasHidden");
//   }, 3000);
// }
$(function () {
  $(".more").on("click", function () {
    var txt = $(this).parent().prev('.readmore-text').is(':visible') ? 'Mehr dazu' : 'Weniger dazu';
    $(this).text(txt);
    $(this).parent().prev('.readmore-text').slideToggle();
    $(this).toggleClass('less');
  });
});

$(function () {
  $(".filter-item").slice(0, 4).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".filter-item:hidden").slice(0, 2).slideDown();
      if ($(".filter-item:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top - 800
      }, 1500);
  });
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});